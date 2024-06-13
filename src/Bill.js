import React,{useState} from "react";

const Bill = () =>{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const AddToList = () =>{
        const newItem = {name:name, quantity:parseInt(quantity), price:parseInt(price)}
        setItems([...items, newItem]);
        setName("");
        setQuantity("");
        setPrice("");
        setTotal(total+(newItem.price * newItem.quantity));
    }

    const DeleteItem = (item) =>{
        const newItems = items.filter((eachitem) => eachitem.index !== item.targetIndex);
        setItems(newItems);
        setTotal(total-(item.price * item.quantity));
    }

    return(
        <>
        <h1>Bill/Invoice generator</h1>
        <lable>Name</lable><br />
        <input type="text" value={name} onChange = {(e)=> setName(e.target.value)}></input><br />
        <lable>Quantity</lable><br />
        <input type="text" value={quantity} onChange = {(e)=> setQuantity(e.target.value)}></input><br />
        <lable>price</lable><br />
        <input type="text" value={price} onChange = {(e)=> setPrice(e.target.value)}></input><br />
        <button onClick={AddToList}>Add To List</button><br />
        <h2>Items List</h2>

        <table>
            <tbody>
                {items.map((item, index) =>(
                    <tr key ={index}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${(item.quantity * item.price)}</td>
                        <td>
                            <button onClick={() =>{DeleteItem(item)}}>Delete Item</button>
                        </td>
                </tr>
                ))};
                
            </tbody>
        </table>
        <h2>Total Amount: ${total}</h2>
        <button>Download PDF</button>

        </>
    );

}
export default Bill;


