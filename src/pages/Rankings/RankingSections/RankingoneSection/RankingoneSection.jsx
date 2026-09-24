import "./RankingoneSection.css"
import { BsCopy } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
function RankingoneSection() {
  return (
    <>
            <div className="Rankinghero">
                <img src="/imgs/hero_top.svg" alt="" />
                <div className="container">
                    
                    <div className="hero_info">
                        <div className="animakid">
                        <h2>Animakid</h2>
                        <div className="bio">
                            <span>Bio</span>
                            <p>The internet's friendliest designer kid.</p>
                        </div>
                        </div>
                        <div className="hero_btn">
                            <div className="hash_btn">
                                <button> <BsCopy/> <span>0xc0E3...B79C</span></button>
                            </div>
                            <div className="follow_btn">
                                <button> <FaPlus /> <span>Follow</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="hero_profile">
                        <img src="/imgs/ranking_hero.svg" alt="" />
                    </div>
                </div>
            </div>

       
    </>
  )
}

export default RankingoneSection