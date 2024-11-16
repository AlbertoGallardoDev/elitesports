import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`text-white py-5 ${styles.footer}`}>
            <div className={`${styles.footerBox} container-fluid d-flex justify-content-between flex-wrap`}>
                <div className=" align-items-center mb-3 mb-md-0">
                    <Link href="/" passHref>
                        <Image
                            src="/images/logo-blanco.png"
                            alt="Elite Sports Trips Logo"
                            width={244}
                            height={183}
                            style={{ cursor: 'pointer' }}
                        />
                    </Link>
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
                        <p className="mb-0" style={{ fontSize: '11px'}}>© 2024 by Elite Sports Trips.
                            <a
                                href="https://docs.google.com/document/d/18rtJpyqHUjuC0UPpx7sstDyMJwKDVObpoZJW2ZBt9dM/export?format=pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-underline text-white mx-2"
                            >
                                Terms of Service
                            </a>
                            and
                            <a
                                href="https://docs.google.com/document/d/16b352ULqYAWPfMXMNTmzpWmlloWA-1MGD7xWWfiI7xs/export?format=pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-underline text-white mx-2"
                            >
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
