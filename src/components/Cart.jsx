import React, { useContext } from 'react'
import CartItem from './CartItem'
import { ItemContext } from '../store/ItemContext'

const Cart = ({hideCardHandler}) => {
    const {items,totalAmount} = useContext(ItemContext);
    
    return (
        <div className='cart'>
            <h3>Cart Item</h3>
            {
                items.length > 0 ?
                <>
                    <section className='show-item'>
                        {
                            items.map(fruit => (
                                <CartItem 
                                    key={fruit.id}
                                    fruit={fruit}
                                />
                            ))
                        }
                    </section>

                    <hr></hr>

                    <div className='total-price'>
                        <label>Total Price</label>
                        <p>$ {totalAmount.toFixed(2)}</p>
                    </div>
                </> : 
                <div>
                    <p className='no-item'>No item in your cart.</p>
                </div>
            }

            <div className='cart-btn-div'>
                <button className='btn-secondary mx-3' onClick={hideCardHandler}>Close</button>
                {
                    items.length > 0 &&
                    <button className='btn-primary' onClick={()=>alert('Ordered !')}>Order</button>
                }
                
            </div>
        </div>
        
    )
}

export default Cart