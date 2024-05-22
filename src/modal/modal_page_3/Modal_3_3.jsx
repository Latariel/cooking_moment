
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_3_3.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_4/recept_3_1.jpg';
import rec1_2 from '../img_4/recept_3_2.jpg';
import rec1_3 from '../img_4/recept_3_3.jpg';
import rec1_4 from '../img_4/recept_3_4.jpg';
import rec1_5 from '../img_4/recept_3_5.jpg';
import rec1_6 from '../img_4/recept_3_6.jpg';
import rec1_7 from '../img_3/recept_3_7.jpg';
import rec1_8 from '../img_3/recept_3_8.jpg';
import rec1_9 from '../img_3/recept_3_9.jpg';
import star from "../img_2/Shape.png";



export const Modal_3_3 = ({ isOpen, onClose, children }) => {

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
                Картофель 2-3 шт. <br/>
                Лук (1 шт)<br/>
                Мука 2 ст.л<br/>
                сливки 20-33% - 50 мл.<br/>
                Ветчина 200 г<br/>
                Чеснок 4 зубчика<br/>
                крупный стебель сельдерея 1 шт.<br/>
                Мускатный орех 1/3 ч.л.

            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-3">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1_1'}>
                            Картофель нарезаем кубиками. Кладем в кастрюлю</h3>
                    </div>
                    <div className="grid-3">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt1'}>Вливаем бульон, кладем тимьян и варим до полуготовности картофеля.</h3>
                    </div>
                    <div className="grid-3">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt1_1'}>Тем временем мелко рубим лук и сельдерей и жарим 2-3 минуты. Перекладываем к картофлелю </h3>

                    </div>
                    <div className="grid-3">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt1_1'}>В той же сковороде слегка обжариваем ветчину.Тоже кладем в суп.
                        </h3>

                    </div>
                    <div className="grid-3">

                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2_2'}>Когда картофель будет готов, вынимаем из кастрюли тимьян, берем давилку для картофельного пюре и частично давим картофель прямо в супе.
                        </h3>

                    </div>
                    <div className="grid-3">

                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt2_2'}>Добавляем мелко нарубленный чеснок, горчицу и сливки. Перемешиваем. Доводим до кипения и варим на небольшом огне пару минут</h3>

                    </div>
                    {/*<div className="grid-3">*/}

                    {/*    <img className={'img_rec'} src={rec1_7}/>*/}
                    {/*    <h3 className={'txt2_2'}>Высыпать капусту в сковороду с обжаренными овощами, перемешать.</h3>*/}

                    {/*</div>*/}
                    {/*<div className="grid-3">*/}

                    {/*    <img className={'img_rec'} src={rec1_8}/>*/}
                    {/*    <h3 className={'txt2_2'}>Обжарить капусту с овощами 3-4 минуты, периодически перемешивая. Если сковорода небольшая, всыпать капусту в два этапа. Капуста должна уменьшиться в объеме в несколько раз.</h3>*/}

                    {/*</div>*/}
                    {/*<div className="grid-3">*/}

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