import { useState } from "react";
import "./Marketplace.css"
import MarketplaceTwosection from "./Marketplacesections/MarketplaceTwosection/MarketplaceTwosection";
import MarketplaceOnesection from "./Marketplacesections/MarketplaceOnesection/MarketplaceOnesection";
import MarketplaceThreesection from "./Marketplacesections/MarketplaceThreesection/MarketplaceThreesection";
function Marketplace() {
    const [userdata, setuserdata] = useState([
        {
            id: 1,
            img: "/imgs/one_logo.svg",
            name: "Keepitreal",
        },
        {
            id: 2,
            img: "/imgs/one_logo2.svg",
            name: "DigiLab",
        },
        {
            id: 3,
            img: "/imgs/one_logo3.svg",
            name: "GravityOne",
        },
        {
            id: 4,
            img: "/imgs/one_logo4.svg",
            name: "Juanie",
        },
        {
            id: 5,
            img: "/imgs/one_logo5.svg",
            name: "BlueWhale",
        },
        {
            id: 6,
            img: "/imgs/one_logo6.svg",
            name: "mr fox",
        },
        {
            id: 7,
            img: "/imgs/one_logo7.svg",
            name: "Shroomie",
        },
        {
            id: 8,
            img: "/imgs/one_logo8.svg",
            name: "robotica",
        },
        {
            id: 9,
            img: "/imgs/one_logo9.svg",
            name: "RustyRobot",
        },
        {
            id: 10,
            img: "/imgs/one_logo10.svg",
            name: "Animakid",
        },
        {
            id: 11,
            img: "/imgs/one_logo11.svg",
            name: "Dotgu",
        },
        {
            id: 12,
            img: "/imgs/one_logo12.svg",
            name: "Ghiblier",
        },
    ])
    return (
        <div className="App">
            <MarketplaceOnesection/>
            <main>
               <MarketplaceTwosection userdata={userdata} />
                <MarketplaceThreesection/>
            </main>
        </div>
    )
}

export default Marketplace