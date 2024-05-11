
import  { useState } from 'react';
import Modal from 'react-modal';
import './ModalTwo.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from './img_2/recept_1_1.jpg';
import rec1_2 from './img_2/recept_1_2.jpg';
import rec1_3 from './img_2/recept_1_3.jpg';
import rec1_4 from './img_2/recept_1_4.jpg';
import rec1_5 from './img_2/recept_1_5.jpg';
import rec1_6 from './img_2/recept_1_6.jpg';
import star from "./img_2/Shape.png";



export const ModalOne = ({ isOpen, onClose, children }) => {

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
                Продукты (на 4 порции): <br/>
                <br/>
                Яйца - 2 шт.<br/>
                Молоко - 200 мл <br/>
                Мука пшеничная - 10 ст. л. <br/>
                Разрыхлитель - 1 ч. л.<br/>
                Сахар - 2 ст. л.<br/>
                Ванильный сахар (по желанию) - по вкусу
            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt3'}>Смешайте 2 яйца и 200 мл молока.</h3>
                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt3'}>Затем добавьте 2 ст.л. сахара и ваниль.</h3>
                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt4'}>Взбейте до однородности..</h3>

                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt3'}>Добавьте 10 ст. л. муки и разрыхлитель.</h3>

                    </div>
                    <div className="grid-item_1">

                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt3'}>Тщательно перемешайте. Тесто получится средней густоты.</h3>

                    </div>
                    <div className="grid-item_1">
                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt2'}>На сухую сковороду налейте тесто небольшим половником. Накройте крышкой, и жарьте панкейки на среднем огне.</h3>
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

