// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>I'm Deltawave</h1>
                <p>Python Developer & Hacker</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;