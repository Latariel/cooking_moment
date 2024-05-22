import './dinnerPage.css'
import {Link} from "react-router-dom";
import pasta from './img/pasta.png'
import soup2 from './img/soup_2.png'
import gribi from './img/gribi.png'
import kartoshka from './img/kartoshka.png'
import salat from './img/salat.png'
// import salat from './img/ovsyanka.png'
import React from "react";
import star from "./img/Shape.png";
import {Modal_3_1} from '../modal/modal_page_3/Modal_3_1'
import {Modal_3_2} from '../modal/modal_page_3/Modal_3_2'
import {Modal_3_3} from '../modal/modal_page_3/Modal_3_3'
import {Modal_3_4} from '../modal/modal_page_3/Modal_3_4'
import {Modal_3_5} from '../modal/modal_page_3/Modal_3_5'
// import {Modal_1_1} from "../modal/modal_page_1/Modal_1_1";
// import {Modal_1_3} from "../modal/modal_page_1/Modal_1_3";
// import {Modal_1_4} from '../modal/modal_page_1/Modal_1_4'
// import {Modal_1_5} from "../modal/modal_page_1/Modal_1_5";


export const DinnerPage  = () => {
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
            <h1 className={'breakfast'}>Ужинай с GourmetDay!</h1>
            <div className="l-wrap">

                <div className="three-col-grid">
                    <div className="grid-item">

                        <div className="grid-inner">
                            <img className={'pank'} src={pasta}/>
                            <h3 className={'txt1'}><span className='bold'>Паста "Карбонара"</span> <br/>Среди всех возможных итальянских блюд паста карбонара является наиболее простым и популярным рецептом. Легкость приготовления позволяет подстраивать его под свои индивидуальные предпочтения</h3>
                            <Modal_3_1/>
                        </div>

                    </div>
                    <img className={'star_5'} src={star}/>
                    <div className="grid-item">
                        <div className="grid-inner">
                            <img className={'pank'} src={salat}/>
                            <h3 className={'txt1'}><span className='bold'>Салат с говядиной</span> <br/>Cалат очень вкусный и сытный. Если нарезать все ингредиенты кубиками, будет удобнее смешивать его в большом салатнике. Мы предлагаем нарезать соломкой и сделать порционную подачу.При желании говядину можно заменить</h3>
                            {/*<button className={'btn_2'}>Подробнее</button>*/}
                            <Modal_3_2/>
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="grid-inner">
                            <img className={'pank'} src={soup2}/>
                            <h3 className={'txt1'}><span className='bold'>Картофельный суп</span> <br/> Суп получается лёгкий, но в то же время питательный и очень вкусный. Идеально подойдёт для повседневного меню. В рецепте приведен вариант с ветчиной, которую можно заменить чем угодно.</h3>
                            <Modal_3_3/>
                        </div>
                        {/*<img className={'star_3'} src={star}/>*/}
                    </div>

                    <div className="grid-item">
                        <div className="grid-inner">
                            <img className={'pank'} src={gribi}/>
                            <h3 className={'txt1'}><span className='bold'>Жюльен с курицей и грибами</span> <br/> Мы предлагаем вариант, в котором комбинируются сразу две популярные начинки: грибы и курица. Классический соус на основе сливок делает вкус блюда невероятно нежным и изысканным.</h3>
                            <Modal_3_4/>
                        </div>
                    </div>

                    <div className="grid-item">
                        {/*<img className={'star_3'} src={star}/>*/}
                        <div className="grid-inner">
                            <img className={'pank'} src={kartoshka}/>
                            <h3 className={'txt1'}><span className='bold'>Картофельная запеканка</span> <br/>Если вы очень любите картофель, и хочется из него приготовить что-то совершенно новое и необычное по вкусу, тогда обязательно приготовьте эту запеканку из картофеля и мясного фарша. Получится сытный и вкусный семейный ужин</h3>
                            <Modal_3_5/>
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

export default DinnerPage;