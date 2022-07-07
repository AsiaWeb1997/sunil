import React from 'react';
import { products, faq, logos, testimonials, team } from '../data/products';

const Home = () => {
    return (
        <div>
           <section className='hero-section' style={{backgroundImage:"url(../image/hone-test-hero-bg.jpg)"}}>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-8'>
                        <h1>Unlocking carbon sequestration through real time, in-field and low-cost measurement of soil carbon.</h1>
                        <a className="btn btn-primary mt-4" href="#">FIND OUT MORE</a>
                  </div>
              </div>
          </div>
      </section>
      <section className='features-section'>
          <div className='container'>
              <div className='row text-center'>
                  <div className='col-md-4'>
                        <img src='image\on-farm-icon.svg' className='img-fluid'></img>
                        <h3>Portable Testing</h3>
                        <p>Measure soil carbon in-field, without the need for a commercial laboratory.</p>
                  </div>
                  <div className='col-md-4'>
                        <img src='image\why-no-forms.svg' className='img-fluid'></img>
                        <h3>Reduced Cost</h3>
                        <p>Save significant time and money on soil sampling and analysis.</p>
                  </div>
                  <div className='col-md-4'>
                        <img src='image\why-checklist.svg' className='img-fluid'></img>
                        <h3>Instant Results</h3>
                        <p>Receive soil carbon test results in minutes instead of weeks.</p>
                  </div>
              </div>
              <div className='row text-center vide-section'>
                  <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2'>
                  <iframe width="100%" max-width="640" height="360" src="https://www.youtube.com/embed/1114g2P0FCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
              </div>
          </div>
      </section>
      <section className='unique-section'>
          <div className='container'>
              <div className='row text-center'>
                  <div className='col-md-12'>
                      <h1 className='mb-5 font-weight-bold'>Unique Technology</h1>
                      <p>Hone Carbon uses the latest portable sensor technology in combination with an intuitive and user-friendly interface to enable in-field measurements of soil carbon.</p>
                        <p>Knowledge now.</p>
                  </div>
                  <div className='col-md-12'>
                        <img src='image\technology.png' className='img-fluid'></img>
                  </div>
              </div>
          </div>
      </section>
      <section className='branch-section'>
          <div className='container'>
              <div className='row text-center'>
              <div className='col-md-12'>
                <div className="d-flex logo-branch">
                    <img src='image\hone-logo-symbol.svg' className='img-fluid' width={35}></img>
                    <span className='text-orange'>HONE</span>
                </div>
                  </div>              
                  <div className='col-md-12'>
                    <div className="h-divisions-buttons">
                        <a className="btn btn-primary" href="https://www.honeag.com/" target="_blank">Ag</a>
                        <a className="btn btn-primary" href="https://www.honeliquid.com/" target="_blank">Liquid</a>
                        <a className="btn btn-primary" href="https://www.honecreate.com/" target="_blank">Create</a>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <h3>Knowledge Now</h3>
                    <p>The Hone Group delivers solutions in spectroscopy for a range of applications. Hone Ag provides handheld devices for monitoring nutrients in soil, plant tissue, and commodities. Hone Liquid provides instruments for food and commodity processing. Hone Create offers Hone's machine learning platform to other organisations seeking to build their own chemometric models. The Hone Group takes pleasure in forming relationships with business and research partners.</p>
                  </div>
              </div>
          </div>
      </section>
      <section className='touch-section' style={{backgroundImage:"url(../image/carbon-contact-bg.jpg)"}}>
          <div className='container'>
              <div className='row text-center'>
                  <div className='col-md-12'>
                        <h1>Get in Touch</h1>
                        <a className="btn btn-primary mt-4" href="#">FIND OUT MORE</a>
                  </div>
              </div>
          </div>
      </section>
        </div>
    );
}

export default Home;
