import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import BackDrop from '../components/BackDrop'

const Main = () => {

    const[showCart,setShowCart] = useState(false);
    const showCardHandler = () => {
        setShowCart(true);
    }
    const hideCardHandler = () => setShowCart(false);
    return (
        <div className='main'>
            <Header showCardHandler={showCardHandler}/>
            <Body/>
            <BackDrop showCart={showCart} hideCardHandler={hideCardHandler}/>
        </div>
    )
}

export default Main