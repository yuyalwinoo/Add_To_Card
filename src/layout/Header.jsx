import React from 'react'
import Nav from '../components/Nav'
import Summary from '../components/Summary'

const Header = ({showCardHandler}) => {
    return (
        <>
            <Nav showCardHandler={showCardHandler}/>
            <Summary/>
        </>
    )
}

export default Header