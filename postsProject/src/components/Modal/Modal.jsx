import React from 'react'
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom'
function Modal({ children }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('..');
    }
    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}>
            </div>
            <dialog className={classes.modal} open={true}>
                {children}
            </dialog>
        </>
    )
}

export default Modal
