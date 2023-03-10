import { useState } from "react";
import CakeDetails from "../components/CakeDetails";

const SellCakeContainer = () => {
    
    let cakeMenu =[
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
    ]

    const [cakeCount, setCakeCount] = useState(0);

  

    var sum = 0;
    for(var i = 0; i<cakeMenu.length; i++){
        sum += parseInt(cakeMenu[i].rating, 10);
    }
    var avg = sum/cakeMenu.length;

    
    return(
        <>
            <h2>Cake Menu</h2>
            <p>Average Rating: {avg}</p>
            <>
                {cakeMenu.map((cake, index) => {
                    return (
                     <CakeDetails cake={cake} key={index} count={cakeCount} onButtonClick ={setCakeCount}></CakeDetails>
                    )
                })}
            </>
            <p>Total Sales: £{cakeCount} </p>
        </>
    )
}

export default SellCakeContainer;