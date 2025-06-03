import React from 'react'
import './Modal.css'

const Modal = ({ open, onClose, children, backgroundColor = "white", borderRadius = "10px", maxWidth = "500px", buttonColor = "black", classButton, classOverlay, classModal }) => {
    if (!open) return null

    return (
        <div className={ `modal-overlay ${ classOverlay }` } onClick={ () => onClose } style={{ '--background-color': backgroundColor, '--border-radius': borderRadius, '--max-width': maxWidth }}>
            <div className={ `modal ${ classModal }` } onClick={ e => e.stopPropagation() }>
                <button className={ `modal-close ${classButton}`} onClick={ () => onClose } style={{ '--button-color': buttonColor }}>×</button>
                <div>{ children }</div>
            </div>
        </div>
    )
}

export default Modal