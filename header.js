import logo from './img/img1.png';

const Title = function () {
    return (<img alt="logo" id="img1" src={logo} width="100" height="100"/>);
}

const HeaderComponent = function () {
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
       </div>
    );
};

export default HeaderComponent;