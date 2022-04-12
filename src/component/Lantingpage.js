import Roll from 'react-reveal/Roll';
import { Link } from "react-router-dom";
function Lantingpage(){
    return(
        
            <div className="home-container">
                <nav className="menu">
                <img   className='logo' src={require('./images/GReesh.png')} />


                    <ul className='menu-iteam'>
                    <li><Link to="/home">home</Link></li>
                        <li><Link to="/Registration">Registration</Link></li>
                        <li><Link to="/Login">Login</Link></li> 
                        <li><Link to="/log/Dashbord">Dashbord</Link></li>

                    </ul>
                </nav>
                <div  className="container ">
                <div className="center">
                    <h1>Welcom to Amadis</h1>
                    <div>
        <Roll top>
        <img  className="center-ing" src={require('./images/GReesh.png')}/>

        </Roll>
      </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Lantingpage;