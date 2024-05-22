import React, { useState } from 'react';
import './mainPage.css'
import cheese from './img/cheese1.png'
import smoothie from './img/07.png'
import star from './img/Shape.png'
import point from './img/point.png'
import {Modal_main_p} from "../modal/modal_page_1/Modal_main_p";
import {Link} from "react-router-dom";

export const MainPage = () =>  {
    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);


        return (
            <div>
                <div className="link_top">
                    <Link className='link' to="/"><span>ГЛАВНАЯ</span></Link>
                    <Link className='link' to="/breakfast"><span>ЗАВТРАК</span></Link>
                    <Link className='link' to="/lunch"><span>ОБЕД</span></Link>
                    <Link className='link' to="/dinner"><span>УЖИН</span></Link>

                </div>
                <img className={'point_1'} src={point}/>
                <table className="center">
                    <tbody>
                    <tr>

                        <td><img className={'img_2'} src={smoothie}/>
                            <img className={'star_2'} src={star}/></td>
                        <td className={'text_1'}>
                            <h1>Добро пожаловать на GourmetDay!</h1>
                            <img className={'star_1'} src={star}/>
                            <h2>Начните день с бодрящих завтраков, восстановите силы обедами, полными энергии, и закончите день семейными ужинами, которые согреют душу</h2>

                        </td>
                        <img className={'star_1'} src={star}/>

                        <td > <img className={'img_1'} src={cheese}/></td>

                    </tr>

                    </tbody>
                    <img className={'star_3'} src={star}/>

                </table>

<button className={'btn_1'}    onClick={() => setModalInfoOpen(true)}>О САЙТЕ</button>

                <Modal_main_p
                    isOpen={modalInfoIsOpen}
                    onClose={() => setModalInfoOpen(false)}
                >
                    <div className={'modal_main'}>

                        <h2 className={'text_modal_1'}><img className={'star_7'} src={star}/> Привет! Меня зовут Анастасия, и это мой личный кулинарный уголок в интернете. Я обожаю готовить и хочу поделиться своими любимыми рецептами завтраков, обедов и ужинов с вами. Здесь вы найдете всё: от быстрых сэндвичей до праздничных блюд, которые я готовлю для семьи и друзей.</h2>
                        <img className={'star_4'} src={star}/>
                        <h2 className={'text_modal_2'}>Моя философия:</h2>

                        <h2 className={'text_modal_3'}>Простота: Рецепты должны быть понятны и доступны каждому.</h2>
                        <h2 className={'text_modal_3'}>Любовь к еде: Каждое блюдо готовится с душой и заботой.</h2>
                        <h2 className={'text_modal_3'}>Эксперименты: Я люблю пробовать новое и делиться своими открытиями.</h2>
                        <img className={'star_6'} src={star}/>
                    </div>
                </Modal_main_p>


            </div>
        );

}

export default MainPage;

