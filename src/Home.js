import { Link } from "react-router-dom";
function Home (){
    return(
        <div>
        
         <nav className="menu">
                { <img   className='logo' src={require('./component/images/GReesh.png')} /> }


                    <ul className='menu-iteam'>
                        <li><Link to="/Registration">Registration</Link></li>
                        <li><Link to="/Login">Login</Link></li> 
                        <li><Link to="/log/Dashbord">Dashbord</Link></li>
                        <li><Link to="/rxjs/rxjsApp">Rxjs App</Link></li>
                    </ul>
                </nav>
        </div>
    )
}
export default Home;