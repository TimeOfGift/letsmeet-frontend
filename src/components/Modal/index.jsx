import React, { useState } from 'react'
import Button from '../Button/index'
import './modal.scss'
import propTypes from 'prop-types';

const Modal = ({confirmBtnText}) => {
 const [modal, setModal] = useState(false);

 const showModal = () => { 
     setModal(!modal)
 }

 const preventOnClick = (e) => {
    e.stopPropagation()
 }
 
    return (
        <div className='modal'>
            {!modal ? <Button handleClick={showModal} className="headButton" text="&#128393;"/> :
               <div onClick={showModal} className='modal-body'>
                <div onClick={preventOnClick} className="modal-content"> 
                   <div className="button-div">
                   <Button handleClick={showModal} className=" firstButton" text="Cancel"/>
                   <Button handleClick={showModal} className="secondButton" text={confirmBtnText || "Confirm"} />
                   </div>
                </div>                  
               </div>
        }
        </div>
    )
}
confirmBtnText.propTypes={
    confirmBtnText: propTypes.string,
}



export default Modal;
