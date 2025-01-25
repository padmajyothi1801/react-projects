import React, { useState } from "react";

const Invoice = () =>{

    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
  
   const HandleOnClick = () =>{
    const newItem = {name, quantity:parseInt(quantity), price:parseInt(price)};
    setItems([...items, newItem]);
    setName("");
    setQuantity("");
    setPrice("");
   }

   const DeleteItem = (index) =>{
    const newItems = items.filter((_, i) => i !==index);
    setItems(newItems);

   }

   const Total = () =>{
    return items.reduce((total, item) => total + item.quantity * item.price, 0)
   };

    return(
        <>
        <h2>Bill/Invoice Generator </h2>
        <div>
        <lable>Name</lable><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input><br />
        <lable>Quantity</lable><br />
        <input type="text" value={quantity} onChange={(e) =>setQuantity(e.target.value)}></input><br />
        <lable>Price</lable><br />
        <input type="text" value={price} onChange={(e) =>setPrice(e.target.value)}></input><br />
        <button onClick={HandleOnClick}>Add Item</button>
        </div>
        <h3>Items List</h3>
          <table>
            <tbody>
              {items.map((item, index)=>(
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.quantity * item.price)}</td>
                  <td>
                    <button onClick={() => DeleteItem(index)}>DeleteItem</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Amount: ${Total().toFixed(2)}</h3>
          <button>Download PDF</button>
        </>
    )
}
export default Invoice