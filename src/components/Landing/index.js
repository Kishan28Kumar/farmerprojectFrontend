import './index.css';
import Nav from './Nav';
import {FaFacebook , FaTwitter, FaInstagramSquare, FaYoutube} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Landing(){
    return (
        <>
            <Nav />
            <div className="page">
                <div className="first-page-bg">
                    <div className="page-first-content" id="home">
                    {/* <div className="welcome-content">
                        <h3>WELCOME TO,</h3>
                        <h1>Farm Marketplace</h1>
                    </div> */}

                    <div className="explore-cards">
                        <div className="explore-card farmer-card">
                            <h3>Farmer</h3>
                            <NavLink exact="true" className="explore-button" to="/Farmer">
                                <button >Explore</button>
                            </NavLink>
                        </div>
                        <div className="explore-card buyer-card">
                            <h3>Buyer</h3>
                            <NavLink exact="true" className="explore-button" to="/Buyer">
                                <button>Explore</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                </div>
                <div id="about"></div>
                <div className="about-section">
                    <h1>Mission and Vision</h1>
                    <div className="mission-cards">
                        <div className='mission-card'>
                            To Remove the involvement of middlemen and help farmers in getting fair price for their goods.
                        </div>
                        <div className='mission-card'>
                            To provide a better and secure marketplace for buyers and farmers
                        </div>
                        <div className="mission-card">
                            To give farmers latest updates regarding different government schemes and announcements.
                        </div>

                        
                    </div>
                </div>


                <div className="update-container">
                    <h1><span>Updates</span></h1>
                    <table className="update-table">
                        <tr>
                            <td><a href='https://www.nabard.org/content1.aspx?id=595&catid=23&mid=530' rel="noreferrer" target="_blank">AGRI CLINIC AND AGRIBUSINESS CENTRES SCHEME (ACABC SCHEME)</a></td>
                        </tr>
                        <tr>
                            <td><a href='https://pmksy.gov.in/' rel="noreferrer" target="_blank"> Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</a></td>
                        </tr>

                        <tr>
                            <td><a href='https://pmfby.gov.in/' rel="noreferrer" target="_blank">Pradhan Mantri Fasal Bima Yojana (PMFBY)</a></td>
                        </tr>
                        <tr>
                            <td><a href='https://www.rbi.org.in/commonman/English/Scripts/Notification.aspx?Id=2311' rel="noreferrer" target="_blank">Kisan Credit Card (KCC)</a></td>
                        </tr>

                        <tr>
                            <td><a href="https://vikaspedia.in/schemesall/schemes-for-farmers/agriculture-infrastructure-fund" rel="noreferrer" target="_blank">Agriculture Infrastructure Fund</a></td>
                        </tr>

                        <tr>
                            <td><a href="https://vikaspedia.in/schemesall/schemes-for-farmers/credit-facility-for-farmers" rel="noreferrer" target="_blank">Credit facility for farmers</a></td>
                        </tr>

                        <tr>
                            <td><a href="https://vikaspedia.in/schemesall/schemes-for-farmers/crop-insurance-schemes" rel="noreferrer" target="_blank">Crop insurance schemes</a></td>
                        </tr>

                        <tr>
                            <td><a href="https://vikaspedia.in/schemesall/schemes-for-farmers/group-accident-insurance-scheme-for-fishermen" rel="noreferrer" target="_blank">Group Accident Insurance scheme for Fishermen</a></td>
                        </tr>

                        <tr>
                            <td><a href="https://vikaspedia.in/schemesall/schemes-for-farmers/interest-subvention-for-dairy-sector" rel="noreferrer" target="_blank">Interest subvention for dairy sector</a></td>
                        </tr>

                        <tr>
                            <td><a href="https://vikaspedia.in/schemesall/schemes-for-farmers/kcc-for-animal-husbandry-and-fisheries"  rel="noreferrer" target="_blank">KCC for animal husbandry and fisheries</a></td>
                        </tr>

                        <tr>
                            <td><a href="https://vikaspedia.in/schemesall/schemes-for-farmers/pm-kisan-maan-dhan-yojana" rel="noreferrer" target="_blank">PM Kisan Maan Dhan Yojana</a></td>
                        </tr>

                        <tr>
                            <td><a href="https://vikaspedia.in/schemesall/schemes-for-farmers/pradhan-mantri-kisan-samman-nidhi" rel="noreferrer" target="_blank">Pradhan Mantri Kisan Samman Nidhi</a></td>
                        </tr>
                    </table>
                </div>


                <div className="footer" id="contact">
                    <div className="footer-top">
                        <div className="footer-left">
                            <h3>Contact Us:</h3>
                            <p>Phone: 8802040885</p>
                            <p>Email: farmermarket@gmail.com</p>
                        </div>
                        <div className="footer-right">
                            <ul className="social-list">
                                <li><FaFacebook size={40} className="fb-icon social-icons" /></li>
                                <li><FaInstagramSquare size={40} className="ins-icon social-icons" /></li>
                                <li><FaTwitter size={40} className="twt-icon social-icons" /></li>
                                <li><FaYoutube size={40} className="yt-icon social-icons" /></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>Copyright &copy;  2023</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Landing;
