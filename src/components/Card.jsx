// src/components/Card.js
import React, { useContext, useState } from 'react';
import { ItemContext } from '../store/ItemContext';

const Card = ({ fruit }) => {
    const {id,title,description,price} = fruit;
    const [itemQty,setItemQty] = useState(0);
    const {addItem,items} = useContext(ItemContext);
    const addToCardHandler = ()=>{
        const currentItem = items?.find(item => item.id === id);
        const currentQty = currentItem ? currentItem.quantity + itemQty : itemQty;
  
        if(currentQty < 1 || currentQty > 5 )
        {
            alert("Please choose number of item between 1 to 5 !!");
            return;
        }
        addItem({
            id,
            title,
            price,
            quantity: itemQty
        })
    }
  return (
    <div className="card">
        <div className='card-left'> 
            <h2 className='card-title'>{title}</h2>
            <p className='card-description'>{description}</p>
            <p className='card-price'>$ {price} </p>
        </div>
        <div className='card-right'>
            <input type='number' min={1} max={5} value={itemQty} onChange={(e)=>setItemQty(+e.target.value)}/>
            <button className='btn-primary' onClick={addToCardHandler}>+Add</button>
        </div>
    </div>
  );
}

export default Card;
