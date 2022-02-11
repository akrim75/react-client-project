
import { ShowingTimes } from "./ShowingTimes"

export const FilmBrief = (props) => {
    const film = props.film;
    const currentDate = props.currentDate;
    const showings = props.showings;

    return (
        <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
            <div style={styles.innerWrapper}>
                <div style={styles.posterDiv}>
                    <img src={film.poster_path} alt="" style={styles.poster} />
                </div>
                <div style={styles.textDiv}>
                    <p style={styles.title}>{film.title}</p>
                    <p style={styles.runtimeP}>{film.runtime}</p>
                    <p style={styles.tagline}>{film.tagline}</p>
                </div>
            </div>
           
            <div style={styles.showings}>
                {showings && <ShowingTimes showings={showings} currentFilm={film} currentDate={currentDate} />}
               
            </div>
        </section >);

}

const styles = {
    poster: {
        maxWidth: "95%",
        maxHeight: "95%",
        objectFit: "contain"
    },
    innerWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    posterDiv: {
        flex: '1 1 25%',
        padding: "5px",
    },
    textDiv: {
        flex: '1 1 25%',
        padding: "10px 5px 10px 5px",
    },
    title: {
        fontSize: '1.75rem',
        fontWeight: '900',
        textTransform: 'uppercase',
        margin: '2px',
    },
    tagline: {
        margin: '2px',
        lineHeight: '1em',
    },
    runtimeP: {
        fontSize: "0.75rem",
        margin: '2px',
    }
}