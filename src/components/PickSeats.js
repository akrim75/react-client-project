
import { actions } from '../store/actions';
import { useEffect } from 'react';
import { store } from '../store/store';
import { Table } from './Table';


export function PickSeats() {
    console.log("PickSeats");
    const state = store.getState()
   
    const showingId = 1;
    let currentShowing = {
        id: 0, film_id: 0, theater_id: 0, showing_time: new
            Date()
    };
  //  let table = { id: 0, table_number: 0, x: 1, y: 1, seats: [] };
 //   let seat = { id: 0, seat_number: 0, price: 10.75 };
    let currentFilm = { title: "A Cool Movie" };
    let currentTheater = { id: 0, name: "Theater #1" };
    // If state.showings doesn't exist, we can't draw anything ... yet.
    // But in App.js, we're dispatching fetchShowings() and rerendering
    // when a store.dispatch() happens so this component will in turn
    // be rerendered once showings are populated.
    if (state.showings?.length) {
        currentShowing = state.showings.find(showing => showing.id === +showingId);
        currentFilm = state.films.find(film => film.id === currentShowing.film_id);
        currentTheater = state.theaters.find(theater =>
            theater.id === currentShowing.theater_id) || {};
    }
    const tables = currentTheater?.tables;
  
 
    

    useEffect(() => {
        console.log("Rendering value change", showingId)
        store.dispatch(actions.fetchReservationsForShowing(showingId));
    }, [showingId]);





 

    return (<section style={styles.header} className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
            <h1 className="mdl-card__title-text">Where would you like to sit?</h1>
        </div>

        <p>Watching {currentFilm.title} in {currentTheater.name} on {currentShowing.showing_time.toShowingDateString()} at {currentShowing.showing_time.toShowingTimeString()}</p>
        <section style={styles.tablesSection}>
            {tables && tables.map(table => ( <Table key={"table" + table.table_number} currentTable={table} currentShowing={currentShowing} /> ))}
        </section>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
    </section>);
}
const styles = {
    header: {
        width: "95vw",
        margin: "10px auto",
        padding: "10px",
    },
    tablesSection: {
        paddingBottom: '40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    },
 
}