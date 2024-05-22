
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_3_5.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_4/recept_5_1.jpg';
import rec1_2 from '../img_4/recept_5_2.jpg';
import rec1_3 from '../img_4/recept_5_3.jpg';
import rec1_4 from '../img_4/recept_5_4.jpg';
import rec1_5 from '../img_4/recept_5_5.jpg';
import rec1_6 from '../img_4/recept_5_6.jpg';
import rec1_7 from '../img_4/recept_5_7.jpg';
import rec1_8 from '../img_4/recept_5_8.jpg';
import rec1_9 from '../img_4/recept_5_9.jpg';
import rec1_10 from '../img_4/recept_5_10.jpg';
import rec1_11 from '../img_4/recept_5_11.jpg';
import rec1_12 from '../img_4/recept_5_12.jpg';
import star from "../img_2/Shape.png";



export const Modal_3_5 = ({ isOpen, onClose, children }) => {

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
                Картофель - 1,4 кг <br/>
                Фарш - 400 г<br/>
                Чеснок (1-2 зубчика)<br/>
                Лук (1-2 шт)<br/>
                Масло сливочное 50 г<br/>
                Яйца 1 шт.<br/>
                Сыр - 100 г <br/>



            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-5">

                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1_1'}>
                            Очищаем картофель, нарезаем его на кусочки и ставим его вариться до готовности</h3>
                    </div>
                    <div className="grid-5">

                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt3'}>Очищаем лук  и мелко его нарезаем.</h3>
                    </div>
                    <div className="grid-5">

                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt1_1'}>разогреваем сковороду с растительным маслом и обжариваем лук до золотистого состояния.</h3>

                    </div>
                    <div className="grid-5">

                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt1'}>Добавляем в сковороду фарш (500 г), примерно 1/4 чайной ложки соли и чеснок (3-4 зубчика)</h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2_2'}>Разминаем картофель и делаем картофельное пюре</h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt4'}>Сыр (100 г) натираем на крупной тёрке.</h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_7}/>
                        <h3 className={'txt2'}>Собирать будем по-классике: картофель-фарш-картофель-сыр.</h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_8}/>
                        <h3 className={'txt2_2'}>Первый нижний слой — картофельное пюре.</h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_9}/>
                        <h3 className={'txt2_2'}>Далее выкладываем фарш, также равномерно его распределяем по всей площади формы и выравниваем.</h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_10}/>
                        <h3 className={'txt2_2'}>Теперь аккуратно выкладываем оставшееся картофельное пюре</h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_11}/>
                        <h3 className={'txt2'}>Равномерно посыпаем сверху тёртым сыром. </h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_12}/>
                        <h3 className={'txt2_2'}>Разогреваем духовку до 200°С и ставим в неё форму на 15-20 минут.</h3>

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