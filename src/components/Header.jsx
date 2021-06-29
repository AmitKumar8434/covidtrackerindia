import React from 'react';
import flag from '../images/flag1.png';
import Zoom from 'react-reveal/Zoom';

const Header = () => {
    return (
        <>
            <div className="header">
            <Zoom>
                <h1 className="header_text">Covid-19 Tracker, India <span><img src={flag} alt="Icon"/></span></h1>
                </Zoom>
                </div>
        </>
    )
}
export default Header;