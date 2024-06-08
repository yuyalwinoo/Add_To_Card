import React, { useContext } from 'react'
import { ItemContext } from '../store/ItemContext'

const Nav = ({showCardHandler}) => {

    const {items} = useContext(ItemContext);
    const totalItem = items.reduce((currentValue,item)=>{
        return currentValue + item.quantity
    },0)
    return (
        <nav className='nav'>
            <h2>Shoppy</h2>
            <button type='button' onClick={showCardHandler} className='btn-primary'>Cart<span>({totalItem})</span></button>
        </nav>
    )
}

export default Nav