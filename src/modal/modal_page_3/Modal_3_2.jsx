
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_3_2.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_4/recept_2_1.jpg';
import rec1_2 from '../img_4/recept_2_2.jpg';
import rec1_3 from '../img_4/recept_2_3.jpg';
import rec1_4 from '../img_4/recept_2_4.jpg';
import rec1_5 from '../img_4/recept_2_5.jpg';
import rec1_6 from '../img_4/recept_2_6.jpg';
import rec1_7 from '../img_4/recept_2_7.jpg';
import rec1_8 from '../img_4/recept_2_8.jpg';
// import rec1_9 from '../img_4/recept_2_9.jpg';
import star from "../img_2/Shape.png";



export const Modal_3_2 = ({ isOpen, onClose, children }) => {

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
                Говядина - 500 г.<br/>
                Консервированная фасоль - 1 банк. <br/>
                Красны лук (1 шт)<br/>
                Красный сладкий перец (2 шт).<br/>
                Грецкие орехи - 100 г.<br/>
                Кинза - 1 пуч.<br/>
                Чеснок - 3 зуб.<br/>
                Оливковое масло - 4 ст. л.

            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-7">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1'}>
                            Нарежьте мясо на небольшие кусочки. Поставьте сковороду на средний огонь</h3>
                    </div>
                    <div className="grid-7">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt4'}>Добавьте немного оливкового масла и обжарьте говядину до готовности</h3>
                    </div>
                    <div className="grid-7">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt4'}>Очистите и нашинкуйте лук на тонкие полоски.</h3>

                    </div>
                    <div className="grid-7">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt4'}>Сладкий перец очистите от семян и нарежьте полосками.</h3>

                    </div>
                    <div className="grid-7">

                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2'}>Грецкие орехи измельчите, но не слишком мелко, чтобы сохранить текстуру.</h3>

                    </div>
                    <div className="grid-7">

                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt2'}>Кинзу промойте, обсушите бумажным полотенцем и мелко нарежьте.</h3>

                    </div>
                   <div className="grid-7">

                    <img className={'img_rec'} src={rec1_7}/>
                 <h3 className={'txt2'}>Чеснок очистите от шелухи и далее измельчите ножом или же с помощью чеснокодавилки.</h3>

                   </div>
                    <div className="grid-7">

                        <img className={'img_rec'} src={rec1_8}/>
                        <h3 className={'txt5'}>В глубокой тарелке смешайте все ингридиенты вместе, приправьте микс оливковым маслом, добавьте соль и перец по вашему вкусу</h3>

                    </div>
{/*                    <div className="grid-7
*/}
{/*">*/}

{/*                        <img className={'img_rec'} src={rec1_9}/>*/}
{/*                        <h3 className={'txt2'}>Готовые ПП оладьи из куриной печени сложить на плоскую тарелку. Они будут тонкими и очень нежными. Можете не переживать, печеночное тесто хорошо прожарилось с двух сторон.</h3>*/}

{/*                    </div>*/}
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