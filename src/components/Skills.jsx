import React from 'react'
import "./css/Skills.css"
import htmlImg from "./images/html.png";
import cssImg from "./images/css-3.png";
import reactImg from "./images/atom.png";
import jsImg from "./images/js.png";
import phpImg from "./images/php.png";
import psImg from "./images/adobe-photoshop.png";
const Service = () => {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">My Skills</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <img src={htmlImg} alt="" className="about__img" />
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
             
              </div>
              <div className="service__meta">
                <h1 className="service__text">HTML</h1>
                {/* <p className="p service__text p__color">
                  I throw myself down among the
                </p>
                <p className="p service__text p__color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service__text p__color">close to the earth.</p> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <img src={cssImg} alt="" className="about__img" />
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
            
              </div>
              <div className="service__meta">
                <h1 className="service__text">CSS</h1>
                {/* <p className="p service__text p__color">
                  I throw myself down among the
                </p>
                <p className="p service__text p__color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service__text p__color">close to the earth.</p> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <img src={reactImg} alt="" className="about__img" />
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
             
              </div>
              <div className="service__meta">
                <h1 className="service__text">React Js</h1>
                {/* <p className="p service__text p__color">
                  I throw myself down among the
                </p>
                <p className="p service__text p__color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service__text p__color">close to the earth.</p> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <img src={jsImg} alt="" className="about__img" />
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
              
              </div>
              <div className="service__meta">
                <h1 className="service__text">Javascript</h1>
                {/* <p className="p service__text p__color">
                  I throw myself down among the
                </p>
                <p className="p service__text p__color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service__text p__color">close to the earth.</p> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <img src={phpImg} alt="" className="about__img" />
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              
              </div>
              <div className="service__meta">
                <h1 className="service__text">PHP</h1>
                {/* <p className="p service__text p__color">
                  I throw myself down among the
                </p>
                <p className="p service__text p__color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service__text p__color">close to the earth.</p> */}
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
              <img src={psImg} alt="" className="about__img" />
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
              
              </div>
              <div className="service__meta">
                <h1 className="service__text">Adobe Photoshop</h1>
                {/* <p className="p service__text p__color">
                  I throw myself down among the
                </p>
                <p className="p service__text p__color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service__text p__color">close to the earth.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service