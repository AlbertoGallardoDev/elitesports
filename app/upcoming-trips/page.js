import Link from 'next/link';
import Image from 'next/image';
import tripsData from '../../public/trips.json'; // Asegúrate de colocar la ruta correcta

const HomePage = () => {
  return (
    <div className="container">
      <h2 className="text-center my-4 text-light pt-5 pb-2" style={{ fontSize: '60px'}}>Upcoming Trips</h2>
      <div className="row px-5">
        {tripsData.map((trip, index) => (
          <div
            key={trip.id}
            className={`col-md-6 mb-4 ${tripsData.length % 2 !== 0 && index === tripsData.length - 1 ? 'mx-auto' : ''}`}
          >
            <Link href={`/upcoming-trips/${trip.id}`} className="text-decoration-none">
              <div className="py-2">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  width={1000}
                  height={250}
                  className="card-img-top"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
