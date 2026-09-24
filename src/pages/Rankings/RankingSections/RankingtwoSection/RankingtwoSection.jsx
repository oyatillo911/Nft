import { useState } from "react"
import "./RankingtwoSection.css"

function RankingtwoSection() {
    const [rankingdata, setrankingdata] = useState([
        {
            id:1,
            name:"Distant Galaxy",
            img: "/imgs/ranking_one.svg",
        },
        {
            id:2,
            name:"Life On Edena",
            img: "/imgs/ranking_one2.svg",
        },
        {
            id:3,
            name:"AstroFiction",
            img: "/imgs/ranking_one3.svg",
        },
        {
            id:4,
            name:"CryptoCity",
            img: "/imgs/ranking_one4.svg",
        },
        {
            id:5,
            name:"ColorfulDog 0524",
            img: "/imgs/ranking_one5.svg",
        },
        {
            id:6,
            name:"Space Tales",
            img: "/imgs/ranking_one6.svg",
        },
        {
            id:7,
            name:"Cherry Blossom Girl 037",
            img: "/imgs/ranking_one7.svg",
        },
        {
            id:8,
            name:"Dancing Robots 0987",
            img: "/imgs/ranking_one8.svg",
        },
        {
            id:9,
            name:"IceCream Ape ",
            img: "/imgs/ranking_one9.svg",
        },
    ])
  return (
    <>
    <section className="Rankingonesection">
        <div className="container">
          {
            rankingdata.map((item , i) =>{
                return   <div className="card" key={i} >
                <div className="card_logo">
                    <img src= {item.img} alt="" />
                </div>
                <div className="card_info">
                    <h5>{item.name}</h5>
                    <div className="card_profile">
                        <img src= "/imgs/ranking_one_profile.svg"  alt="" />
                        <span>Animakid</span>
                    </div>
                    <div className="one_title">
                        <div className="price">
                            <span>Price</span>
                            <span className="Eth">
                            1.63 ETH
                            </span>
                        </div>
                        <div className="price">
                            <span>Highest Bid</span>
                            <span className="Eth">
                            0.33 wETH
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            })
          }
        </div>
    </section>
    
    </>
  )
}

export default RankingtwoSection