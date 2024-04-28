
import './mainPage.css'
import cheese from './img/cheese1.png'

export const MainPage = () =>  {

        return (
            <div>
{/*<div className={'lol'}>ГЛАВНАЯ ЗАВТРАК ОБЕД УЖИН</div>*/}
                <div className='top'>
                    <a href={'/'}>ГЛАВНАЯ</a>
                    <a href={'/'}>ЗАВТРАК</a>
                    <a href={'/'}>ОБЕД</a>
                    <a href={'/'}>УЖИН</a>
                </div>


                <div className='text'>
                    <h1>COOPER’S
                        DINER</h1>
                    <h2>Tasty Foods For
                        Everyone to Enjoy!</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.</h3>
                </div>

{/*<div >*/}
{/*    <img className={'img_1'} src={cheese}/>*/}
{/*</div>*/}
            </div>
        );

}

export default MainPage;

