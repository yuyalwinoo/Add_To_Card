import React, { useContext } from 'react'
import { ItemContext } from '../store/ItemContext'

const CartItem = ({fruit}) => {
    
    const {addItem,removeItem,items} = useContext(ItemContext);
    const incQtyHandler = () =>{
        const currentItem = items?.find(item => item.id === fruit.id);
        const currentQty = currentItem ? currentItem.quantity + 1 : 1;
  
        if(currentQty < 1 || currentQty > 5 )
        {
            alert("Please choose number of item between 1 to 5 !!");
            return;
        }
        addItem({...fruit,quantity:1})
    }
    const decQtyHandler = () =>{
        removeItem(fruit.id)
    }
    return (
        <div className="card cart-item">
            <div className='card-left'> 
                <h2 className='card-title'>{fruit.title}</h2>
                <p className='card-price'>$ {fruit.price} </p>
            </div>
            <div className='card-right'>
                <p className='card-quantity'>x <span>{fruit.quantity}</span></p>
                <div className='btn-quantity'>
                    <button className='btn-secondary' onClick={incQtyHandler}>+</button>
                    <button className='btn-secondary' onClick={decQtyHandler}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem