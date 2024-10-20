import Header from './Header';
import Footer from './Footer';

function Home() {

    return (
        <>
            <div>
                <Header />
                <div className='Home-section'>
                    <div><img src="./images/home-img.avif" className='Banner-img' /></div>
                    <div>
                        <h1>Career's Website</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, molestias.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home