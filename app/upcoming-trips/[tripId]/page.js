'use client';

import { useParams } from 'next/navigation';
import tripsData from '../../../public/trips.json';
import { Email } from '@mui/icons-material';

const TripDetails = () => {
  const { tripId } = useParams();

  const trip = tripsData.find((t) => t.id === tripId);

  if (!trip) {
    return <p>Trip not found.</p>;
  }

  return (
    <div className="container py-5">
      <div className="row mx-auto" style={{ width: '90%' }}>
        <img className="m-0 p-0" src={trip.image} alt={trip.title} />
        <div className="row m-0 bgAzul">
          <div className='w-50 p-4 text-light d-flex flex-column justify-content-around'>
            <div>
              <h2 style={{ fontSize: '60px' }}>{trip.title}</h2>
              <p className="subtitle">{trip.date}</p>
            </div>
            <span className="separador"></span>
            <p>{trip.description}</p>
          </div>

          <div className='w-50 p-4 text-light'>
            <p className="subtitle mt-3" style={{ fontSize: '20px' }}>What's included?</p>
            <ul>
              {trip.included.map((item, index) => (
                <li className='my-2' key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-5 pb-0 d-flex align-items-center justify-content-center">
          <a href="mailto:info@elitesports.com" style={{ fontSize: 30 }} className="d-flex align-items-center text-decoration-none text-white">
            <Email className="me-2" style={{ fontSize: 40 }}/>
            <span>info@elitesports.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
