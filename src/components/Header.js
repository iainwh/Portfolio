// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Iain" />

            <div className='header__content'>
                <h1>I'm Iain</h1>
                <p>Junior Python Developer & Hacker</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;