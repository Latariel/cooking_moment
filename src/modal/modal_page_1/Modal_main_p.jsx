import React from 'react';
import './Modal_main_p.css'
// import { IoIosClose } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Transition } from "react-transition-group";


export const Modal_main_p = ({ isOpen, onClose, children }) => {
    const onWrapperClick = (event) => {
        if (event.target.classList.contains("modal-wrapper")) onClose();
    };
    return (
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
                {(state) => (
                    <div className={`modal modal--${state}`}>
                        <div className="modal-wrapper" onClick={onWrapperClick}>
                            <div className="modal-content">
                                <button
                                    className="modal-close-button"
                                    onClick={() => onClose()}
                                >
                                    <IoCloseSharp className={'close'}/>
                                </button>
                                {children}
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
};