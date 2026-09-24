import "./MarketplaceOnesection.css"
import { PiRocketLaunchThin } from 'react-icons/pi'

function Onesection() {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="hero_info">
                        <h1>Discover digital art & Collect NFTs</h1>
                        <p>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                        <div className="hero_btn">
                            <button> <PiRocketLaunchThin /> Get Started</button>
                        </div>
                        <div className="hero_box">
                            <div className="H-cards">
                                <h4>240k+ </h4>
                                <span>Total Sale</span>
                            </div>
                            <div className="H-cards">
                                <h4>100k+ </h4>
                                <span>Auctions</span>
                            </div>
                            <div className="H-cards">
                                <h4>240k+ </h4>
                                <span>Artists</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero_logo">
                        <div className="hero_img">
                            <img src="/imgs/hero_logo.svg" alt="" />
                        </div>
                        <div className="H-logo_info">
                            <h5>Space Walking</h5>
                            <div className="animakid">
                                <div className="anima_logo">
                                    <img src="/imgs/animakid.svg" alt="" />
                                </div>
                                <span>Animakid</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onesection