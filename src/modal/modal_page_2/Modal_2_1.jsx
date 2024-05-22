
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_2_1.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_3/recept_1_1.jpg';
import rec1_2 from '../img_3/recept_1_2.jpg';
import rec1_3 from '../img_3/recept_1_3.jpg';
import rec1_4 from '../img_3/recept_1_4.jpg';
import rec1_5 from '../img_3/recept_1_5.jpg';
import star from "../img_2/Shape.png";



export const Modal_2_1 = ({ isOpen, onClose, children }) => {

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
                Ингредиенты (на 4 порции): <br/>
                <br/>
                Помидоры (400 гр)<br/>
                Томатная паста (40 гр)<br/>
                Лук (1 шт)<br/>
                3 Зубчика чеснока<br/>
                Свежая зелень<br/>
                Куриный бульон<br/>
                Оливковое масло
            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-1">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1'}>
                            Обжарить на оливковом масле в кастрюле с толстым дном мелко рубленные лук и чеснок.</h3>
                    </div>
                    <div className="grid-1">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt1'}>Обдать кипятком помидоры, аккуратно снять кожицу, крупно порубить, добавить в кастрюлю и тушить 5 минут</h3>
                    </div>
                    <div className="grid-1">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt4'}>Добавить томатную пасту, куриный бульон, специи, соль и томить все 15–20 минут.</h3>

                    </div>
                    <div className="grid-1">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt3'}>Слегка остудить суп и взбить погружным блендером.</h3>

                    </div>
                    <div className="grid-1">

                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2'}>Разлить по тарелкам и в каждую добавить по 3 ст.л. сыра кремчиз. Перед подачей посыпать зеленью.</h3>

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