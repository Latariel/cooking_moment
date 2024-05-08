import './breakfastPage.css'
import {Link} from "react-router-dom";
import panckace from './img/pancake.png'
import syrnici from './img/sirnicy.png'
import bliny from './img/bliny.png'
import pizza from './img/_max (1).png'

export const BreakfastPage  = () => {

        return (
            <div>
                <div className="link_top">
                    <Link className='link' to="/"><span>ГЛАВНАЯ</span></Link>
                    <Link className='link' to="/breakfast"><span>ЗАВТРАК</span></Link>
                    <Link className='link' to="/lunch"><span>ОБЕД</span></Link>
                    <Link className='link' to="/dinner"><span>УЖИН</span></Link>
                </div>

                <h1 className={'breakfast'}>Завтракай с GourmetDay!</h1>


                <div className="l-wrap">
                    <div className="three-col-grid">
                        <div className="grid-item">
                            <div className="grid-inner">
                                <img className={'pank'} src={panckace}/>
                                <h3 className={'txt1'}><span className='bold'>Американские блинчики</span>, <br/>которые также известны как панкейки (pancakes), отличаются своей мягкостью, сладостью и превосходным вкусом. Они идеально гармонируют с мёдом и порадуют как взрослых, так и детей. Блинчики, приготовленные на молоке, станут прекрасным выбором для завтрака.</h3>
                                <button className={'btn_2'}>Подробнее</button>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-inner">
                                <img className={'pank'} src={syrnici}/>
                                <h3 className={'txt1'}><span className='bold'>Сырники</span> <br/> Румяные, нежные сырники с золотистой корочкой – одно только описание вызывает аппетит! Легкое блюдо из творога имеет деликатный вкус и идеально для завтрака или ужина. Пышные сырники по классическому рецепту можно легко приготовить всего за 10 – 15 минут </h3>
                                <button className={'btn_2'}>Подробнее</button>
                                </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-inner">
                                <img className={'pank'} src={bliny}/>
                                <h3 className={'txt1'}><span className='bold'>Классические блинчики</span> <br/> Золотистые, тонкие блинчики с нежной текстурой – это настоящая классика. Идеальное блюдо для завтрака или обеда. Приготовьте их по традиционному рецепту, и блины будут радовать вас своим вкусом и ароматом. Можно подавать с медом, сгущенным молоком или сметаной.</h3>
                                <button className={'btn_2'}>Подробнее</button>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-inner">
                                <img className={'pank'} src={pizza}/>
                                <h3 className={'txt1'}><span className='bold'>Пицца на сковороде</span> <br/> От такого варианта приготовления не стоит ожидать вкуса классической пиццы и тонкой хрустящей корочки. Но если нет духовки и времени, а чего-то сытного и сырного хочется, рецепт пиццы на сковороде — то, надо. Получается вкусно, а готовится просто.</h3>
                                <button className={'btn_2'}>Подробнее</button></div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-inner">Элемент сетки</div>
                        </div>
                        <div className="grid-item">
                            <div className="grid-inner">Элемент сетки</div>
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default BreakfastPage;