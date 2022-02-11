import { Seat } from "./Seat";

export const Table = ({currentTable, currentShowing}) => {


    function getTableWidth(seats) {
        return { width: seats.length * 40 + "px" }
    } 

    return (<div  style={styles.wrapper}>
        <div style={styles.tableWrapper}>
            <div style={{ ...styles.tableItself, ...getTableWidth(currentTable.seats) }}>{currentTable.table_number}</div>
        </div>

        <div style={styles.seatsWrapper}>
            {currentTable.seats.map(seat => (<Seat key={seat.seat_number}
            currentSeat ={seat}  currentShowing ={currentShowing} />))}
        </div>

    </div>);
}

const styles = {

    wrapper: {
        margin: "20px",
    },
    tableWrapper: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    tableItself: {
        height: "40px",
        backgroundColor: "blue",
        borderRadius: "20px",
        color: "white",
        fontSize: "20px",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    seatsWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
   
}