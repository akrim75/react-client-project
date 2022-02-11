import { useSelector } from "react-redux";
import { PickDate } from "./PickDate";
import { store } from "../store/store";
import { ShowingTimes } from "./ShowingTimes";
import { useState } from "react";


export function FilmDetails() {
  const [state, setState] = useState(store.getState());
  const films = useSelector(state => state.films);
  const showings = useSelector(state => state.showings);
  const currentDate = new Date(useSelector(state => state.currentDate))
  const film = films[0] || {};

  console.log("FilmDetails");
  return (<>
    <div style={{ ...styles.container }} className='mdl-card mdl-shadow--2dp'>
      <div style={{}}>
        <h1>{film.title}</h1>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1 1 30%' }}>
          <img src="/img/posters/1.jpg" alt="" style={styles.poster} />
        </div>
        <div style={{ flex: '1 1 70%' }}>
          <h1>{film.title}</h1>
          <h2>{film.tagline}</h2>
          <p>{film.overview}</p>
          <p>Viewer's ratings: <span>{film.vote_average}</span> / <span>{film.vote_count}</span></p>
          <p>{film.release_date}</p>
          <p>{film.runtime}</p>
          <a href="HOMEPAGE" target="movie_site">{film.homepage}</a>

          <PickDate />
          {showings && <ShowingTimes showings={showings} currentFilm={film} currentDate={currentDate} />}

        </div>
      </div>
    </div>
  </>);
}

const styles = {
  container: {
    width: '95%',
    margin: '20px 20px',
    padding: '20px',
  },
  poster: {
    maxWidth: '95%',
    objectFit: 'contain',
  },
  wrapper: {
    marginTop: '20px',
  },
  headline: {
    fontSize: '1.2em',
  },
  showingTimesWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    background: 'black',
    color: 'white',
    fontWeight: 'bold',
    padding: '20px',
    margin: '10px',
  }
}