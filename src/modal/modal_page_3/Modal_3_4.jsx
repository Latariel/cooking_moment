
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_3_4.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_4/recept_4_1.jpg';
import rec1_2 from '../img_4/recept_4_2.jpg';
import rec1_3 from '../img_4/recept_4_3.jpg';
import rec1_4 from '../img_4/recept_4_4.jpg';
import rec1_5 from '../img_4/recept_4_5.jpg';
import rec1_6 from '../img_4/recept_4_6.jpg';
import rec1_7 from '../img_3/recept_4_7.jpg';
import rec1_8 from '../img_3/recept_4_8.jpg';
import rec1_9 from '../img_3/recept_3_9.jpg';
import star from "../img_2/Shape.png";



export const Modal_3_4 = ({ isOpen, onClose, children }) => {

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
                Куриное филе - 500 г<br/>
                Свежие шампиньоны - 300 г<br/>
                Лук (2 шт)<br/>
                Яйца (2 шт)<br/>
                Сыр - 200 г<br/>
                Сливки - 300 мл<br/>
                Мука - 2 ст.л<br/>



            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-4">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1_1'}>
                            Куриное филе отварить до готовности, когда остынет, нарезать мелкими кубиками.</h3>
                    </div>
                    <div className="grid-4">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt2_2'}>Грибы нарезать, выложить на сковороду, немного пожарить.
                        </h3>
                    </div>
                    <div className="grid-4">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt1_1'}>Лук мелко нарезать, добавить к грибам, пожарить до готовности.</h3>

                    </div>
                    <div className="grid-4">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt2_2'}>Добавить филе, посолить, поперчить, перемешать, снять с огня.</h3>

                    </div>
                    <div className="grid-4">

                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2_2'}>Добавить курицу с грибами, перемешать, снять с огня.</h3>

                    </div>
                    <div className="grid-4">

                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt2_2'}>Сверху посыпать тертым сыром. Запекать в духовке до золотистой корочки при температуре 180 градусов</h3>

                    </div>
                    {/*<div className="grid-4">*/}

                    {/*    <img className={'img_rec'} src={rec1_7}/>*/}
                    {/*    <h3 className={'txt2_2'}>Сверху выложите кусочки ветчины и помидоров, посыпьте орегано и сыром.</h3>*/}

                    {/*</div>*/}
                    {/*<div className="grid-4">*/}

                    {/*    <img className={'img_rec'} src={rec1_8}/>*/}
                    {/*    <h3 className={'txt2_2'}>Накройте крышкой и готовьте около 10 минут до расплавления сыра.</h3>*/}

                    {/*</div>*/}
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