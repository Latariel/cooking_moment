import React from 'react';
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_1_2.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_2/recept_2_1.jpg';
import rec1_2 from '../img_2/recept_2_2.jpg';
import rec1_3 from '../img_2/recept_2_3.jpg';
import rec1_4 from '../img_2/recept_2_4.jpg';
import rec1_5 from '../img_2/recept_2_5.jpg';
import star from "../img_2/Shape.png";



export const Modal_1_2 = ({ isOpen, onClose, children }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div className={'modal_main_2'}>
            <button onClick={closeModal} className={'close_2'}>
                <IoCloseSharp className={'close_3'}/>
            </button>


    <h2 className={'text_modal_rec_2'}>
        Ингредиенты: <br/>
        <br/>
        Творог жирный - 500 г<br/>
        Яйцо - 1 шт <br/>
        Сахар - 2 ст. ложки<br/>
        Ванилин - 1 г или ванильный сахар - 1 ч. ложка<br/>
        Соль - 1 щепотка<br/>
        Масло растительное - для жарки<br/>
        Мука - 3 ст. ложки + 2 ст. ложки (для панировки)
    </h2>
                        <div className="m-wrap">
                            <div className="three-col-grid_1">
                                <div className="grid-item_1">
                                    <img className={'img_rec'} src={rec1_1}/>
                                    <h3 className={'txt2'}>В миску кладём творог, добавляем яйцо, сахар, ванилин или ванильный сахар и соль.
                                        Всё перемешиваем.</h3>
                                </div>
                                <div className="grid-item_1">
                                    <img className={'img_rec'} src={rec1_2}/>
                                    <h3 className={'txt3'}>Добавляем муку и снова перемешиваем.</h3>
                                </div>
                                <div className="grid-item_1">
                                    <img className={'img_rec'} src={rec1_3}/>
                                    <h3 className={'txt1'}>Ложкой набираем немного творожной массы, опускаем в муку и, хорошо обсыпая мукой, формируем сырники.</h3>

                                </div>
                                <div className="grid-item_1">
                                    <img className={'img_rec'} src={rec1_4}/>
                                    <h3 className={'txt7'}>Обжариваем сырники на умеренном огне до румяного цвета с двух сторон.</h3>

                                </div>
                                <div className="grid-item_1">

                                    <img className={'img_rec'} src={rec1_5}/>
                                    <h3 className={'txt1'}>Снимаем сырники на бумажное полотенце, чтобы избавиться от лишнего масла.</h3>

                                </div>
                                {/*<div className="grid-item_1">*/}
                                {/*    <img className={'img_rec'} src={rec1_6}/>*/}
                                {/*    <h3 className={'txt2'}>На сухую сковороду налейте тесто небольшим половником. Накройте крышкой, и жарьте панкейки на среднем огне.</h3>*/}
                                {/*    /!*<img className={'star_'} src={star}/>*!/*/}
                                {/*</div>*/}
                            </div>
                        </div>

                        <img className={'star_8'} src={star}/>
        </div>
    );

    return (

        <div>
            <div className={'btn_2_1'}>
                <button onClick={openModal} className={'btn_2'}>Подробнее</button>
            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );
};


