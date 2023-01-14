
import React from "react";
import ReactDom from "react-dom/client";
import HeaderComponent from "./header";
import BodyComponent from "./body";
import FooterComponent from "./footer";

const reactRoot = ReactDom.createRoot(document.getElementById('root'));



const AppLayout = function() {
    return (
            <>
            <HeaderComponent/>
            <BodyComponent/>
            <FooterComponent/>
            </>
            /*
            Header
                -logo
                -nav
                -cart
            Body
                -Search Bar
                -Restaurant
                    -RestaurantCard
                        image
                        name
                        rating
                        cusines
            Footer
                -links
                -copyright
            */
     
    );

};

reactRoot.render(<AppLayout/>);