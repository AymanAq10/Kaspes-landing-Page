import './Sections.css';
import React, { useState, useEffect } from 'react';
import { faAngleLeft, faAngleRight, faDesktop, faGear, faPenRuler, faCamera, faCoffee, faMailBulk, faAward, faFile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lazy } from 'react';
import * as backgrounds from '../../backgrounds/backgrounds';
import * as portfolioImages from '../../PortfolioImages/Portfolio';
import profile1 from "../../assets/profile1.jpg"
import profile2 from "../../assets/profile2.jpg"
const Portfolio = lazy(() => import('../../PortfolioProjects/Portfolio'));
const SpeacialHeading = lazy(() => import('../Speacial-heading/SpeacialHeading'));





const Sections = () => {

  const [bulets, setBulets] = useState(1);
  const [background, setBackground] = useState(backgrounds.background1);
  const [filterNumber, setFilterNumber] = useState(0);
  const [projects, setprojects] = useState([]);
  const [loading, setloading] = useState(true)

  const backgroundImages = [
    backgrounds.background1,
    backgrounds.background2,
    backgrounds.background5,
  ];


  useEffect(() => {
    let li = document.querySelectorAll('.bulets li');
    li.forEach((bulet) => {
      bulet.classList.remove('active');
    });
    li[bulets - 1].classList.add('active');
    setBackground(backgroundImages[bulets - 1]);

    setprojects([
      portfolioImages.Project1,
      portfolioImages.Project2,
      portfolioImages.Project3,
      portfolioImages.Project4,
      portfolioImages.Project5,
      portfolioImages.Project6,
      portfolioImages.Project7,
      portfolioImages.Project8,
    ])
    { projects && setloading(false) }
    console.log(bulets);
  }, [bulets]);

  const removeActiveClass = (e) => {
    const l = e.target;
    const parentElement = l.parentElement;
    const childElement = parentElement.childNodes;
    childElement.forEach(element => element.classList.remove("active"));
    l.classList.add("active");

    if (parentElement.className === "links" && l.className.includes("link active")) {
      setFilterNumber(parseInt(l.getAttribute("aria-colindex")));
    }
  };

  return (
    <>
      <section className='welcome-page overlay' style={{ backgroundImage: `url(${background})` }}>
        <FontAwesomeIcon icon={faAngleLeft} className='arrow Left' onClick={() => setBulets(bulets > 1 ? bulets - 1 : backgroundImages.length)} />
        <div className="welcome-body">
          <div className="body-content">
            <h1>HELLO WORLD!</h1>
            <h1>WE ARE KASPER, WE MAKE ART.</h1>
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
              eget tincidunt nibh pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at
              sem. Mauris blandit aliquet elit, eget tincidunt.</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faAngleRight} className='arrow Right' onClick={() => setBulets(bulets < backgroundImages.length ? bulets + 1 : 1)} />

        <div className="bulets">
          <ul>
            {backgroundImages.map((_, index) => (
              <li key={index} className={index === 0 ? 'active' : ''} onClick={() => setBulets(index + 1)}></li>
            ))}
          </ul>
        </div>
      </section>
      <section className='Services' id='Services'>
        <div className=".Services-body container pad-b8-t8">
          <SpeacialHeading title="Services" />
          <div className="services-content">
            {[
              { icon: faDesktop, title: 'Vorem amet intuitive', description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.' },
              { icon: faGear, title: 'Vorem amet intuitive', description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.' },
              { icon: faPenRuler, title: 'Vorem amet intuitive', description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.' },
              { icon: faCamera, title: 'Vorem amet intuitive', description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.' },
            ].map((service, index) => (
              <div className="srs" key={index}>
                <FontAwesomeIcon icon={service.icon} />
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='Designs overlay'>
        <div className='image'>
          <img src={portfolioImages.Phones} alt="Phones" />
        </div>
        <div className="welcome-body">
          <div className="body-content">
            <h2>Our Designs come with...</h2>
            <div className='Design-Things'>
              {[
                { icon: faDesktop, title: 'Responsive Design' },
                { icon: faDesktop, title: 'Modern and Clean Design' },
                { icon: faDesktop, title: 'Clean Code' },
                { icon: faDesktop, title: 'Browser Friendly' },
              ].map((design, index) => (
                <div key={index}>
                  <FontAwesomeIcon icon={design.icon} />
                  <h4>{design.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='Portfolio' id='Portfolio'>
        <div className="container pad-b8-t8">
          <SpeacialHeading title="Portfolio" />
          <Portfolio removeActiveClass={removeActiveClass} Projects={projects} loading={loading} FilterNumber={filterNumber} />
        </div>
      </section>
      <section className='Designs overlay Special-Design'>
        <div className="welcome-body">
          <div className="body-content">
            <h2>SUPER AWESOME VIDEO HERE</h2>
            <p>Its all you need</p>
            <button>See More</button>
          </div>
        </div>
      </section>
      <section className='About-Us' id='About'>
        <div className="container pad-b8-t8">
          <SpeacialHeading title="About Us" />
          <div className="screens">
            <img src={portfolioImages.Screens} alt="Screens" />
          </div>
        </div >
        <section className='Designs overlay Special-Design'>
          <div className="welcome-body Statistics">
            {[
              { icon: faCoffee, number: '1,263', label: 'Coffee Drinks' },
              { icon: faFile, number: '256', label: 'Completed Projects' },
              { icon: faMailBulk, number: '1,743', label: 'Mail Sent' },
              { icon: faAward, number: '17', label: 'Awards Received' },
            ].map((stat, index) => (
              <div className="stc" key={index}>
                <div>
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <h2>{stat.number}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

      </section >
      <section className='Our-Skills'>
        <div className="container pad-b8-t8">
          <div className="Testimonials">
            <div className="Testimonials-head">
              <h2>Testimonials</h2>
              <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris <br />blandit aliquet elit, eget tincidunt.</p>
            </div>
            <div className="Testimonials-body">
              <div className="profile">

                <img src={profile1} alt="profile1" />
                <div className="text">
                  <p>Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Mauris blandit aliquet elit, eget
                    tincidunt.
                  </p>
                  <p>Jhon Doe,CEO</p>
                </div>
              </div>
              <div className="profile">

                <img src={profile2} alt="profile1" />
                <div className="text">
                  <p>Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Mauris blandit aliquet elit, eget
                    tincidunt.
                  </p>
                  <p>Jhon Doe,CEO</p>
                </div>
              </div>
              <div className="Profile-bulets">
                <ul>
                  {backgroundImages.map((_, index) => (
                    <li key={index} className={index === 1 ? 'active' : ''} onClick={(e) => { removeActiveClass(e) }}></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="Skills">
            <div className="Skills-head">
              <h2>Our Skills</h2>
              <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris <br />blandit aliquet elit, eget tincidunt.</p>
            </div>
            <div className="Skills-body">
              <div className="skill">
                <p>Adobe PS</p>
                <span><i style={{ width: "93%" }} aria-level="93%"></i></span>
              </div>
              <div className="skill">
                <p>Adobe Ai</p>
                <span><i style={{ width: "88%" }} aria-level="88%"></i></span>
              </div>
              <div className="skill">
                <p>Adobe Illustrator</p>
                <span><i style={{ width: "75%" }} aria-level="75%"></i></span>
              </div>
              <div className="skill">
                <p>Canva</p>
                <span><i style={{ width: "84%" }} aria-level="84%"></i></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Quote overlay'>
        <span>&#8222;</span>
        <div className="container">
          <h2>ACCUMSAN ID CURABITUR ET PORTITOR MAURIS BLANDIT DOLOR LOREM SOME
            EST OUR DONEC STIN LORTIOS</h2>
          <p>John Doe</p>
        </div>
      </section>
      <section className='Pricing' id='Pricing'>
        <div className="container pad-b8-t8">
          <SpeacialHeading title="Pricing" />
          <div className="plans">
            <div className="plan">
              <p className="plan-title">Basic</p>
              <h2 className="plan-price">19</h2>
              <div className="features">
                <p className="feature">Feature N0 1</p>
                <p className="feature">Extra Feature</p>
                <p className="feature">Feature N0 2</p>
                <p className="feature">Feature</p>
              </div>
              <a href="" className="BuyNow">Buy Now</a>
            </div>
            <div className="plan">
              <p className="plan-title">Premium</p>
              <h2 className="plan-price">29</h2>
              <div className="features">
                <p className="feature">Feature N0 1</p>
                <p className="feature">Extra Feature</p>
                <p className="feature">Feature N0 2</p>
                <p className="feature">Feature</p>
              </div>
              <a href="" className="BuyNow">Buy Now</a>
            </div>
            <div className="plan">
              <p className="plan-title">Pro</p>
              <h2 className="plan-price">39</h2>
              <div className="features">
                <p className="feature">Feature N0 1</p>
                <p className="feature">Extra Feature</p>
                <p className="feature">Feature N0 2</p>
                <p className="feature">Feature</p>
              </div>
              <a href="" className="BuyNow">Buy Now</a>
            </div>
            <div className="plan">
              <p className="plan-title">Platinum</p>
              <h2 className="plan-price">49</h2>
              <div className="features">
                <p className="feature">Feature N0 1</p>
                <p className="feature">Extra Feature</p>
                <p className="feature">Feature N0 2</p>
                <p className="feature">Feature</p>
              </div>
              <a href="" className="BuyNow">Buy Now</a>
            </div>
          </div>
          <p>Contact us if you have special request</p>
          <a href="#" className="Contact-Us">Contact Us</a>
        </div>
      </section>
      <section className='Mailer Quote overlay'>
        <span>&#8222;</span>
        <div className="container">
          <div className="Mailer-body">
            <input type="email" name="email" />
            <FontAwesomeIcon icon={faEnvelope} />
            <label htmlFor="email">Your Mail</label>
            <button>Subscribe</button>
          </div>
          <div className="Mailer-text">
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blan
              dit aliquet elit, eget tincidunt.
            </p>
          </div>
        </div>
      </section>
      <section className='Contact' id='Contact'>
        <div className="container pad-b8-t8">
          <SpeacialHeading title="Contact Us" />
          <form>
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Your Mail' />
            <textarea id="" placeholder='Your Message'></textarea>
            <input type="submit" value="Send Message" />
          </form>
          <div>
            <h3>GET In Touch</h3>
            <h4>+00 123.456.789</h4>
            <h4>+00 123.456.789</h4>
            <h3>WHERE WE ARE</h3>
            <address>Awesome Address 17 <br />New York,NYC <br /> 123-4567-890 <br /> USA <br /></address>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sections;
