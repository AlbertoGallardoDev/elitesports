import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`text-white py-5 ${styles.footer}`}>
            <div className={`${styles.footerBox} container-fluid d-flex justify-content-between flex-wrap`}>
                <div className="d-flex align-items-center mb-3 mb-md-0">
                    <Image
                        src="/images/logo-blanco.png"
                        alt="Elite Sports Trips Logo"
                        width={274}
                        height={183}
                    />
                </div>

                <div className={`${styles.center} d-flex flex-column justify-content-around`}>
                    <nav className={`w-100 ${styles.footerLinks}`}>
                        <Link href="/" legacyBehavior><a className={`w-100 ${styles.links} text-white ps-0 px-5`}>Home</a></Link>
                        <Link href="/upcoming-trips" legacyBehavior><a className={`w-100 ${styles.links} text-white px-5`}>Upcoming trips</a></Link>
                        <Link href="/about" legacyBehavior><a className={`w-100 ${styles.links} text-white px-5`}>About</a></Link>
                        <Link href="/contact" legacyBehavior><a className={`w-100 ${styles.links} text-white px-5 mb-2`}>Contact</a></Link>
                    </nav>

                    <div className="d-flex flex-column">
                        <p className="mb-2">
                        Switzerland
                        </p>
                    </div>

                    <div>
                        <p className="mb-0">© 2024 by Elite Sports Trips</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
