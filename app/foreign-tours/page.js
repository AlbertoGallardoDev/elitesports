"use client";

// Código comentado para mantener mientras la página está en construcción.

import { Email, SportsBasketball, TravelExplore, LocalAirport, ArrowDownward } from '@mui/icons-material';
import Image from 'next/image';

export default function Foreign() {
    return (
        <>
            <section id="foreign-tours" className="container p-md-5 py-5 p-sm-0 text-white">
                {/* Encabezado principal */}

                <div className="container text-white mt-5">
                    <div className="row align-items-center">
                        {/* Columna izquierda */}
                        <div className="col-12 col-lg-5 d-flex flex-column align-items-center align-items-lg-start mb-5 mb-lg-0 p-4">
                            <h2 className="fw-bold mb-4 text-center text-lg-start">
                                Foreign Summer Tours for College Basketball Teams
                            </h2>
                            <div className="w-100">
                                <Image
                                    src="/images/foreign-tours/Villanova tour.jpg"
                                    alt="Villanova Tour"
                                    layout="responsive"
                                    width={600}
                                    height={400}
                                    className="rounded w-100"
                                />
                            </div>
                        </div>

                        {/* Columna derecha */}
                        <div className="col-12 col-lg-7 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start p-4">
                            <div className="w-100 mb-4">
                                <Image
                                    src="/images/foreign-tours/Rome.jpg"
                                    alt="Rome Experience"
                                    layout="responsive"
                                    width={600}
                                    height={400}
                                    className="rounded w-100"
                                />
                            </div>
                            <h3 className="fw-normal mb-4 fw-bold text-center text-lg-start">
                                Creating lifetime memories for your players through sports, team bonding, and new countries to discover
                            </h3>
                            <button
                                className="btn btn-outline-light w-lg-auto"
                                style={{
                                    backgroundColor: '#38B6FF',
                                    borderColor: '#38B6FF',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'none'
                                }}
                                onClick={() => document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Receive custom team proposal
                            </button>

                        </div>
                    </div>
                </div>

                <div className="container text-center mt-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        {/* Caja 1: Elite Competition */}
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center p-3">
                            <SportsBasketball style={{ fontSize: 50, color: '#fff' }} />
                            <p className="fw-bold mt-2">Elite Competition</p>
                            <small>
                                Play against top-tier European teams and professional clubs for valuable international exposure.
                            </small>
                        </div>

                        {/* Caja 2: Adventure & Culture */}
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center p-3">
                            <TravelExplore style={{ fontSize: 50, color: '#fff' }} />
                            <p className="fw-bold mt-2">Adventure & Culture</p>
                            <small>
                                Explore iconic destinations and engage in team-building activities, from mountain excursions to historic city tours.
                            </small>
                        </div>

                        {/* Caja 3: Seamless Travel */}
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center p-3">
                            <LocalAirport style={{ fontSize: 50, color: '#fff' }} />
                            <p className="fw-bold mt-2">Seamless Travel</p>
                            <small>
                                We handle everything – accommodations, meals, transport, game scheduling, and cultural activities.
                            </small>
                        </div>
                    </div>
                </div>


                {/* Itinerarios personalizados */}
                <div className="container mt-5 text-white">
                    <h2 className="text-center mb-5 fw-bold fs-1">Tailored Itineraries for Your Team</h2>

                    {/* Fila 1 */}
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <Image
                                src="/images/foreign-tours/Team_beach.webp"
                                alt="Cultural Immersion"
                                layout="responsive"
                                width={400}
                                height={400}
                                className="rounded"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bold p-4" style={{ color: '#38B6FF', fontSize: '50px' }}>Cultural Immersion Beyond Borders</h2>
                            <ul>
                                <li>Traveling through Europe means more than just playing games – it's an opportunity to truly experience new cultures, languages, and traditions.</li>
                                <li>Players and staff will have the chance to visit historic cities, taste local cuisines, and engage with people from different backgrounds.</li>
                                <li>This cultural immersion will broaden their perspectives and create lasting bonds through shared experiences.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Fila 2 */}
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-2">
                            <Image
                                src="/images/foreign-tours/Travel planner EST.jpg"
                                alt="Full Service Management"
                                layout="responsive"
                                width={400}
                                height={400}
                                className="rounded"
                            />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <h2 className="fw-bold p-4" style={{ color: '#38B6FF', fontSize: '50px' }}>Full-Service Management</h2>
                            <ul>
                                <li>We take care of all logistics so you can focus on your players and the experience.</li>
                                <li>From accommodations to travel arrangements, meal plans, and game scheduling, we ensure your trip is smooth and hassle-free.</li>
                                <li>On-site support throughout the tour for any assistance you need.</li>
                                <li>We offer a range of packages to fit your team’s specific needs, including game-focused tours, adventure experiences, and cultural immersion.</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* Destinos */}
                <div className="container mt-5 text-center">
                    <h2 className="fs-1 fw-bold">Destination Ideas</h2>
                    <p>We offer a wide range of flexible travel options tailored to meet the specific needs of your team.</p>
                    <div className="container mt-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {[
                                { src: "/images/foreign-tours/Rome.jpg", label: "Italy" },
                                { src: "/images/foreign-tours/Paris.jpg", label: "France" },
                                { src: "/images/foreign-tours/Barcelona.png", label: "Spain" },
                                { src: "/images/foreign-tours/berlin.jpg", label: "Germany" },
                                { src: "/images/foreign-tours/Greece.webp", label: "Greece" },
                                { src: "/images/foreign-tours/Switzerland.webp", label: "Switzerland" }
                            ].map((item, index) => (
                                <div className="col" key={index}>
                                    <div className="card h-100 text-center">
                                        <img
                                            src={item.src}
                                            className="card-img-top"
                                            alt={item.label}
                                            onError={(e) => { e.target.src = "/images/placeholder.png"; }}
                                        />
                                        <div className="card-body">
                                            <p className="card-text">{item.label}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="p-2 mt-3">
                        Looking for other destinations? We’ve got you covered!
                    </p>

                    <p className="fw-bold fs-2">
                        Elite Sports Trips can design the ideal tour package
                        <br />
                        to suit your team’s unique preferences.
                        <br />
                        <ArrowDownward style={{ fontSize: 100, color: 'white' }} />
                    </p>
                </div>

                {/* Contacto */}
                <div id="contact-section" className="text-center mt-5">
                    <a
                        href="mailto:armando@elitesportstrips.com"
                        className="d-flex flex-wrap justify-content-center align-items-center text-white"
                    >
                        <Email className="me-2" style={{ fontSize: 30 }} />
                        <span className="fw-bold text-break text-truncate fs-5 fs-md-2">
                            armando@elitesportstrips.com
                        </span>
                    </a>
                </div>

            </section>
        </>
    );
}
