import React from "react";
import Image from 'next/image'
import "./style.css"

export default function Sectionempat() {
    return (
     <section class="sectionempat">
        <div className="container">
        <div className="row">
                    <div className="left-second-section">
                        <Image src="/images/image 1.png" width="490" height="376" alt="alt"></Image>
                    </div>
                    </div>
                    <div className="right-second-section">
                        <div className="wording-second-section">
                            <h2>Increase your vocabulary</h2>
                            <p>Save statistics on your achievements, words learned, and mistakes </p>
                        </div>
               
               <div className="about platform">
               <Image src="/images/About platform.png" width={132} height={45} />
                            </div>
                            </div>
              
                         
          </div>
          </section>
    );
}