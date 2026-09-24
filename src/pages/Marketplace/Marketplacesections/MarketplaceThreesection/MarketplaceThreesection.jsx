import "./MarketplaceThreesection.css"
import { IoEyeOutline } from 'react-icons/io5'

function Threesection() {
  return (
    <>
    <section className="section_two">
                    <div className="container">
                        <div className="two_info">
                            <div className="two_title">
                                <h3>Discover More</h3>
                                <p>Explore new trending NFTs</p>
                            </div>
                            <div className="two_btn">
                                <button> <IoEyeOutline /> <span>See All</span></button>
                            </div>
                        </div>
                        <div className="two_box">
                            <div className="two_cards">
                                <div className="two_logo">
                                    <img src="/public/imgs/two_logo.svg" alt="" />
                                </div>
                                <div className="two_cards_info">
                                    <h5>Distant Galaxy</h5>
                                    <div className="two_profile">
                                        <img src="/public/imgs/two_profile.svg" alt="" />
                                        <span>MoonDancer</span>
                                    </div>
                                </div>
                                <div className="two_price">
                                    <div className="two_eth">
                                        <span>Price</span>
                                        <span className="Eth">1.63 ETH</span>
                                    </div>
                                    <div className="two_eth">
                                        <span>Highest Bid</span>
                                        <span className="Eth">0.33 wETH</span>
                                    </div>
                                </div>
                            </div>
                            <div className="two_cards">
                                <div className="two_logo">
                                    <img src="/imgs/two_logo2.svg" alt="" />
                                </div>
                                <div className="two_cards_info">
                                    <h5>Life On Edena</h5>
                                    <div className="two_profile">
                                        <img src="/imgs/two_profile2.svg" alt="" />
                                        <span>NebulaKid</span>
                                    </div>
                                </div>
                                <div className="two_price">
                                    <div className="two_eth">
                                        <span>Price</span>
                                        <span className="Eth">1.63 ETH</span>
                                    </div>
                                    <div className="two_eth">
                                        <span>Highest Bid</span>
                                        <span className="Eth">0.33 wETH</span>
                                    </div>
                                </div>
                            </div>
                            <div className="two_cards">
                                <div className="two_logo">
                                    <img src="/imgs/two_logo3.svg" alt="" />
                                </div>
                                <div className="two_cards_info">
                                    <h5>AstroFiction</h5>
                                    <div className="two_profile">
                                        <img src="/imgs/two_profile3.svg" alt="" />
                                        <span>Spaceone</span>
                                    </div>
                                </div>
                                <div className="two_price">
                                    <div className="two_eth">
                                        <span>Price</span>
                                        <span className="Eth">1.63 ETH</span>
                                    </div>
                                    <div className="two_eth">
                                        <span>Highest Bid</span>
                                        <span className="Eth">0.33 wETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default Threesection