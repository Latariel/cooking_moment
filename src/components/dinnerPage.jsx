import './dinnerPage.css'
import {Link} from "react-router-dom";


export const DinnerPage  = () => {

    return (
        <div>
            <div className="link_top">
                <Link className='link' to="/"><span>ГЛАВНАЯ</span></Link>
                <Link className='link' to="/breakfast"><span>ЗАВТРАК</span></Link>
                <Link className='link' to="/lunch"><span>ОБЕД</span></Link>
                <Link className='link' to="/dinner"><span>УЖИН</span></Link>
            </div>



        </div>
    );

}

export default DinnerPage;