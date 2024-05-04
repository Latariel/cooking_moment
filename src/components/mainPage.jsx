import React, { useState } from 'react';
import './mainPage.css'
import cheese from './img/cheese1.png'
import smoothie from './img/07.png'
import star from './img/Shape.png'
import point from './img/point.png'
import {Modal} from "../modal/Modal";
import {Link} from "react-router-dom";

export const MainPage = () =>  {
    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);


        return (
            <div>
{/*<div className={'lol'}>ГЛАВНАЯ ЗАВТРАК ОБЕД УЖИН</div>*/}
{/*                <div className='top'>*/}
{/*                    <a href={'/'}>ГЛАВНАЯ</a>*/}
{/*                    <a href={'/breakfast'}>ЗАВТРАК</a>*/}
{/*                    <a href={'/lunch'}>ОБЕД</a>*/}
{/*                    <a href={'/dinner'}>УЖИН</a>*/}
{/*                </div>*/}

                <div className="link_top">
                    <Link className='link' to="/"><span>ГЛАВНАЯ</span></Link>
                    <Link className='link' to="/breakfast"><span>ЗАВТРАК</span></Link>
                    <Link className='link' to="/lunch"><span>ОБЕД</span></Link>
                    <Link className='link' to="/dinner"><span>УЖИН</span></Link>

                </div>
                {/*<img className={'star_1'} src={star}/>*/}
                {/*<div className='text_1'>*/}
                {/*    /!*<img className={'img_1'} src={cheese}/>*!/*/}
                {/*    <h1>COOPER’S*/}
                {/*        DINER</h1>*/}
                {/*    <h2>Tasty Foods For*/}
                {/*        Everyone to Enjoy!</h2>*/}
                {/*    <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</h3>*/}

                {/*</div>*/}
                {/*<div>*/}
                {/*    <img className={'img_2'} src={smoothie}/>*/}
                {/*    /!*<div >*!/*/}

                {/*    <div className={'text_1'}>*/}
                {/*        <h1>JJJJJ</h1>*/}
                {/*    </div>*/}
                {/*    <img className={'img_1'} src={cheese}/>*/}
                {/*    /!*</div>*!/*/}
                {/*</div>*/}
                {/*<img className={'star_1'} src={star}/>*/}
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

                <Modal
                    isOpen={modalInfoIsOpen}
                    onClose={() => setModalInfoOpen(false)}
                >
                    <div className={'modal_main'}>

                        <h2 className={'text_modal_1'}><img className={'star_7'} src={star}/> Привет! Меня зовут Анастасия, и это мой личный кулинарный уголок в интернете. Я обожаю готовить и хочу поделиться своими любимыми рецептами завтраков, обедов и ужинов с вами. Здесь вы найдете всё: от быстрых сэндвичей до праздничных блюд, которые я готовлю для семьи и друзей.</h2>
                        <img className={'star_4'} src={star}/>
                        <h2 className={'text_modal_2'}>Моя философия:</h2>

                        <h2 className={'text_modal_3'}>Простота: Рецепты должны быть понятны и доступны каждому.</h2>
                        <h2>Любовь к еде: Каждое блюдо готовится с душой и заботой.</h2>
                        <h2>Эксперименты: Я люблю пробовать новое и делиться своими открытиями.</h2>
                        <img className={'star_6'} src={star}/>
                    </div>
                    {/*<h2>Чек:</h2>*/}
                    {/*<h2 className={'modal_1'}>Начните день с бодрящих завтраков, восстановите силы обедами, полными энергии,*/}
                    {/*    и закончите день семейными ужинами, которые согреют душу</h2>*/}
               {/*<h2 className={'text_modal_1'}>Привет! Меня зовут Анна, и это мой личный кулинарный уголок в интернете. Я обожаю готовить и хочу поделиться своими любимыми рецептами завтраков, обедов и ужинов с вами. Здесь вы найдете всё: от быстрых сэндвичей до праздничных блюд, которые я готовлю для семьи и друзей.</h2>*/}
               {/*     <h2 className={'text_modal_2'}>Моя философия:</h2> <br/>*/}
               {/*     <h2>Простота: Рецепты должны быть понятны и доступны каждому.</h2>*/}
               {/*     <br/>*/}
               {/*     <h2>Любовь к еде: Каждое блюдо готовится с душой и заботой.</h2>*/}
               {/*     <br/>*/}
               {/*     <h2>Эксперименты: Я люблю пробовать новое и делиться своими открытиями.</h2>*/}

                    {/*<br/></h2>*/}
                </Modal>


            </div>
        );

}

export default MainPage;

