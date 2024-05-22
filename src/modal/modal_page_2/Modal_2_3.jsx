
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_2_3.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_3/recept_3_1.jpg';
import rec1_2 from '../img_3/recept_3_2.jpg';
import rec1_3 from '../img_3/recept_3_3.jpg';
import rec1_4 from '../img_3/recept_3_4.jpg';
import rec1_5 from '../img_3/recept_3_5.jpg';
import rec1_6 from '../img_3/recept_3_6.jpg';
import rec1_7 from '../img_3/recept_3_7.jpg';
import rec1_8 from '../img_3/recept_3_8.jpg';
import rec1_9 from '../img_3/recept_3_9.jpg';
import star from "../img_2/Shape.png";



export const Modal_2_3 = ({ isOpen, onClose, children }) => {

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
                Капуста белокочанная – 500 г<br/>
                Морковь – 1 шт. <br/>
                Лук (1 шт)<br/>
                Томатная паста – 3 ст.л<br/>
                Вода – 120 мл<br/>
                Масло подсолнечное – 30 мл<br/>

            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-3">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1_1'}>
                            Залить томатную пасту теплой водой, размешать жидкость до однородности.</h3>
                    </div>
                    <div className="grid-3">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt2_2'}>Нарезать порцию капусты острым ножом или нашинковать на специальной терке для капусты.</h3>
                    </div>
                    <div className="grid-3">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt1_1'}>Очистить лук от шелухи, промыть и разрезать на мелкие кусочки.</h3>

                    </div>
                    <div className="grid-3">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt1_1'}>Очистить морковь от кожуры и натереть на средней или мелкой терке.</h3>

                    </div>
                    <div className="grid-3">

                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2_2'}>Обжарить нарезанный лук на разогретой сковороде с добавлением небольшого количества растительного масла. Лук должен стать прозрачным и мягким.</h3>

                    </div>
                    <div className="grid-3">

                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt2_2'}>Добавить в сковородку с луком морковь и, при необходимости, небольшое количество растительного масла. Обжарить морковь 3-4 минуты и перейти к следующему этапу приготовления.</h3>

                    </div>
                    <div className="grid-3">

                        <img className={'img_rec'} src={rec1_7}/>
                        <h3 className={'txt2_2'}>Высыпать капусту в сковороду с обжаренными овощами, перемешать.</h3>

                    </div>
                    <div className="grid-3">

                        <img className={'img_rec'} src={rec1_8}/>
                        <h3 className={'txt2_2'}>Обжарить капусту с овощами 3-4 минуты, периодически перемешивая. Если сковорода небольшая, всыпать капусту в два этапа. Капуста должна уменьшиться в объеме в несколько раз.</h3>

                    </div>
                    <div className="grid-3">

                        <img className={'img_rec'} src={rec1_9}/>
                        <h3 className={'txt2_2'}>Влить томатную пасту в сковороду с капустой, перемешать, добавить соль. Накрыть крышкой и тушить 20 минут до мягкости, помешивая овощи. Если капуста зимних сортов, тогда время тушения увеличится на 5-10 минут.</h3>

                    </div>
                </div>
            </div>

            <img className={'star_9'} src={star}/>
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