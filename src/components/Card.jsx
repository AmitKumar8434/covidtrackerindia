import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const Card = (props) => {
    const styles = {
        border: props.border,
        color:props.textColor,
    }
    return (
        <>
            <div className="card" style={styles}>
            <h2>{props.text}</h2>
                <p><TrendingUpIcon/> {props.number}</p>
            </div>
        </>
    )
}
export default Card;