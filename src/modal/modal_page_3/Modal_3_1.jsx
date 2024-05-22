
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_3_1.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_4/recept_1_1.jpg';
import rec1_2 from '../img_4/recept_1_2.jpg';
import rec1_3 from '../img_4/recept_1_3.jpg';
import rec1_4 from '../img_4/recept_1_4.jpg';
import rec1_5 from '../img_4/recept_1_5.jpg';
import star from "../img_2/Shape.png";



export const Modal_3_1 = ({ isOpen, onClose, children }) => {

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
                Спагетти - 400 г<br/>
                Чеснок (2 зубчика)<br/>
                Ветчина - 300 г<br/>
                Яичный желток - 4 штуки<br/>
                Тертый сыр - 100 г<br/>
                Сливки 10%-ные - 200 мл<br/>
                Оливковое масло
            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-6">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1'}>
                            Спагетти варить 7-10 минут в кипящей подсоленной воде и откинуть на дуршлаг.</h3>
                    </div>
                    <div className="grid-6">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt5'}>В сковороде разогрейте оливковое масло, положите чеснок и слегка подрумяньте.Ветчину/бекон мелко нарежьте, добавьте к чесноку.</h3>
                    </div>
                    <div className="grid-6">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt4'}>Сыр натрите на мелкой терке. Желтки взбить со сливками, немного подсолить.</h3>

                    </div>
                    <div className="grid-6">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt4'}>Спагетти переложить в сковородку с чесноком и ветчиной/беконом.</h3>

                    </div>
                    <div className="grid-6">

                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2'}>Добавить взбитые желтки и тёртый сыр, перемешать. Держать на огне 3 минуты.</h3>

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