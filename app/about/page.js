"use client";

import '../../styles/about.css';
import '../../app/globals.css';
export default function About() {
    return (
        <>

            {/* Section One */}
            <section>
                <div className="container-fluid caja1 d-flex w-75">
                    <div className="py-5 my-5 d-flex flex-column justify-content-between">
                        <p className="subtitle">
                            Our Story
                        </p>
                        <h2 className="fw-bold" style={{ fontSize: 50}}>Where Passion for Basketball Meets Unforgettable Journeys</h2>
                        <p>
                            Elite Sports Trips was born from a lifelong love of basketball and the thrill of travel. Our founder, Armando Choque, a former professional basketball player, experienced firsthand the electrifying energy of live NBA games and the excitement of exploring new cities. After years of traveling to the US for multiple NBA games, he wanted to create a tailored travel experience for fellow basketball fans.
                        </p>
                    </div>
                    <div className="p-5 img-armando-1">
                        <img width={300} src="/images/a1.png" alt="Elite Sports Story" />
                    </div>
                </div>
            </section>

            <section id="section-two">
                <div className="container-fluid caja2">
                    <div className="bgBlanco">
                        <h2 className="fw-bold" style={{ fontSize: 50}}>Our vision</h2>
                        <p>
                            We believe basketball is more than just a game, it’s a passion that unites people across the globe.
                            <br />
                            <br />

                            Whether you're a dedicated fan or just someone looking for a unique experience, Elite Sports Trips offers more than just tickets to NBA games. It’s about creating memories, making new friends, and sharing your love for the sport in iconic cities.
                            <br />
                            <br />

                            We design trips that give you not just access to the games, but to the heart of basketball culture in some of the world’s greatest destinations.
                        </p>
                    </div>

                    <div className="img img2"></div>
                    <div className="img img3"></div>

                    <div className="bgBlanco">
                        <h2 className="fw-bold" style={{ fontSize: 50}}>What Sets Us Apart:</h2>
                        <p>
                            Imagine being in the stands as the buzzer goes off, the thrill of the game in the air, and knowing that you’re surrounded by people who share the same passion. That’s the experience we curate.
                            <br />
                            <br />
                            But we don’t stop there. Between games, we guide you through city landmarks, local hangouts, and unique experiences. We’re also continuously working to expand the adventure by adding other sports events, and exciting local activities to enrich your journey further.
                        </p>

                        <a className="btn-custom mt-3" href="/upcoming-trips">View Upcoming Trips</a>

                    </div>

                    <div className="bgBlanco">
                        <h2 className="fw-bold" style={{ fontSize: 50}}>Why Choose Us</h2>
                        <p>
                            Every trip is personally organized by our founder, who acts as your guide, host, and fellow basketball fan.
                            <br /><br />


                            In Elite Sports Trips we don’t just offer trips; we offer a chance to be part of something bigger, to be part of a community of fans. Get close to NBA players!
                            <br /><br />
                            If you’re ready to travel, explore, and immerse yourself in the world of NBA, let us take care of the details and let’s create unforgettable memories together.
                        </p>
                        <div>
                            <p>Do you have questions?</p>

                            <a className="btn-custom" href="/contact">Contact Us</a>

                        </div>
                    </div>

                    <div className="img img4"></div>
                </div>
            </section>
        </>
    );
}
