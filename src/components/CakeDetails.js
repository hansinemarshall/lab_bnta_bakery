
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


    
   function CakeDetails(){
   
        return(
            <>
                {cakeMenu.map((cake, index) => {

 
                    return (
                     <div key={index}>
                        <h3>{cake.cakeName}</h3>
                        <p>Ingredients: <em>{cake.ingredients.join(', ')}</em></p>
                        <p>Price: £{cake.price}</p>
                        <p>Rating: {cake.rating}/5</p>
                        <button> SELL CAKE</button>
                     </div>
                    )
                })}
            </>
        )
    }

    export default CakeDetails;
    
