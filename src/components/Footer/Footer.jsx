import"./Footer.css"
import { AiOutlineDiscord } from "react-icons/ai";
import { RiYoutubeLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footer_box">
                <div className="F-cards">
                    <div className="F-logo">
                        <img src="/imgs/footer_logo.svg" alt="" />
                    </div>
                    <div className="F-info">
                        <span>NFT marketplace UI created with Anima for Figma.</span>
                    </div>
                    <div className="F-icon">
                        <span>Join our community</span>
                        <div className="social">
                        <AiOutlineDiscord />
                        <RiYoutubeLine />
                        <FiTwitter />
                        <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className="F-cards">
                <div className="F-title">
                        <h2>Explore</h2>
                        </div>
                    <ul>
                        <li><a href="">Marketplace</a></li>
                        <li><a href="">Rankings</a></li>
                        <li><a href="">Connect a wallet</a></li>
                    </ul>
                </div>
                <div className="F-cards">
                <div className="F-title">
                        <h2>Join our weekly digest</h2>
                        </div>
                        <div className="F-update">
                            <span>Get exclusive promotions & updates straight to your inbox.</span>
                            <div className="F-input">
                                    <input type="email" placeholder="Enter your email here" />
                                    <button>Subscribe</button>
                            </div>
                        </div>
                </div>
            </div>
            <div className="Use">
               <span>Ⓒ NFT Market. Use this template freely.    </span>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer