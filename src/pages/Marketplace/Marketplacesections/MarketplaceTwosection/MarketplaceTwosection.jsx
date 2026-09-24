import "./MarketplaceTwosection.css"
import { PiRocketLaunchThin } from 'react-icons/pi'

function Twosection({userdata}) {
  return (
    <>
     <section className="section_one">
                    <div className="container">
                        <div className="one_info">
                            <div className="one_title">
                                <h3>Top creators</h3>
                                <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                            </div>
                            <div className="one_btn">
                                <button> <PiRocketLaunchThin />View Rankings</button>
                            </div>
                        </div>
                        <div className="one_box" >
                          {
                            userdata.map((item , i) =>{
                                return   <div className="one_cards" key={i}>

                                <div className="one_logo">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="one_title">
                                    <h5>{item.name}</h5>
                                    <div className="one_sale">
                                        <span>Total Sales:</span>
                                        <span className="eth">34.53 ETH</span>
                                    </div>
                                </div>
                                <div className="one_number">
                                    <span>{item.id}</span>
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

export default Twosection