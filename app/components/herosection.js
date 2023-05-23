import React from "react";
import Link from 'next/link';
import Image from 'next/image'
export default function Herosection() {
    return (
        <div>
            <section className="section-hero-image">
                <div className="container">
                    <div className="row">
                        <div className="left-hero-image">
                            <div className="left-section-text">
                                <h5>E-COURSE PLATFORM</h5>
                                <h1>Learning and teaching online, made easy.</h1>
                                <p>Practice your English and learn new things with the platform.</p>
                                <Link href="/about" className="btn-primary">About platform</Link>
                            </div>
                            <div className="left-section-infograph">
                                <div className="infograph-column">
                                    <div className="infograph-icon-text">
                                        <Image src="/images/icon-flash-light.png" width="24" height="30" alt=""></Image>
                                        <h2>600<span>+</span></h2>
                                    </div>
                                    <p>Popular words</p>
                                </div>
                                <div className="infograph-column">
                                    <div className="infograph-icon-text">
                                        <Image src="/images/icon-game.svg" width="24" height="30" alt=""></Image>
                                        <h2>2<span>+</span></h2>
                                    </div>
                                    <p>Mini games</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-hero-image">
                            <Image src="/images/hero-image.png" width="615" height="376" alt=""></Image>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}