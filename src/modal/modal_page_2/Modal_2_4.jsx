
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_2_4.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_3/recept_4_1.jpg';
import rec1_2 from '../img_3/recept_4_2.jpg';
import rec1_3 from '../img_3/recept_4_3.jpg';
import rec1_4 from '../img_3/recept_4_4.jpg';
import rec1_5 from '../img_3/recept_4_5.jpg';
import rec1_6 from '../img_3/recept_4_6.jpg';
import rec1_7 from '../img_3/recept_4_7.jpg';
import rec1_8 from '../img_3/recept_4_8.jpg';
import rec1_9 from '../img_3/recept_3_9.jpg';
import star from "../img_2/Shape.png";



export const Modal_2_4 = ({ isOpen, onClose, children }) => {

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
                Сыр - 100 г <br/>
                Ветчина - 150 г<br/>
                Сметана - 200 г<br/>
                Яйца (2 шт)<br/>
                Томатная паста – 3 ст.л<br/>
                Помидор (1 шт)<br/>
                Мука - 200 г<br/>
                Масло подсолнечное – 30 мл<br/>


            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-4">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1_1'}>
                            В большую миску разбейте яйца, добавьте сметану и перемешайте.</h3>
                    </div>
                    <div className="grid-4">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt2_2'}>Всыпьте муку и соль, размешайте до однородности, должно получиться густое тесто.
                        </h3>
                    </div>
                    <div className="grid-4">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt1_1'}>Влейте масло и ещё раз хорошо размешайте.</h3>

                    </div>
                    <div className="grid-4">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt2_2'}>На хорошо разогретую сковородку выложите тесто, разровняйте, жарьте до корочки на одной стороне — 7-8 минут на среднем огне.</h3>

                    </div>
                    <div className="grid-4">

                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2_2'}>Измельчите сыр на тёрке, ветчину нарежьте ломтиками, помидор — кружочками.</h3>

                    </div>
                    <div className="grid-4">

                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt2_2'}>Переверните тесто, налейте томатный соус и размажьте по основе.</h3>

                    </div>
                    <div className="grid-4">

                        <img className={'img_rec'} src={rec1_7}/>
                        <h3 className={'txt2_2'}>Сверху выложите кусочки ветчины и помидоров, посыпьте орегано и сыром.</h3>

                    </div>
                    <div className="grid-4">

                        <img className={'img_rec'} src={rec1_8}/>
                        <h3 className={'txt2_2'}>Накройте крышкой и готовьте около 10 минут до расплавления сыра.</h3>

                    </div>
                    {/*<div className="grid-4
">*/}

                    {/*    <img className={'img_rec'} src={rec1_9}/>*/}
                    {/*    <h3 className={'txt2_2'}>Влить томатную пасту в сковороду с капустой, перемешать, добавить соль. Накрыть крышкой и тушить 20 минут до мягкости, помешивая овощи. Если капуста зимних сортов, тогда время тушения увеличится на 5-10 минут.</h3>*/}

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