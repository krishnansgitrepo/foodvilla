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
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant.data.cloudinaryImageId}></img>
        <h2>{restaurant.data.name}</h2>
        <h4>{restaurant.data.cuisines.join(", ")}</h4>
        <h4>{restaurant.data.avgRating} Stars</h4>
    </div>

    );
};

//props - passing arguments to functional component
const BodyComponent = function () {
    return (
        <div className="restaurant-list">
            {
                restaurantList.map(arestaurant => {
                    console.log(arestaurant.data.avgRating);
                    return <RestaurantCardWithDestructuring restaurant = {arestaurant} key={arestaurant.data.id}/>
                })
            }
        
        </div>
    );
};

export default BodyComponent;