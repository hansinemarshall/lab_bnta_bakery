function CakeDetails({cake,onButtonClick}){

    const handleSellCakeClick = () => {
        onButtonClick(cake.price);
    }

   
    return(
        <>
        <div>
             <h3>{cake.cakeName}</h3>
             <p>Ingredients: <em>{cake.ingredients.join(', ')}</em></p>
             <p>Price: £{cake.price}</p>
             <p>Rating: {cake.rating}/5</p>
             <button onClick = {handleSellCakeClick}> SELL CAKE</button>
         </div>
                
        </>
    )
}

export default CakeDetails;
