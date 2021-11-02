import React, { useState } from 'react';
import './interestButton.scss';


const InterestButton = ({ text = 'Swimming', handleClick, previousInterest }) => {
    const [selected, setSelected] = useState(false);

    const onSelect = (e) => {
        setSelected(true)
    }

    const onCancel = (e) => {
        e.stopPropagation();
        setSelected(false)
    }

    const CancelSVG = () => (
        <svg width="34" position="relative" right="16.67%" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.25 13.75L13.75 21.25" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.75 13.75L21.25 21.25" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="17" cy="17" r="16.5" stroke="#B0B0B0" />
        </svg>
    );
    const MarkSVG = () => (
        <svg width="18" border="1px solid red" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L6 12L1 7" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );

    return (

        <div className="interest-btn" onClick={onSelect}>
            <p className="text" style={{ color: (selected && previousInterest) && '#3359DB'}}>{text}</p>
            <div >
                {selected ? <span onClick={onCancel}>
                    <CancelSVG /> </span> : <MarkSVG />}
            </div>
        </div>
    )
}

export default InterestButton;