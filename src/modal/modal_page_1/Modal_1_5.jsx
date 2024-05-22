import React from 'react';
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_1_5.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_2/recept_5_1.jpg';
import rec1_2 from '../img_2/recept_5_2.jpg';
import rec1_3 from '../img_2/recept_5_3.jpg';
import rec1_4 from '../img_2/recept_5_4.jpg';
import rec1_5 from '../img_2/recept_5_5.jpg';
import rec1_6 from '../img_2/recept_5_6.jpg';
import star from "../img_2/Shape.png";



export const Modal_1_5 = ({ isOpen, onClose, children }) => {

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
                <span className={'text_modal_rec_3'}> Ингредиенты (на 2 порции): </span>  <br/>
                <br/>
                Хлопья овсяные – 6 ст.л. <br/>
                Ряженка – 500 мл <br/>
                Семена – 1 ч.л. (льна) <br/>
                Банан – 1 шт.<br/>
                Орехи – 1 ст.л.
            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt3'}>На дно насыпаем 3 столовые ложки овсяных хлопьев.</h3>
                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt4'}>Добавляем семена льна.</h3>
                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt1'}>Заливаем овсянку кефиром или ряженкой. Перемешиваем содержимое банки.</h3>

                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt1'}>Добавляем к овсянке в банке рубленые орехи (можно выбрать любые орехи по желанию).</h3>

                    </div>
                    <div className="grid-item_1">

                        <img className={'img_rec_1'} src={rec1_5}/>
                        <h3 className={'txt1'}>Нарежьте банан мелкими кубиками. Выложите банан на орехи (можно использовать любые фркуты/ягоды)</h3>

                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt1'}> Плотно закройте банку и поместите в холодильник на ночь. Завтрак готов!</h3>
                        {/*<img className={'star_'} src={star}/>*/}
                    </div>
                    {/*<div className="grid-item_1">*/}
                    {/*    <img className={'img_rec'} src={rec1_7}/>*/}
                    {/*    <h3 className={'txt3'}>Перевернуть блинчик и так же печь с другой стороны.</h3>*/}
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