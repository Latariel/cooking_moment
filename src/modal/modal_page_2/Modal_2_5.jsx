
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_2_5.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_3/recept_5_1.jpg';
import rec1_2 from '../img_3/recept_5_2.jpg';
import rec1_3 from '../img_3/recept_5_3.jpg';
import rec1_4 from '../img_3/recept_5_4.jpg';
import rec1_5 from '../img_3/recept_5_5.jpg';
import rec1_6 from '../img_3/recept_5_6.jpg';
import star from "../img_2/Shape.png";



export const Modal_2_5 = ({ isOpen, onClose, children }) => {

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
                Перец сладкий - 8 шт. <br/>
                Фарш свино-говяжий - 400 г<br/>
                Чеснок (1-2 зубчика)<br/>
                Морковь (1-2 шт)<br/>
                Рис круглозёрный 1/3 стакана<br/>
                Томатная паста – 3 ст.л<br/>
                Сметана - 150 г<br/>



            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-5">

                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1_1'}>
                            Лук нарежьте кубиками, морковь измельчите на тёрке</h3>
                    </div>
                    <div className="grid-5">

                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt2_2'}>Рис промойте, смешайте с фаршем и овощами, посолите, поперчите.</h3>
                    </div>
                    <div className="grid-5">

                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt1_1'}>Вмешайте в начинку примерно 100 мл воды.</h3>

                    </div>
                    <div className="grid-5">

                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt2_2'}>У перцев аккуратно срежьте верхнюю часть и удалите семечки. Нафаршируйте перцы начинкой не слишком плотно.</h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2_2'}>Сложите перцы в кастрюлю, влейте стакан воды, доведите до кипения и убавьте огонь. Добавьте в кастрюлю сметану и томатную пасту, посолите.</h3>

                    </div>
                    <div className="grid-5">


                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt2_2'}>Накройте кастрюлю крышкой и тушите 40-45 минут до готовности.</h3>

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