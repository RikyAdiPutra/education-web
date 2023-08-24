import React from "react";
import Image from "next/image";
import "./style.css"

export default function Sectiontiga() {
     return (
          <div className="container-tiga">
               <div className="main">
                    <div className="section1">
                         <Image
                              src="/images/satu.png"
                              width={475}
                              height={175}
                         />
                    </div>
                    <div className="section">
                         <Image src="/images/dua.png" width={132} height={45} />
                    </div>
               </div>
               <div className="section3">
                    <Image src="/images/tiga.png" width={581} height={474} />
               </div>
          </div>
     );
}
