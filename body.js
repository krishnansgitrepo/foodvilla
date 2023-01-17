import { useState } from "react";
import { IMG_CDN_URL } from "./constants";
import { restaurantList } from "./data";

// const RestaurantCard = function (props) {
//     console.log(props);
//     return (
  
//     <div className="card">
//         <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data.cloudinaryImageId}></img>
//         <h2>{props.restaurant.data.name}</h2>
//         <h3>{props.restaurant.data.cuisines.join(", ")}</h3>
//         <h4>{props.restaurant.data.lastMileDistance}</h4>
//     </div>

//     );
// };

const RestaurantCardWithDestructuring = function ({restaurant}) {
    
    return (
  
    <div className="card">
        <img src={IMG_CDN_URL+restaurant.data.cloudinaryImageId}></img>
        <h2>{restaurant.data.name}</h2>
        <h4>{restaurant.data.cuisines.join(", ")}</h4>
        <h4>{restaurant.data.avgRating} Stars</h4>
    </div>

    );
};

//props - passing arguments to functional component
//react uses oneway databinding

//what is state

//why do i need state variables - react ONLY tracks state variables and updates dom


//what is hooks => normal function nothing fancy

//what is useState => fn to create state variables, comes from react lib
//returns an array
//first element of array is variable name,  
//second element is fn to update variable


const BodyComponent = function () {
    
    //using useState hook
    const [searchInput, setSearchInput] = useState("Namaste");//local state variable in react 

    const [isVegOnly, setIsVegOnly] = useState(false);

    const [allrestaurants, setAllRestaurants] = useState(restaurantList);//initially restaurants is loaded with entire restaurantList

    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

    //everytime you want your variables to be in sync with UI you need to use state variables

    function filterFunction(isVegOnly, restaurantName, restaurants) {
        console.log(restaurantName);
        if (isVegOnly) {
            return restaurants.filter(r => r.data.name.includes(restaurantName) && r.data.veg === true);
        }
        return restaurants.filter(r => r.data.name.includes(restaurantName));
    }

    const handleChange = () => {
        setIsVegOnly(!isVegOnly);
    };
    
    return (
        <>  
            <div className="search-container">



                <input type="text" 
                className="search-input" 
                placeholder="Search" 
                value={searchInput}
                onChange = {(e) => {
                    //e.target.value => whatever you write in input
                    setSearchInput(e.target.value);//setSearchInput will update searchInput variable 
                }}
                />
                <button className="search-btn" 
                onClick = { () => {
                    const filRestaurants = filterFunction(isVegOnly, searchInput, allrestaurants);
                    setFilteredRestaurants(filRestaurants);
                    //allrestaurants variable will hold the filtered list of restaurants
                }}>Search</button>



            </div>
            <div className="furtherfilter">
                <label>
                    <input type="checkbox" checked={isVegOnly} onChange={handleChange}/> Veg Only {isVegOnly.toString()}</label>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map(arestaurant => {
                        return <RestaurantCardWithDestructuring restaurant = {arestaurant} key={arestaurant.data.id}/>
                    })
                }            
            </div>
        </>
    );
};

export default BodyComponent;