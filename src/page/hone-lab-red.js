import React from 'react';
import '../App';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 575 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1
  }
};
const Home = () => {
  return (
    <div className="page-wrapper">
      <section className='hone-lab-banner'>
        <div className='slider-item'>
          <div className='items-slider-wrap'>
            <div className='row align-items-center'>
              <div className='col-md-7'>
                <div className='text-slider'>
                  <h1>Know your grain, grow your business</h1>
                  <p>Measure grain in storage and during harvest to make real-time decisions for marketability.</p>
                  <a className="btn btn-primary mt-4" href="#">Enquire now</a>
                </div>
              </div>
              <div className='col-md-5 img-slider'>
                <img src='./image/hona-lab-banner.png' alt='' className='img-fluid w-100' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='our-build-for pt-3 pt-md-5 pb-0'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-heading'>Built for</h2>
            </div>
            <div className='col-md-12'>
              <div className='tabs'>
                <ul className="nav nav-tabs nav-justified border-0" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Farmers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Grain Marketers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Bulk Handlers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#Agronomists" role="tab" aria-controls="Agronomists" aria-selected="false">Agronomists</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#Researchers" role="tab" aria-controls="contact" aria-selected="false">Researchers</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className='row align-items-center flex-direction'>
                      <div className='col-md-6'>
                        <div className='product-item-wrap'>
                          <div className='text-card p-0'>
                            <h4 className='tabs-heading desktop-view'>Farmers</h4>
                            <p className='paragarph'>Hone Lab is perfect for testing grain wherever you need to. The handheld and lightweight device is ideal for quickly testing grain during harvest, especially for making decisions on storage and blending. </p>
                            <ul>
                              <li>Value proposition 1</li>
                              <li>Value proposition 2</li>
                              <li>Value proposition 3</li>
                            </ul>
                            <a href='#' className='btn btn-primary'>Enquire now</a>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <h4 className='tabs-heading mobile-view'>Farmers</h4>
                        <div className='image-section light-bg'>                          
                          <img src='image/hone-tab-first.png' className='img-fluid w-100 filter'></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className='row align-items-center'>
                      <div className='col-md-6'>
                        <div className='product-item-wrap'>
                          <div className='text-card p-0'>
                            <h4 className='tabs-heading desktop-view'>Farmers</h4>
                            <p className='paragarph'>Hone Lab is perfect for testing grain wherever you need to. The handheld and lightweight device is ideal for quickly testing grain during harvest, especially for making decisions on storage and blending. </p>
                            <ul>
                              <li>Value proposition 1</li>
                              <li>Value proposition 2</li>
                              <li>Value proposition 3</li>
                            </ul>
                            <a href='#' className='btn btn-primary'>Enquire now</a>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <h4 className='tabs-heading mobile-view'>Farmers</h4>
                        <div className='image-section light-bg'>                          
                          <img src='image/hone-tab-first.png' className='img-fluid w-100 filter'></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div className='row align-items-center'>
                      <div className='col-md-6'>
                        <div className='product-item-wrap'>
                          <div className='text-card p-0'>
                            <h4 className='tabs-heading desktop-view'>Farmers</h4>
                            <p className='paragarph'>Hone Lab is perfect for testing grain wherever you need to. The handheld and lightweight device is ideal for quickly testing grain during harvest, especially for making decisions on storage and blending. </p>
                            <ul>
                              <li>Value proposition 1</li>
                              <li>Value proposition 2</li>
                              <li>Value proposition 3</li>
                            </ul>
                            <a href='#' className='btn btn-primary'>Enquire now</a>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                      <h4 className='tabs-heading mobile-view'>Farmers</h4>
                        <div className='image-section light-bg'>                          
                          <img src='image/hone-tab-first.png' className='img-fluid w-100 filter'></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Agronomists" role="tabpanel" aria-labelledby="Agronomists-tab">
                    <div className='row align-items-center'>
                      <div className='col-md-6'>
                        <div className='product-item-wrap'>
                          <div className='text-card p-0'>
                            <h4 className='tabs-heading desktop-view'>Farmers</h4>
                            <p className='paragarph'>Hone Lab is perfect for testing grain wherever you need to. The handheld and lightweight device is ideal for quickly testing grain during harvest, especially for making decisions on storage and blending. </p>
                            <ul>
                              <li>Value proposition 1</li>
                              <li>Value proposition 2</li>
                              <li>Value proposition 3</li>
                            </ul>
                            <a href='#' className='btn btn-primary'>Enquire now</a>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                      <h4 className='tabs-heading mobile-view'>Farmers</h4>
                        <div className='image-section light-bg'>                          
                          <img src='image/hone-tab-first.png' className='img-fluid w-100 filter'></img>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Researchers" role="tabpanel" aria-labelledby="Researchers-tab">
                    <div className='row align-items-center flex-direction'>
                      <div className='col-md-6'>
                        <div className='product-item-wrap'>
                          <div className='text-card p-0'>
                            <h4 className='tabs-heading desktop-view'>Farmers</h4>
                            <p className='paragarph'>Hone Lab is perfect for testing grain wherever you need to. The handheld and lightweight device is ideal for quickly testing grain during harvest, especially for making decisions on storage and blending. </p>
                            <ul>
                              <li>Value proposition 1</li>
                              <li>Value proposition 2</li>
                              <li>Value proposition 3</li>
                            </ul>
                            <a href='#' className='btn btn-primary'>Enquire now</a>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                      <h4 className='tabs-heading mobile-view'>Farmers</h4>
                        <div className='image-section light-bg'>                          
                          <img src='image/hone-tab-first.png' className='img-fluid w-100 filter'></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-3 py-md-5 video-main-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-heading'>How it works</h2>
            </div>
            <div className='col-md-12 video-links'>
              <iframe width="100%" height='500' src="https://www.youtube.com/embed/K4TOrB7at0Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{ 'borderRadius': '24px' }} allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className='our-technologes'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-heading'>Our Technology </h2>
              <p className='paragarph-heading'>The Hone Lab Red is a powerful handheld instrument that utilises machine learning and NIR spectroscopy. Test wheat, barley, and canola for protein, moisture, and (canola) oil content in seconds from a small sample. </p>
            </div>
          </div>
          <div className='row align-items-center our-technologes-items'>
            <div className='col-md-6'>
              <div className='product-item-wrap'>
                <div className='text-card'>
                  <h3 className='technologes-heading'>Handheld Device, Rapid Results</h3>
                  <p className='paragarph'>Hone Lab is a high powered on-farm measurement device that delivers results quickly with Hone’s custom-built machine learning and software applications.</p>
                  <a href='#' className='btn btn-primary mt-3 mt-md-4'>Enquire now</a>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='image-section'>
                <img src='image/technologes-1.png' className='img-fluid w-100'></img>
              </div>
            </div>
          </div>
          <div className='row align-items-center our-technologes-items'>
            <div className='col-md-6'>
              <div className='product-item-wrap'>
                <div className='text-card'>
                  <h3 className='technologes-heading'>Rugged and Versatile Design</h3>
                  <p className='paragarph'>The device is designed to be used in-field and with multiple sample types in mind. The Hone Lab Red is a recipient of two Good Design Gold Awards.</p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='image-section'>
                <img src='image/technologes-2.png' className='img-fluid w-100'></img>
              </div>
            </div>
          </div>
          <div className='row align-items-center our-technologes-items'>
            <div className='col-md-6'>
              <div className='product-item-wrap'>
                <div className='text-card'>
                  <h3 className='technologes-heading'>Intuitive and Cloud Connected Software</h3>
                  <p className='paragarph'>Hone’s software has been custom made, straight-forward to use with minimal training required. Mobile and web platforms provide many ways to view results.</p>
                  <a href='#' className='btn btn-primary mt-3 mt-md-4'>Enquire now</a>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='image-section'>
                <img src='image/technologes-3.png' className='img-fluid w-100'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-Features'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='product-item-wrap'>
                <div className='text-card'>
                  <h2 className='section-heading desktop-view'>Features</h2>
                  <div className='d-flex align-items-start features-items'>
                    <img src='image/features-1.svg' alt='' className='img-fluid' />
                    <p className='paragarph'>Powered by two sensors and a large spot size, collecting large amounts of spectral data for measurement.</p>
                  </div>
                  <div className='d-flex align-items-start features-items'>
                    <img src='image/features-2.svg' alt='' className='img-fluid' />
                    <p className='paragarph'>Cloud-connected software for both iOS and Android provides easy testing on both smartphone and tablet.</p>
                  </div>
                  <div className='d-flex align-items-start features-items'>
                    <img src='image/features-3.svg' alt='' className='img-fluid' />
                    <p className='paragarph'>Handheld and lightweight, convenient to use anywhere grain needs to be measured; from the harvester to the silo.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='image-section'>
              <h2 className='section-heading mobile-view'>Features</h2>
                <img src='image/features-img.png' className='img-fluid w-100'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-award'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-7'>
              <div className='customers-wrap'>
                <h2 className='technologes-heading'>Good Design Awards</h2>
                <p className='paragarph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='design-award'>
                <img src='image/good-design.png' className='img-fluid w-100'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='slider-team'>
        <div className='container'>
          <div className='row'>
          <div className='col-md-12'>
              <h2 className='section-heading'>Our Team </h2>
            </div>
            <div className='col-md-12'>
              <Carousel responsive={responsive}>
                <div>
                  <div className='slider-card'>
                      <img src='image/technology1.png' className='img-fluid w-100'></img>
                      <div className='text-slider'>
                        <h5>Dr. Antony Martin </h5>
                        <p className='paragarph'>CEO & Co-founder</p>
                      </div>
                  </div>
                </div>
                <div>
                  <div className='slider-card'>
                      <img src='image/technology1.png' className='img-fluid w-100'></img>
                      <div className='text-slider'>
                        <h5>Dr. Jamie Flynn</h5>
                        <p className='paragarph'>CEO & Co-founder</p>
                      </div>
                  </div>
                </div>
                <div>
                  <div className='slider-card'>
                      <img src='image/technology1.png' className='img-fluid w-100'></img>
                      <div className='text-slider'>
                        <h5>Dr. William Palmer</h5>
                        <p className='paragarph'>CEO & Co-founder</p>
                      </div>
                  </div>
                </div>
                <div>
                  <div className='slider-card'>
                      <img src='image/technology1.png' className='img-fluid w-100'></img>
                      <div className='text-slider'>
                        <h5>Dr. Antony Martin </h5>
                        <p className='paragarph'>CEO & Co-founder</p>
                      </div>
                  </div>
                </div>
                <div>
                  <div className='slider-card'>
                      <img src='image/technology1.png' className='img-fluid w-100'></img>
                      <div className='text-slider'>
                        <h5>Dr. Antony Martin </h5>
                        <p className='paragarph'>CEO & Co-founder</p>
                      </div>
                  </div>
                </div>
                <div>
                  <div className='slider-card'>
                      <img src='image/technology1.png' className='img-fluid w-100'></img>
                      <div className='text-slider'>
                        <h5>Dr. Antony Martin </h5>
                        <p className='paragarph'>CEO & Co-founder</p>
                      </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
