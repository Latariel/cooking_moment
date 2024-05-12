import React from 'react';
import  { useState } from 'react';
import Modal from 'react-modal';
import './ModalFour.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from './img_2/recept_4_1.jpg';
import rec1_2 from './img_2/recept_4_2.jpg';
import rec1_3 from './img_2/recept_4_3.jpg';
import rec1_4 from './img_2/recept_4_4.jpg';
import rec1_5 from './img_2/recept_4_5.jpg';
import star from "./img_2/Shape.png";



export const ModalFour = ({ isOpen, onClose, children }) => {

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
            <span className={'text_modal_rec_3'}> Ингредиенты: </span>  <br/>
                <br/>
                Овсяные хлопья 65 гр <br/>
                Зеленый чай 100 мл <br/>
                Киви 3 - 4 шт
            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt3'}>Заварить зеленый чай.</h3>
                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt1'}>Овсянку промыть.Овсяные хлопья замочить в зелёном чае и оставить на 10 минут.</h3>
                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt1'}>Киви очистить и нарезать на небольшие кусочки.</h3>

                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt2'}>В чаше блендера соединить все ингредиенты. Измельчить до однородной консистенции.</h3>

                    </div>
                    <div className="grid-item_1">

                        <img className={'img_rec_1'} src={rec1_5}/>
                        <h3 className={'txt1'}>Смузи готов. По желанию украсить напиток небольшим количеством овсяных хлопьев.</h3>

                    </div>
                    {/*<div className="grid-item_1">*/}
                    {/*    <img className={'img_rec'} src={rec1_6}/>*/}
                    {/*    <h3 className={'txt1'}> Выпекать блинчик на среднем огне, сперва с одной стороны около минуты (до золотистости).</h3>*/}
                    {/*    /!*<img className={'star_'} src={star}/>*!/*/}
                    {/*</div>*/}
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