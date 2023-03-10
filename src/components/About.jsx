import React from 'react'
import "./css/About.css"
import aboutImg from "./images/me5.jpg";

const About = () => {

    window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
         upToTop.classList.toggle("active", window.scrollY > 0)
      });
  return (
    <div className="about component__space" id="About">
    <div className="container">
      <div className="row">
        <div className="col__2">
          <img src={aboutImg} alt="" className="about__img" />
        </div>
        <div className="col__2">
          <h1 className="about__heading">About Me</h1>
          <div className="about__meta">
            <p className="about__text p__color">
            “I am a positive, enthusiastic and competent Full-stack Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role."
            </p>
            <div class="col-lg-6">
              <ul>
                <li><strong>Birthday:</strong> <span>25 April 1996</span></li>
                <li><strong>Website:</strong> <span>www.example.com</span></li>
                <li><strong>Phone:</strong> <span>+639922766013</span></li>
                <li><strong>City:</strong> <span>Dauis,Bohol</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><strong>Age:</strong> <span>26</span></li>
                <li><strong>Degree:</strong> <span>Master</span></li>
                <li><strong>Email:</strong> <span>jnboloron042596@gmail.com</span></li>
                <li><strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
            {/* <p className="about__text p__color">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour,
              or randomised words which dont look even slightly believable. If
              you are going to use a passage of Lorem Ipsum,
            </p>
            <p className="about__text p__color">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour,
           </p>
        */}
            <div className="about__button d__flex align__items__center">
              <a href="Boloron,John Nikko.pdf" download="Boloron,John Nikko.pdf">
                <button className="about btn pointer">Download Cv</button>
              </a>
              <a href="#">
                <button className="about btn pointer">Hire Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* UP TO TOP BTN */}
    <div className="up__to__top__btn">
      <a href="#" className="bottom__to__top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-up white"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
      </a>
    </div>
  </div>
  
);
}

export default About