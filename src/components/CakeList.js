import CakeDetails  from "./CakeDetails";

const CakeList = ({cakeMenu, cakeCount, onButtonClick}) => {

    const cakes = cakeMenu.map((cake, index) => {
        return <CakeDetails cake={cake} key={index} count={cakeCount} onButtonClick ={onButtonClick}></CakeDetails>
    });

    return <ul>{cakes}</ul>
}

export default CakeList;