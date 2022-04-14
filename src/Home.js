import { Link } from "react-router-dom";
import Roll from 'react-reveal/Roll';
// import './component/images'
function Home (){
    return(
        <div>
        
         <nav className="menu">
                { <img   className='logo' src={require('./component/images/GReesh.png')} /> }
                    <ul className='menu-iteam'>
                        <li><Link to="/log/Registration">Registration</Link></li>
                        <li><Link to="/log/Login">Login</Link></li> 
                        <li><Link to="/log/Dashbord">Dashbord</Link></li>
                        <li><Link to="/rxjs/rxjsApp">Rxjs App</Link></li>
                        <li><Link to="/curd/curdApp">curdApp</Link></li>

                    </ul>
                </nav>
                    <div className="center">
                    <ul className='text-iteam'>
                        <li><Link to="/log/Registration">Registration</Link></li>
                        <li><Link to="/rxjs/rxjsApp">Rxjs App</Link></li>
                        <li><Link to="/curd/curdApp">curdApp</Link></li>

                    </ul>
                    <Roll top>
                    { <img   className='homeimag' src={require('./component/images/GReesh.png')} /> }
                    
        </Roll>
                    </div>
                    </div>
    )
}
export default Home;