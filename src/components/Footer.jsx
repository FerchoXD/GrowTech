import "../public/css/Footer.css"
import LogoFacebook from "../assets/Facebook.svg"
import LogoTwitter from "../assets/Twitter.svg"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div>
                    <p className="p-footer">Siguenos en</p>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100094684101104&is_tour_dismissed=true" target="_blank">
                            <img className="img-footer" src={LogoFacebook} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/growtechhs" target="_blank">
                            <img className="img-footer" src={LogoTwitter} alt="Twitter" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;