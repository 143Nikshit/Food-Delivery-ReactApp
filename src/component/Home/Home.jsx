import React from 'react'
import Rajbhogthali from '../../assets/Rajbhogthali.jpg'
import rajasthani from '../../assets/rajasthani.jpg'
import bihar from '../../assets/bihar.jpg'
import delhi from '../../assets/delhi.jpg'
import gujarat from '../../assets/gujarat.jpg'
import frankie from '../../assets/frankie.jpg'
import jelabi from '../../assets/jelabi.jpg'
import kesar from '../../assets/kesar.jpg'
import kolkata from '../../assets/kolkata.jpg'
import maharashtra from '../../assets/maharashtra.jpg'
import misalpav from '../../assets/misalpav.jpg'
import modak from '../../assets/modak.jpg'
import nepal from '../../assets/nepal.jpg'
import noodles from '../../assets/noodles.jpg'
import Card from '../card/Card'

const Home = () => {

  let cardData = [
    {
      id : 1,
      name : "Rajbhogthali",
      img: Rajbhogthali,
      price: 2100
    },
     {
      id : 2,
      name : "Rajasthanispecial",
      img: rajasthani,
      price: 1100
    },
    {
      id : 3,
      name : "Biharspecial",
      img: bihar,
      price: 510
    },
    {
      id : 4,
      name : "Delhispecial",
      img: delhi,
      price: 450
    },
    {
      id : 5,
      name : "Gujaratspecial",
      img: gujarat,
      price: 350
    },
    {
      id : 6,
      name : "Frankie",
      img: frankie,
      price: 80
    },
    {
      id : 7,
      name : "Jelabi",
      img: jelabi,
      price: 550
    },
    {
      id : 8,
      name : "Kesar",
      img: kesar,
      price: 850
    },
    {
      id : 9,
      name : "KolkataSpecial",
      img: kolkata,
      price: 450
    },
    {
      id : 10,
      name : "MaharashtraSpecial",
      img: maharashtra,
      price: 25
    },
    {
      id : 11,
      name : "Misalpav",
      img: misalpav,
      price: 180
    },
    {
      id : 12,
      name : "Modak",
      img: modak,
      price: 550
    },
    {
      id : 13,
      name : "NepalSpecial",
      img: nepal,
      price: 320
    },
    {
      id : 14,
      name : "Noodles",
      img: noodles,
      price: 260
    }

  ]
  
  return (
    <div>
      <Card cardData={cardData} />
    </div>
  )
}

export default Home