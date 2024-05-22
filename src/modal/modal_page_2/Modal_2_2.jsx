
import  { useState } from 'react';
import Modal from 'react-modal';
import './Modal_2_2.css'
import { IoCloseSharp } from "react-icons/io5";


import rec1_1 from '../img_3/recept_2_1.jpg';
import rec1_2 from '../img_3/recept_2_2.jpg';
import rec1_3 from '../img_3/recept_2_3.jpg';
import rec1_4 from '../img_3/recept_2_4.jpg';
import rec1_5 from '../img_3/recept_2_5.jpg';
import rec1_6 from '../img_3/recept_2_6.jpg';
import rec1_7 from '../img_3/recept_2_7.jpg';
import rec1_8 from '../img_3/recept_2_8.jpg';
import rec1_9 from '../img_3/recept_2_9.jpg';
import star from "../img_2/Shape.png";



export const Modal_2_2 = ({ isOpen, onClose, children }) => {

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
                Печень куриная – 500 г<br/>
                Яйцо куриное – 1 шт. <br/>
                Лук (1 шт)<br/>
                Цукини – 150 г<br/>
                Мука рисовая – 3 ст.л.<br/>
                Масло растительное – 0.5 ч.л<br/>

            </h2>
            <div className="m-wrap">
                <div className="three-col-grid_1">
                    <div className="grid-2">
                        <img className={'img_rec'} src={rec1_1}/>
                        <h3 className={'txt1'}>
                            Промыть куриную печень, отрезать крупные прожилки, жирок. Можно разрезать на несколько частей.</h3>
                    </div>
                    <div className="grid-2">
                        <img className={'img_rec'} src={rec1_2}/>
                        <h3 className={'txt2'}>Подготовить цукини или кабачок.Промыть овощ, отрезать хвостик, нарезать на кружочки. Если кожура у цукини нежная, тогда её можно не срезать.</h3>
                    </div>
                    <div className="grid-2">
                        <img className={'img_rec'} src={rec1_3}/>
                        <h3 className={'txt4'}>Очистить лук от шелухи, промыть и разрезать на несколько частей.</h3>

                    </div>
                    <div className="grid-2">
                        <img className={'img_rec'} src={rec1_4}/>
                        <h3 className={'txt4'}>Сложить в чашу блендера подготовленную куриную печень, вбить к ней сырое яйцо.</h3>

                    </div>
                    <div className="grid-2">

                        <img className={'img_rec'} src={rec1_5}/>
                        <h3 className={'txt2'}>Положить лук и цукини к куриной печени с сырым яйцом. Добавить соль, чёрный перец. После взбить до однородной массы.</h3>

                    </div>
                    <div className="grid-2">

                        <img className={'img_rec'} src={rec1_6}/>
                        <h3 className={'txt2'}>Добавить рисовую муку к жидкому тесту для оладий из куриной печени. Ещё раз всё перебить блендером. В жидкой массе не должно быть комочков муки.</h3>

                    </div>
                    {/*<div className="grid-2
">*/}

                    {/*    <img className={'img_rec'} src={rec1_7}/>*/}
                    {/*    <h3 className={'txt2'}>Разлить по тарелкам и в каждую добавить по 3 ст.л. сыра кремчиз. Перед подачей посыпать зеленью.</h3>*/}

                    {/*</div>*/}
                    <div className="grid-2
">

                        <img className={'img_rec'} src={rec1_8}/>
                        <h3 className={'txt5'}>Жарить каждый печеночный оладушек примерно 1,5-2 минуты на среднем огне с одной стороны. Затем перевернуть, как только сырое тесто «застынет», жарить ещё 1 минуту с другой стороны.</h3>

                    </div>
                    <div className="grid-2
">

                        <img className={'img_rec'} src={rec1_9}/>
                        <h3 className={'txt2'}>Готовые ПП оладьи из куриной печени сложить на плоскую тарелку. Они будут тонкими и очень нежными. Можете не переживать, печеночное тесто хорошо прожарилось с двух сторон.</h3>

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