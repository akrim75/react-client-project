

export const ShowingTimes = (prop) => {

    const currentFilm = prop.currentFilm;
    const currentDate = new Date(prop.currentDate);
    const showings = prop.showings;


    const showingsForDateAndFilm = showings.filter(st => st.film_id ===
        currentFilm.id && st.showing_time > currentDate.setHours(0, 0, 0, 0) &&
        st.showing_time < currentDate.setHours(23, 59, 59, 999));

    return (<section style={styles.wrapper}>
        <p style={styles.headline}>Showing times for {currentDate.toShowingDateString()}</p>
        <div style={styles.showingTimesWrapper}>
            {showingsForDateAndFilm.map(st => (
                <span style={styles.title} key={st.id}>
                    {st.showing_time.toShowingTimeString()}</span>
            )
            )}
        </div>
    </section>);
}

const styles = {
    wrapper: {
        padding: '5px',
    },
    headline: {
        margin: '0',
        fontWeight: 'bold',
        fontSize: '0.8em',
    },
    showingTimesWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    title: {
        background: 'rgba(0,0,0,0.25)',
        color: 'black',
        fontWeight: '200',
        fontSize: '0.8em',
        padding: '5px',
        margin: '3px',
    }
}