'use client';

import { useParams } from 'next/navigation';
import tripsData from '../../../public/trips.json';
import { Email } from '@mui/icons-material';
import styles from './TripDetails.module.css'; // Importa los estilos desde un archivo CSS

const TripDetails = () => {
  const { tripId } = useParams();

  const trip = tripsData.find((t) => t.id === tripId);

  if (!trip) {
    return <p>Trip not found.</p>;
  }

  return (
    <div className="container-fluid p-0 py-5">
      <div className={`row mx-auto ${styles.contentContainer}`}>
        <img className={`${styles.image} p-0`} src={trip.image} alt={trip.title} />
        <div className={`row m-0 ${styles.bgAzul}`}>
          <div className={`w-50 p-4 text-light d-flex flex-column justify-content-around ${styles.textContainer}`}>
            <div>
              <h2 className={styles.title}>{trip.title}</h2>
              <p className="subtitle">{trip.date}</p>
            </div>
            <span className="separador"></span>
            <p>{trip.description}</p>
          </div>

          <div className={`w-50 p-4 text-light ${styles.includedContainer}`}>
            <p className={`subtitle mt-3 ${styles.includedTitle}`}>What's included?</p>
            <ul>
              {trip.included.map((item, index) => (
                <li className='my-2' key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`py-5 pb-0 d-flex flex-column align-items-center justify-content-center ${styles.contactContainer}`}>
          <p className={`text-light text-center ${styles.contactText}`}>Are you interested in the trip? Contact us for more information in the email below</p>
          <a href="mailto:armando@elitesportstrips.com" className={`d-flex align-items-center text-decoration-none text-white ${styles.contactEmail}`}>
            <Email className="me-2" />
            <span className="fw-bold">armando@elitesportstrips.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
