import { Link } from "react-router-dom";
import instagram from '/assets/images/instagram.svg'
import twitter from '/assets/images/twitter.svg'
import facebook from '/assets/images/facebook.svg'
import youtube from '/assets/images/youtube.svg'
import github from '/assets/images/github.svg'

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                <div>
                    <h1>Bize katılın!</h1>
                    <p>Kampanya ve indirimlerden haberiniz olsun.</p>
                </div>

                <form>
                    <input type="text" placeholder='E-posta adresi giriniz' required />
                    <button>Abone Ol</button>
                </form>

            </div>

            <div className="footer-line"></div>

            <div className="footer-bottom">

                <p>©2024 coded by <Link to={'https://www.yasiralakus.com.tr'}>YasirAlakus</Link>. Tüm hakları saklıdır.</p>

                <div className="footer-links">
                    <Link><img src={youtube} alt="" /></Link>
                    <Link><img src={twitter} alt="" /></Link>
                    <Link><img src={instagram} alt="" /></Link>
                    <Link><img src={facebook} alt="" /></Link>
                    <Link><img src={github} alt="" /></Link>
                </div>

            </div>

        </footer>
    )
}