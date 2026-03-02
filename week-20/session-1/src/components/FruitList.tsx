
const fruits: string[]=["Apple","Banana","Cherry","Mango","Orange"]
function FruitList() {
    return ( 
        <ul>
            {fruits.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
     );
}

export default FruitList;