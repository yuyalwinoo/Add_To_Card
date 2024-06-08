import React from 'react'
import Cart from './Cart'

const BackDrop = ({showCart,hideCardHandler}) => {
  return (
    <>
        {
            showCart && <div className='backdrop-blur-div'>
            <Cart hideCardHandler={hideCardHandler}/>
        </div>
        }
    </>
  )
}

export default BackDrop