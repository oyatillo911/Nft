import "./Connectonesection.css"
function Connectonesection() {
  return (
    <>
      <div className="Connecthero">
        <div className="hero_top">
         <img src="/imgs/Connecthero.svg" alt="" />
        </div>
        <div className="container">
            <div className="hero_info">
                <h2>The Orbitians</h2>
                <span>Minted on Sep 30, 2022</span>
            </div>
            <div className="hero_auction">
                <span className="auction_title">Auction ends in:</span>
                <div className="hero_clock">
                    <div className="hero_hour">
                        <div className="multi_hour">
                        <h3>59</h3>
                    <h4>:</h4>
                        </div>
                        <span>Hours</span>
                    </div>
                    <div className="hero_hour">
                    <div className="multi_hour">
                        <h3>59</h3>
                    <h4>:</h4>
                        </div>
                        <span>Minutes</span>
                    </div>
                    
                    <div className="hero_hour">
                        <h3>59</h3>
                        <span>Seconds</span>
                    </div>
                </div>
                <div className="bid_btn">
                    <button><span>Place Bid</span></button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Connectonesection