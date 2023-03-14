import { useState } from "react";

const CakeForm = (({cakes, setCakes}) => {
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);

    const [error, setError] = useState("");

    const handleNewPrice = (e) => {
        const newPrice = e.target.value;
        if(newPrice >=0){
            setPrice(newPrice);
        }
    };

    const handleNewRating = (e) => {
        const newRating = e.target.value;
        if(newRating >=0){
            setRating(newRating);
        }
    };


    const handleValidation = () => {
        let errormessage ='';

        if(cakes.find((cakeMenu) => cakeMenu.cakeName === cakeName)){
            errormessage = 'This cake is already on the menu'
        };

        if(cakeName === ''|| ingredients ===''||price ==='' || rating===''){
            errormessage ='Please fill out all required fields'
        };

        setError(errormessage);
        return errormessage !== "";
    }

    
    

    const handleSubmit = (e) => {

        if(!handleValidation()){
        e.preventDefault();

        const updatedCakeMenu = [...cakes];

        const ingredientsList = ingredients.split(', ');
        const priceToNum = parseInt(price);
        const ratingToNum = parseInt(rating);

        updatedCakeMenu.push({
            cakeName,
            ingredients: ingredientsList,
            price: priceToNum,
            rating: ratingToNum
        });
        setCakes(updatedCakeMenu);
        }   
    }

    return (
        <>
            <div id="form-container">
                <h2>Add New Cake Here</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' value={cakeName} onChange = {(e) => {setCakeName(e.target.value)}}/>
                    <input type='text' name='ingredients' placeholder='Ingredients' value={ingredients} onChange = {(e) => {setIngredients(e.target.value)}}/>
                    <input type='number' name='price' placeholder='Price' value={price} onChange = {handleNewPrice}/>
                    <input type='number' name='rating' placeholder='Rating' value={rating} onChange = {handleNewRating}/>
                    <input type='submit' value='Submit'/>
                </form>
                {error !== '' ? <p>{error}</p> : <></>}
            </div>
        
        
        </>
    )
    
})
export default CakeForm;