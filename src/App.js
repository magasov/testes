import React from 'react';

function App() {
  return (
    <>
      <header className="bg-primary-300 p-2 primary-header">
        <div className="header | container">
          <div className="nav-wrapper">
            <img src="assets/logo.svg" alt="" />
            <nav className="primary-navigation" id="primary-navigation" aria-expanded="false">
              <ul role="list" className="nav-list fw-semi-bold fc-primary">
                <li>Home</li>
                <li>Service</li>
                <li>Agents</li>
                <li>Contact</li>
              </ul>
            </nav>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="fa fa-bars" id="nav-icon"></i>
            </label>
            <div className="even-columns | disply-none-sm">
              <img src="assets/search_icon.svg" alt="" className="disply-none-sm-icon" />
              <img src="assets/user_icon.svg" alt="" className="disply-none-sm-icon" />
              <button className="button">Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-primary-300 hero-section">
          <div className="container">
            <div className="hero-container flex" aria-label="main">
              <div className="hero-content">
                <h1 className="primary-heading">Find Your Dream Home</h1>
                <p className="primary-description">
                  Explore our curated selection of exquisite properties meticulously tailored to your unique dream home
                  vision
                </p>
                <button className="button">Sign Up</button>
              </div>
              <div className="hero-img-container">
                <img src="assets/hero_image.png" alt="" className="main-img" />
              </div>
            </div>
          </div>

          <div
            className="container bg-primary-500 border-round-2 center"
            aria-disabled="true"
            style={{ '--flow-spacer': '3rem' }}
          >
            <div className="even-columns | filter-columns">
              <div className="input-container">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input-with-icon border-round-1"
                  placeholder="location"
                />
                <img src="assets/location.svg" alt="" className="input-icon" />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input-with-icon border-round-1"
                  placeholder="Type"
                />
                <img src="assets/home_icon.svg" alt="" className="input-icon" />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name=""
                  id=""
                  className="input-with-icon border-round-1"
                  placeholder="Price Range"
                />
                <img src="assets/dollar_icon.svg" alt="" className="input-icon" />
              </div>
            </div>
            <button className="button | disable-md">Sign Up</button>
          </div>
        </section>

        <section className="main-section">
          <div className="container">
            <div className="even-columns" aria-colspan="true">
              <div className="secondary-img flex">
                <img src="assets/sub-title.png" alt="" className="border-round-2 sub-title-img" />
              </div>
              <div className="main-container">
                <h2 className="secondary-heading">We Help You To Find Your Dream Home</h2>
                <p className="primary-description">
                  From cozy cottages to luxurious estates, our dedicated team guides you through every step of the
                  journey, ensuring your dream home becomes a reality
                </p>
                <div className="even-columns flex | analysis">
                  <div>
                    <p className="fs-48 fc-description">8K+</p>
                    <p className="fw-semi-bold fc-description">House Available</p>
                  </div>
                  <div>
                    <p className="fs-48 fc-description">6K+</p>
                    <p className="fw-semi-bold fc-description">House Sold</p>
                  </div>
                  <div>
                    <p className="fs-48 fc-description">2K+</p>
                    <p className="fw-semi-bold fc-description">Trusted Agents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="heading">
              <h1 className="secondary-heading text-center">Why Choose Us</h1>
              <p className="text-center fw-semi-bold fc-description p-2" aria-wide="false">
                Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service
              </p>
            </div>

            <div className="even-columns | service-container" style={{ '--flow-spacer': '3rem' }}>
              <div
                className="bg-accent-200 border-round-3 p-1 | flow service-card"
                style={{ '--flow-spacer': '.8rem' }}
              >
                <div className="bg-primary-100 border-round-2">
                  <img src="assets/location_icon1.svg" alt="" className="" />
                </div>
                <h4 className="fw-semi-bold">Expert Guidance</h4>
                <p className="fw-regular line-1 fc-description">
                  Benefit from our team's seasoned expertise for a smooth buying experience
                </p>
              </div>

              <div
                className="bg-accent-200 border-round-3 p-1 | flow service-card"
                style={{ '--flow-spacer': '.8rem' }}
              >
                <div className="bg-primary-100 border-round-2">
                  <img src="assets/user_icon1.svg" alt="" />
                </div>
                <h4 className="fw-semi-bold">Personalized Service</h4>
                <p className="fw-regular line-1 fc-description">
                  Our services adapt to your unique needs, making your journey stress-free
                </p>
              </div>

              <div
                className="bg-accent-200 border-round-3 p-1 | flow service-card"
                style={{ '--flow-spacer': '.8rem' }}
              >
                <div className="bg-primary-100 border-round-2">
                  <img src="assets/list_icon.svg" alt="" />
                </div>
                <h4 className="fw-semi-bold">Transparent Process</h4>
                <p className="fw-regular line-1 fc-description">
                  Stay informed with our clear and honest approach to buying your home
                </p>
              </div>

              <div
                className="bg-accent-200 border-round-3 p-1 | flow service-card"
                style={{ '--flow-spacer': '.8rem' }}
              >
                <div className="bg-primary-100 border-round-2">
                  <img src="assets/handshake_icon.svg" alt="" />
                </div>
                <h4 className="fw-semi-bold">Exceptional Support</h4>
                <p className="fw-regular line-1 fc-description">
                  Providing peace of mind with our responsive and attentive customer service
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="secondary-heading text-center p-3">Our Popular Residences</h2>

            <div className="even-columns center | resident-container">
              <div className="card border-round-2 | resident-card">
                <div className="img-container">
                  <img src="assets/image 4.png" className="img-container" />
                </div>
                <div className="card-content bg-accent-200 p-1">
                  <div className="flex">
                    <img src="assets/location_icon.svg" alt="" />
                    <p className="fw-semi-bold fc-primary">San Francisco, California</p>
                  </div>
                  <div className="even-columns mt-1 | resident-spec" style={{ '--flow-spacer': '1.3rem' }}>
                    <div className="center" style={{ '--flow-gap': '.5rem' }}>
                      <img src="assets/rooms_icon.svg" alt="" className="icon" />
                      <p className="fw-regular fc-description">4 Rooms</p>
                    </div>
                    <div className="center" style={{ '--flow-gap': '.5rem' }}>
                      <img src="assets/size_icon.svg" alt="" className="icon" />
                      <p className="fw-regular fc-description">3,500 sq ft</p>
                    </div>
                  </div>
                  <div className="flex mt-1 even-columns | resident-price" style={{ '--flow-gap': '3rem' }}>
                    <button className="button">Sign Up</button>
                    <p className="fw-regular fc-description fs-22">$2,500,000</p>
                  </div>
                </div>
              </div>
              <div className="card border-round-2">
                <div className="img-container">
                  <img src="assets/image 5.png" className="img-container" />
                </div>
                <div className="card-content bg-accent-200 p-1">
                  <div className="flex">
                    <img src="assets/location_icon.svg" alt="" />
                    <p className="fw-semi-bold fc-primary">San Francisco, California</p>
                  </div>
                  <div className="even-columns mt-1 | resident-spec" style={{ '--flow-spacer': '1.3rem' }}>
                    <div className="center" style={{ '--flow-gap': '.5rem' }}>
                      <img src="assets/rooms_icon.svg" alt="" className="icon" />
                      <p className="fw-regular fc-description">4 Rooms</p>
                    </div>
                    <div className="center" style={{ '--flow-gap': '.5rem' }}>
                      <img src="assets/size_icon.svg" alt="" className="icon" />
                      <p className="fw-regular fc-description">3,500 sq ft</p>
                    </div>
                  </div>
                  <div className="flex mt-1 even-columns | resident-price" style={{ '--flow-gap': '3rem' }}>
                    <button className="button">Sign Up</button>
                    <p className="fw-regular fc-description fs-22">$2,500,000</p>
                  </div>
                </div>
              </div>
              <div className="card border-round-2">
                <div className="img-container">
                  <img src="assets/Residences 3.png" className="img-container" />
                </div>
                <div className="card-content bg-accent-200 p-1">
                  <div className="flex">
                    <img src="assets/location_icon.svg" alt="" />
                    <p className="fw-semi-bold fc-primary">San Francisco, California</p>
                  </div>
                  <div className="even-columns mt-1 | resident-spec" style={{ '--flow-spacer': '1.3rem' }}>
                    <div className="center" style={{ '--flow-gap': '.5rem' }}>
                      <img src="assets/rooms_icon.svg" alt="" className="icon" />
                      <p className="fw-regular fc-description">4 Rooms</p>
                    </div>
                    <div className="center" style={{ '--flow-gap': '.5rem' }}>
                      <img src="assets/size_icon.svg" alt="" className="icon" />
                      <p className="fw-regular fc-description">3,500 sq ft</p>
                    </div>
                  </div>
                  <div className="flex mt-1 even-columns | resident-price" style={{ '--flow-gap': '3rem' }}>
                    <button className="button">Sign Up</button>
                    <p className="fw-regular fc-description fs-22">$2,500,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="people say | bg-primary-300">
          <div className="container">
            <h2 className="secondary-heading text-center p-1" aria-wide="false">
              What People Say About Dwello
            </h2>

            <ul role="list" className="slider | testimonials-container">
              <li className="">
                <div className="card border-round-2 | testimonials-content">
                  <div className="testimonials-img-container">
                    <img src="assets/review 1.png" alt="" className="testimonials-content-img" />
                  </div>

                  <div className="bg-accent-200 card-content p-1 img">
                    <div className="testimonials-con-info">
                      <div className="flex">
                        <img src="assets/avtar 1.png" alt="" className="avatar" />
                        <div>
                          <p className="fw-bold fc-primary">Sarah Nguyen</p>
                          <p className="fc-primary fw-regular">San Franco</p>
                        </div>
                      </div>
                      <div className="rating">
                        <img src="assets/Star 1.png" alt="" className="" height="20" />{' '}
                        <span className="fw-regular">5.0</span>
                      </div>
                    </div>
                    <p className="fc-description line-1 fw-regular mt-1 | sm-font">
                      Dwello truly cares about their clients. They listened to my needs and preferences and helped me
                      find the perfect home in the Bay Area. Their professionalism and attention to detail are
                      unmatched.
                    </p>
                  </div>
                </div>
              </li>

              <li className="swiper-slide">
                <div className="card border-round-2 | testimonials-content">
                  <div className="testimonials-img-container">
                    <img src="assets/review 2.png" alt="" className="testimonials-content-img" />
                  </div>

                  <div className="bg-accent-200 card-content p-1 img">
                    <div className="testimonials-con-info">
                      <div className="flex">
                        <img src="assets/avtar 1.png" alt="" className="avatar" />
                        <div>
                          <p className="fw-bold fc-primary">Michael Rodri</p>
                          <p className="fc-primary fw-regular">San Diego</p>
                        </div>
                      </div>
                      <div className="rating">
                        <img src="assets/Star 1.png" alt="" className="" height="20" />{' '}
                        <span className="fw-regular">5.0</span>
                      </div>
                    </div>
                    <p className="fc-description line-1 fw-regular mt-1 | sm-font">
                      I had a fantastic experience working with Dwello. Their expertise and personalized service
                      exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!
                    </p>
                  </div>
                </div>
              </li>

              <li className="swiper-slide">
                <div className="card border-round-2 | testimonials-content">
                  <div className="testimonials-img-container">
                    <img src="assets/review 3.png" alt="" className="testimonials-content-img" />
                  </div>

                  <div className="bg-accent-200 card-content p-1 img">
                    <div className="testimonials-con-info">
                      <div className="flex">
                        <img src="assets/avtar 3.png" alt="" className="avatar" />
                        <div>
                          <p className="fw-bold fc-primary">Emily Johnson</p>
                          <p className="fc-primary fw-regular">Los Angel</p>
                        </div>
                      </div>

                      <div className="rating">
                        <img src="assets/Star 1.png" alt="" className="" height="20" />{' '}
                        <span className="fw-regular">5.0</span>
                      </div>
                    </div>
                    <p className="fc-description line-1 fw-regular mt-1 | sm-font">
                      Dwello made my dream of owning a home a reality! Their team provided exceptional support and
                      guided me through every step of the process. I couldn't be happier with my new home!
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="center" style={{ '--flow-gap': '2rem' }}>
              <button className="p-1 border-round-full bg-accent-700 a11y-slider-prev">
                <img src="assets/arrow_left.svg" alt="" height="15" width="15" />
              </button>

              <button className="p-1 border-round-full bg-accent-700 a11y-slider-next">
                <img src="assets/arrow_right.svg" alt="" height="15" width="15" />
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 className="secondary-heading text-center p-1" aria-wide="false">
              Do You Have Any Questions? Get Help From Us
            </h2>

            <div className="center | help-container" style={{ '--flow-gap': '3rem' }}>
              <div className="center" style={{ '--flow-gap': '.4rem' }}>
                <img src="assets/verify_icon.svg" alt="" className="icon" />
                <p className="fw-regular my-auto fs-18">Chat live with our support team</p>
              </div>
              <div className="center" style={{ '--flow-gap': '.4rem' }}>
                <img src="assets/verify_icon.svg" alt="" className="icon" />
                <p className="fw-regular my-auto fs-18">Browse our FAQ</p>
              </div>
            </div>

            <form action="" className="form-control mt-2 mx-auto center">
              <input
                type="email"
                name=""
                id=""
                className="bg-accent-200 border-round-1 fw-regular fc-primary fs-18"
                placeholder="Enter your Email Address ..."
              />
              <button className="button">Submit</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="padding-block bg-primary-500">
        <div className="container" style={{ '--flow-spacer': '1rem' }}>
          <div className="footer-wrapper flex">
            <div className="logo flow" style={{ '--flow-spacer': '1rem' }}>
              <img src="assets/logo.svg" alt="" />
              <p aria-wide="true" className="fc-description fw-semi-bold line-1">
                Bringing you closer to your dream home, one click at a time.
              </p>
            </div>

            <div className="footer-nav">
              <div className="about flow" style={{ '--flow-spacer': '.6rem' }}>
                <h2 className="fw-bold fc-primary fs-18">About</h2>
                <ul role="list" className="fc-description fw-semi-bold">
                  <li>Our Story</li>
                  <li>Careers</li>
                  <li>Our Team</li>
                  <li>Resources</li>
                </ul>
              </div>
              <div className="support flow" style={{ '--flow-spacer': '.6rem' }}>
                <h2 className="fw-bold fc-primary fs-18">Support</h2>
                <ul role="list" className="fc-description fw-semi-bold">
                  <li>FAQ</li>
                  <li>Contact Us</li>
                  <li>Help Center</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div className="findus flow" style={{ '--flow-spacer': '.6rem' }}>
                <h2 className="fw-bold fc-primary fs-18">Find Us</h2>
                <ul role="list" className="fc-description fw-semi-bold">
                  <li>Events</li>
                  <li>Locations</li>
                  <li>Newsletter</li>
                </ul>
              </div>
            </div>

            <div className="social">
              <h2 className="fw-bold fc-primary fs-18">Our Social</h2>
              <ul role="list" className="fc-description fw-semi-bold">
                <li className="">
                  <img src="assets/insta_icon.svg" alt="" />
                  Instagram
                </li>
                <li className="">
                  <img src="assets/facebook_icon.svg" alt="" />
                  Facebook
                </li>
                <li className="">
                  <img src="assets/x_icon.svg" alt="" />
                  Twitter (x)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;