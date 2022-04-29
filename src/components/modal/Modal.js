import { useState, useEffect } from 'react';

const modalStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgb(0, 0, 0, 0.5)',
}

const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'lightblue',
}

/*const testScroll = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'lightblue',
    marginTop: '200px',
}

const testScrollTwo = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'pink',
}*/

const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        if (!isOpen)
            setIsOpen(true);
    }

    const handleClose = () => {
        if (isOpen)
            setIsOpen(false);
    }

    const handleStopPropagation = e => {
        e.stopPropagation();
    }

    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                if (isOpen)
                    setIsOpen(false);
            }
        }
        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, [isOpen])

    return (
        <>
            {!isOpen && <button onClick={() => handleOpen()}> Open Modal </button>}

            {isOpen &&
                <div className="modal" style={modalStyle} onClick={() => handleClose()}>
                    <div className="modalContent" style={contentStyle} onClick={(e) => handleStopPropagation(e)}>
                        <div className="modalHeader">
                            Header
                            <button onClick={() => handleClose()}> Close Modal </button>

                        </div>
                        <div className="modalMain"> Main </div>
                        <div className="modalFooter"> Footer </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Modal;