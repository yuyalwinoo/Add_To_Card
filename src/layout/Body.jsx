import React from 'react'
import Card from '../components/Card';

const Body = () => {
    const fruits = [
        {
            id:1,
            title:'Banana',
            description:'Fresh banana from Myanmar',
            price:88.88
        },
        {
            id:2,
            title:'Apple',
            description:'Fresh apple from Myanmar',
            price:102.00
        },
        {
            id:3,
            title:'Orange',
            description:'Fresh orange from Myanmar',
            price:40.00
        },
        {
            id:4,
            title:'Durian',
            description:'Fresh durian from Myanmar',
            price:800.00
        },
        {
            id:5,
            title:'Mango',
            description:'Fresh mango from Myanmar',
            price:50.98
        }
    ]
    return (
        <section>
            {
                fruits.map(fruit => (
                    <Card 
                        key={fruit.id}
                        fruit={fruit}
                    />
                ))
            }
        </section>
    )
    }

export default Body