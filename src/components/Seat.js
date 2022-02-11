import seatImage from '../bundledImages/seat.png';
import { useDispatch } from "react-redux";
import { actions } from '../store/actions';


export const Seat = (props) => {
    const seat = props.currentSeat;
    const currentShowing= props.currentShowing;
    const dispatch = useDispatch();

    function reserveSeat(seat) {
        console.log(seat)
        dispatch(actions.addSeatToCart(seat, currentShowing));
    }

    return (<div style={styles.seatWrapper}>
        <div  style={{ ...styles.seatItself }} onClick={() => reserveSeat(seat)} >
            {seat.seat_number}
        </div>
    </div>);
}

const styles = {
    seatItself: {
        backgroundImage: `url(${seatImage})`,
        backgroundSize: "100% 100%",
        width: "30px",
        height: "30px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px 10px 0px 0px",
    },
    seatWrapper: {
        margin: "5px",
    }
}