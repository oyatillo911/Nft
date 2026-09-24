import { useState } from "react";
import "./Connecttwosection.css"
import { FaArrowRight } from "react-icons/fa6";

function Connecttwosection() {
    const [connectdata, setconnectdata] = useState([
        {
            id: 1,
            name: "Foxy Life",
            img: "/imgs/connect_one.svg",
        },
        {
            id: 2,
            name: "Cat from future",
            img: "/imgs/connect_one2.svg",
        },
        {
            id: 3,
            name: "Psycho Dog",
            img: "/imgs/connect_one3.svg",
        },
        {
            id: 4,
            name: "Designer Bear",
            img: "/imgs/connect_one4.svg",
        },
        {
            id: 5,
            name: "Dancing Robot 0375",
            img: "/imgs/connect_one5.svg",
        },
        {
            id: 6,
            name: "Dancing Robot 0356",
            img: "/imgs/connect_one6.svg",
        },
        {
            id: 7,
            name: "Dancing Robot 0321",
            img: "/imgs/connect_one7.svg",
        },
        {
            id: 8,
            name: "Dancing Robot 0512",
            img: "/imgs/connect_one8.svg",
        },
        {
            id: 9,
            name: "Dancing Robot 0024",
            img: "/imgs/connect_one9.svg",
        },
    ])

    return (
        <>
            <section className="connect_one_section">
                <div className="container">
                    <div className="one_info">
                        <h3>More from this artist</h3>
                        <div className="one_btn">
                            <button> <FaArrowRight /><span>Go To Artist Page</span></button>
                        </div>
                    </div>
                    <div className="one_box">
                        {
                            connectdata.map((item , i) =>{
                                return    <div className="one_cards" key={i}>
                                <div className="one_logo">
                                    <img src= {item.img} alt="" />
                                </div>
                                <div className="one_cards_info">
                                    <h5> {item.name}</h5>
                                    <div className="one_cards_profile">
                                        <img src="/imgs/connect_one_profile.svg" alt="" />
                                        <span>Orbitian</span>
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
                </div>
            </section>
        </>
    )
}

export default Connecttwosection