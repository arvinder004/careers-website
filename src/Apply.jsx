import Header from './Header';
import Footer from './Footer';

function Apply() {

    return (
        <>
            <div>
                <Header />
                <div className='Apply-section'>
                    <div>
                        <form action="">
                            <input type="text" name="name" id="name" placeholder='Name'/>
                            <input type="email" name="email" id="email" placeholder='Email'/>
                            <input type="number" name="mobile" id="mobile" placeholder='Mobile' />
                            <div>
                            <label htmlFor="resume"><b>Upload Resume</b></label>
                            <input type="file" name="resume" id="resume" />
                            </div>

                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Apply