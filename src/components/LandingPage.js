import { useSelector } from "react-redux";
import { useState } from "react";
import { store } from "../store/store";
import { PickDate } from "./PickDate";
import { FilmBrief } from "./FilmBrief";


export function LandingPage() {
  const [state, setState] = useState(store.getState());
  const films = useSelector(state => state.films);
  const showings = useSelector(state => state.showings);
  const currentDate = new Date(useSelector(state => state.currentDate))
  const film = films[0] || {};


  console.log("LandingPage");
  films.map(f => console.log(f));

  return (<>
    <section style={styles.header} className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title">
        <span className="mdl-card__title-text">Showings for {currentDate.toShowingDateString()}</span>
      </div>
    </section>
    <PickDate />
    <section style={styles.filmsWrapper}>
      {films.map(film => (<>
        <FilmBrief film={film} key={film.id}  currentDate={currentDate} showings={showings}/>
        </>
      ))}
      
    </section>
    
  </>);
}

const styles = {

  header: {
    width: "95vw",
    margin: "10px auto",
    padding: "10px",
  },
  filmsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  wrapper: {
    width: '300px',
    margin: '30px',
    cursor: 'pointer',
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
  }


}

