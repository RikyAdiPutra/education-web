import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
export default function Sectiondua() {
    return (
        <section className="sectiondua">
            <div className="container">
                <div className="row">
                    <div className="left-second-section">
                        <Image src="/images/image-left-section-2.png" width="490" height="376" alt="alt"></Image>
                    </div>
                    <div className="right-second-section">
                        <div className="wording-second-section">
                            <h2>Learn a language in a playful way</h2>
                            <p>Make learning words more fun with mini-games</p>
                        </div>
                        <div className="interactive-second-section">
                            <div className="wrp-icon-shoes">
                                <Image src="/images/shoes-image.svg" width="119" height="89"></Image>
                                <h6>Sprint <FaArrowRight /></h6>
                            </div>
                            <div className="wrp-icon-speaker">
                                <Image src="/images/speaker-audio-image.png" width="89" height="99"></Image>
                                <h6>Audio-call <FaArrowRight /></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}