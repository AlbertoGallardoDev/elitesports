import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import data from '../public/home.json';
import VideoComponent from './components/VideoComponent';

export default function Home() {
  // Calcular minId y maxId una vez
  const ids = data.map((item) => item.id);
  const minId = Math.min(...ids);
  const maxId = Math.max(...ids);

  return (
    <div className={`container my-4 w-100`}>
      {data.map((item) => (
        <div key={item.id} className="itemBox">
          <div className="row">
            {item.order === 1 ? (
              <>
                <div className="col-12 col-12 col-md-6">
                  <VideoComponent videoUrl={item.videoUrl} />
                </div>
                <div
                  className="col-12 col-md-6 d-flex flex-column justify-content-around"
                >
                  <h2 className={styles.h2}>{item.title}</h2>
                  <p className={styles.text}>{item.description}</p>
                  <a href={item.link} className={`${styles.button1} btn-custom align-self-start`}>
                    {item.button}
                  </a>
                </div>
              </>
            ) : (
              <>
                <div
                  className="col-12 col-md-6 text-end d-flex flex-column justify-content-around"
                >
                  <h2 className={styles.h2}>{item.title}</h2>
                  <p className={styles.text}>{item.description}</p>
                  <a href={item.link} className={`${styles.button2} btn-custom align-self-end`}>
                    {item.button}
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <VideoComponent videoUrl={item.videoUrl} />
                </div>
                {item.id === 1 && (
                  <div className={`${styles.title2} my-4 text-center p-5`}>
                    <h2 className={`${styles.h2} container text-center mb-5`}>
                      Explore Our Exciting Upcoming
                      <br />
                      Trips for the 2024-25 Season!
                    </h2>
                    <span>
                      Check out our featured trips below to find the perfect match for your basketball passion, and secure your spot today!
                    </span>
                  </div>
                )}
              </>
            )}
          </div>
          {/* Mostrar <hr> solo si el item no es el primero ni el último */}
          {(item.id !== minId && item.id !== maxId) && (
            <hr className={`${styles.hr} m-5`} />
          )}
        </div>
      ))}
    </div>
  );
}
