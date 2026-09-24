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
                <h2>.Coonecthero .hero_to</h2>
                <span>Minted on Sep 30, 2022</span>
            </div>
            <div className="hero_auction">
                <span>Auction ends in:</span>
                <div className="hero_clock">
                    <div className="hero_hour">
                        <h3>59</h3>
                        <span>Hours</span>
                    </div>
                    <span>:</span>
                    <div className="hero_hour">
                        <h3>59</h3>
                        <span>Minutes</span>
                    </div>
                    <span>:</span>
                    <div className="hero_hour">
                        <h3>59</h3>
                        <span>Seconds</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Connectonesection