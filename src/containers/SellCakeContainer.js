import { useState } from "react";

import CakeList from "../components/CakeList";
import CakeForm from "../components/CakeForm";

const SellCakeContainer = () => {
    
    let [cakeMenu, setCakeMenu] = useState([
        {
            cakeName: "Victoria Sponge",
               ingredients: [
                   "eggs",
                  "butter",
                  "sugar",
                  "self-raising flour",
                  "baking powder",
                  "milk"
              ],
              price: 5,
                rating: 5
        },
        {
             cakeName: "Tea Loaf",
               ingredients: [
                   "eggs",
                  "oil",
                  "dried fruit",
                  "sugar",
                  "self-raising flour",
                  "strong tea",
              ],
              price: 2,
              rating: 3
        },
        {
             cakeName: "Carrot Cake",
               ingredients: [
                "carrots",
                  "walnuts",
                  "oil",
                  "cream cheese",
                  "flour",
                  "sugar",
               ],
               price: 8,
               rating: 5
        }      
    ])

    const [cakeCount, setCakeCount] = useState(0);

    const onButtonClick = (cakePrice) => {
        setCakeCount(cakeCount + cakePrice);
    }

  

    let sum = 0;
    for(let i = 0; i<cakeMenu.length; i++){
        sum += parseInt(cakeMenu[i].rating, 10);
    }
    let avg = sum/cakeMenu.length;

    
    return(
        <>
            <h2>Cake Menu</h2>
            <p>Average Rating: {avg}</p>
            <CakeList cakeMenu= {cakeMenu} count={cakeCount} onButtonClick ={onButtonClick}/>
           
            <p>Total Sales: £{cakeCount} </p>
            <CakeForm cakes={cakeMenu} setCakes={setCakeMenu}/>
        </>
    )
}

export default SellCakeContainer;