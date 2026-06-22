import React from 'react'
import './Card.css'

const Card = ({ cardData }) => {
    console.log(cardData)
    return (
        <div className='card-container'>
            {cardData.length === 0 ? (<h2>No item found</h2>) : (
                    cardData.map((item) => {
                        return (
                            <div className='card' key={item.id}>
                                <h1>{item.name}</h1>
                                <img src={item.img} alt="" />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                <p className='price'>price: &#8377;{item.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        )
                    })
                )}
        </div>
    )
}

export default Card 
