import Header from './Header';
import Footer from './Footer';

function Contact() {

    return (
        <>
            <div>
                <Header />
                <div className='Contact-section'>
                    <div>
                        <h1>Contact Us</h1>
                        <ul>
                            <li>Email</li>
                            <li>Phone</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Contact