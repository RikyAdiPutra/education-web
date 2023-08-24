import React from "react";
import Image from "next/image";
import "./style.css";

export default function Sectionempat() {
  return (
    <section className="sectionempat">
      <div className="container">
        <div className="row">
          <div className="left-second-section">
            <Image
              src="/images/image 1.png"
              width="680"
              height="410"
              alt="alt"
            ></Image>
          </div>
        </div>
        <div className="right-second-section">
          <div className="wording-second-section">
            <h2>Increase your vocabulary</h2>
            <p>
              Save statistics on your achievements, words learned, and mistakes{" "}
            </p>
          </div>

          <div className="about platform">
            <Image src="/images/About platform.png" width={88} height={14} />
          </div>
        </div>
      </div>
    </section>
  );
}
