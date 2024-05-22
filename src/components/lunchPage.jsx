import './lunchPage.css'
import {Link} from "react-router-dom";
import soup from './img/soup.png'
import kapusta from './img/kapusta.png'
import oladii from './img/oladii.png'
import pizza from './img/_max (1).png'
import perec from './img/perec.png'
import ovsyanka from './img/ovsyanka.png'
import React from "react";
import star from "./img/Shape.png";
import {Modal_2_1} from "../modal/modal_page_2/Modal_2_1";
import {Modal_2_2} from "../modal/modal_page_2/Modal_2_2";
import {Modal_2_3} from "../modal/modal_page_2/Modal_2_3";
import {Modal_2_4} from "../modal/modal_page_2/Modal_2_4";
import {Modal_2_5} from "../modal/modal_page_2/Modal_2_5";
import {Modal_1_2} from '../modal/modal_page_1/Modal_1_2'
import {Modal_1_1} from "../modal/modal_page_1/Modal_1_1";
import {Modal_1_3} from "../modal/modal_page_1/Modal_1_3";
import {Modal_1_4} from '../modal/modal_page_1/Modal_1_4'
import {Modal_1_5} from "../modal/modal_page_1/Modal_1_5";


export const LunchPage  = () => {
    // const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
    // const [modalSecondInfoIsOpen, setModalSecondInfoOpen] = useState(false);
    return (
        <div>
            <div className="link_top">
                <Link className='link' to="/"><span>ГЛАВНАЯ</span></Link>
                <Link className='link' to="/breakfast"><span>ЗАВТРАК</span></Link>
                <Link className='link' to="/lunch"><span>ОБЕД</span></Link>
                <Link className='link' to="/dinner"><span>УЖИН</span></Link>
            </div>
            <h1 className={'breakfast'}>Обедай с GourmetDay!</h1>
            <div className="l-wrap">

                <div className="three-col-grid">
                    <div className="grid-item">

                        <div className="grid-inner">
                            <img className={'pank'} src={soup}/>
                            <h3 className={'txt1'}><span className='bold'>Tоматный суп-пюре</span> <br/>Классический томатный суп-пюре, пожалуй, можно назвать одним из самых простых супов не только по количеству используемых ингредиентов, но и по длительности его приготовления</h3>
                        <Modal_2_1/>
                        </div>

                    </div>
                    <img className={'star_5'} src={star}/>
                    <div className="grid-item">
                        <div className="grid-inner">
                            <img className={'pank'} src={oladii}/>
                            <h3 className={'txt1'}><span className='bold'>Оладьи из куриной печени</span> <br/> Невероятно нежные, вкусные и полезные оладьи из куриной печени получаются по этому ПП рецепту.

                                Если вы придерживайтесь здорового питания или готовите для детей, смело берите на заметку это блюдо</h3>
                            <Modal_2_2/>
                        </div>
                        {/*<img className={'star_3'} src={star}/>*/}
                    </div>
                    <div className="grid-item">
                        <div className="grid-inner">
                            <img className={'pank'} src={kapusta}/>
                            <h3 className={'txt1'}><span className='bold'>Капуста с томатной пастой</span> <br/> Тушеная капуста с томатной пастой - это вкусный гарнир или полноценный легкий обед, если вы не едите мясо или рыбу. Такое блюдо богато витаминами, легко переваривается и подходит для детского меню</h3>
                            <Modal_2_3/>
                        </div>
                        <div>
                        </div>
                    </div>


                    <div className="grid-item">
                        {/*<img className={'star_3'} src={star}/>*/}
                        <div className="grid-inner">
                            <img className={'pank'} src={pizza}/>
                            <h3 className={'txt1'}><span className='bold'>Пицца на сковороде</span> <br/> От такого варианта приготовления не стоит ожидать вкуса классической пиццы и тонкой хрустящей корочки. Но если нет духовки и времени, а чего-то сытного и сырного хочется, рецепт пиццы на сковороде — то, надо. Получается вкусно, а готовится просто</h3>
                           <Modal_2_4/>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-inner">
                            <img className={'pank'} src={perec}/>
                            <h3 className={'txt1'}><span className='bold'>Фаршированный перец</span> <br/> с этим блюдом всегда можно экспериментировать, добавляя в начинку фаршированного перца свои любимые крупы, овощи, подбирая идеальные пропорции мясных и растительных ингредиентов.Даже цвет перца — и тот оказывает своё влияние на вкус</h3>
                            {/*<button className={'btn_2'}>Подробнее</button>*/}
                            <Modal_2_5/>
                        </div>
                    </div>
                    {/*<div className="grid-item">*/}
                    {/*    <div className="grid-inner">*/}

                    {/*        <img className={'pank'} src={ovsyanka}/>*/}
                    {/*        <h3 className={'txt1'}><span className='bold'>Ленивая овсянка</span> <br/> С ленивой овсянкой таких проблем нет: завтрак готовится с вечера — утром остается только его съесть. А еще он красиво выглядит. По-английски это блюдо называется overnight oats — «овсянка, которая постояла ночь». Вам даже не придется подходить к плите</h3>*/}
                    {/*        /!*<button className={'btn_2'}>Подробнее</button>*!/*/}
                    {/*        <Modal_1_5/>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                </div>
            </div>
        </div>
    );

}

export default LunchPage;