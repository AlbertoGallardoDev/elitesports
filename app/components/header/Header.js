'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import tripsData from '../../../public/trips.json'; // Importa el JSON de viajes

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Importa las flechas
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTripsDropdownOpen, setIsTripsDropdownOpen] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Simula la carga de datos desde el archivo JSON
    setTrips(tripsData);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTripsDropdown = () => {
    setIsTripsDropdownOpen(!isTripsDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container d-flex justify-content-between">
        <div className={styles.menuBar}>
          <button onClick={toggleMenu} className={styles.menuToggle}>
            &#9776;
          </button>
        </div>

        <div>
          <Image
            src="/images/logo-blanco.png"
            alt="Elite Sports Trips Logo"
            width={114}
            height={75}
          />
        </div>
        <div></div>
      </div>

      <nav
        className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : ''}`}
      >
        <button className={styles.closeMenu} onClick={toggleMenu}>
          &times;
        </button>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {/* Dropdown para "Upcoming Trips" */}
            <div className={styles.dropdown}>
              <p className={styles.pointer} onClick={toggleTripsDropdown} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Upcoming Trips
                <FontAwesomeIcon
                  icon={isTripsDropdownOpen ? faChevronUp : faChevronDown}
                />
              </p>
              {isTripsDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  <li>
                    <Link href={`/upcoming-trips`}>
                      All Trips
                    </Link>
                  </li>
                  {trips.map((trip) => (
                    <li key={trip.id}>
                      <Link href={`/upcoming-trips/${trip.id}`}>
                        Trip {trip.id} - {trip.title} - {trip.datemenu}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className={styles.socialIcons}>
          {/* Icono de Instagram */}
          <a
            href="https://www.instagram.com/elitesportstrips"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Elite Sports Trips"
          >
            <InstagramIcon style={{ fontSize: 40 }} />
          </a>

          {/* Icono de Facebook */}
          <a
            href="https://www.facebook.com/EliteSportsTrips/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook de Elite Sports Trips"
          >
            <FacebookIcon style={{ fontSize: 40 }} />
          </a>
        </div>
      </nav>
    </header>
  );
}
