import logo from './img/img1.png';
import { useState } from "react";

const Title = function () {
    return (<img alt="logo" id="img1" src={logo} width="100" height="100"/>);
}

const HeaderComponent = function () {
    const [isLogin, setIsLogin] = useState(false);
    return (
       <div className="header">
           <Title/>
           
           <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
           </div>
           {isLogin? (
        <button onClick={() => setIsLogin(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}
      
       </div>
    );
};

export default HeaderComponent;