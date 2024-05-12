import React from 'react';
import  { useState } from 'react';
import Modal from 'react-modal';
import './ModalThree.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from './img_2/recept_3_1.jpg';
import rec1_2 from './img_2/recept_3_2.jpg';
import rec1_3 from './img_2/recept_3_3.jpg';
import rec1_4 from './img_2/recept_3_4.jpg';
import rec1_5 from './img_2/recept_3_5.jpg';
import rec1_6 from './img_2/recept_3_6.jpg';
import rec1_7 from './img_2/recept_3_7.jpg';
import star from "./img_2/Shape.png";



export const ModalThree = ({ isOpen, onClose, children }) => {

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
                Мука - 1,5 стакана<br/>
                Молоко - 3 стакана <br/>
                Яйца куриные - 3 шт <br/>
                Соль - 1 щепотка<br/>
                Сахар - 3 ст. ложки<br/>
                Масло растительное - 3 ст. ложки
            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt3'}>В миску вбить яйца, добавить соль и сахар.</h3>
                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt1'}>Взбить яичную смесь в крепкую пену.
                            Добавить один стакан молока. Перемешать.</h3>
                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt1'}>Просеять муку. Постепенно ввести в яично-молочную смесь муку (по 2-3 ст. ложки).</h3>

                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt2'}>Перемешать до исчезновения комочков.
                            Добавить оставшееся молоко, перемешать. Влить растительное масло.
                            Еще раз хорошо взбить тесто.</h3>

                    </div>
                    <div className="grid-item_1">

                        <img className={'img_rec_1'} src={rec1_5}/>
                        <h3 className={'txt5'}>Сковороду поставить на огонь, раскалить. Смазать сковороду растительным маслом.На сковороду вылить порцию теста (около 0,5 половника), распределить тесто по всей поверхности сковороды.</h3>

                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt1'}> Выпекать блинчик на среднем огне, сперва с одной стороны около минуты (до золотистости).</h3>
                        {/*<img className={'star_'} src={star}/>*/}
                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_7}/>
                        <h3 className={'txt3'}>Перевернуть блинчик и так же печь с другой стороны.</h3>
                        {/*<img className={'star_'} src={star}/>*/}
                    </div>

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


