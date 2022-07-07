import React from 'react';
import '../App';

const Home = () => {
  return (
    <div class="page-wrapper">
      <section className='main-section'>
        <div id="carouselExampleControls1" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='slider-item'>
                <div className='items-slider-wrap'>
                  <div className='row align-items-center'>
                    <div className='col-md-7'>
                      <div className='text-slider'>
                        <h1>Test what you want, when you want.</h1>
                        <p>Hone unlocks chemical analysis, utilising the latest developments in spectroscopy and machine learning.</p>
                        <a className="btn btn-primary mt-4" href="#">Our Products  <i class="fa-solid fa-arrow-right-long"></i></a>
                      </div>
                    </div>
                    <div className='col-md-5 img-slider'>
                      <img src='./image/scratch-banner.png' alt='' className='img-fluid w-100' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className='slider-item'>
                <div className='items-slider-wrap'>
                  <div className='row align-items-center'>
                    <div className='col-md-7'>
                      <div className='text-slider'>
                        <h1>Test what you want, when you want.</h1>
                        <p>Hone unlocks chemical analysis, utilising the latest developments in spectroscopy and machine learning.</p>
                        <a className="btn btn-primary mt-4" href="#">Our Products <i class="fa-solid fa-arrow-right-long"></i></a>
                      </div>
                    </div>
                    <div className='col-md-5'>
                      <img src='./image/Banner2.png' alt='' className='img-fluid' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item" style={{backgroundImage:"url(./image/home-banner3.png)"}}>
              <div className='slider-item'>
                <div className='items-slider-wrap'>
                  <div className='row align-items-center'>
                    <div className='col-md-7'>
                      <div className='text-slider'>
                        <h1>Test what you want, when you want.</h1>
                        <p>Hone unlocks chemical analysis, utilising the latest developments in spectroscopy and machine learning.</p>
                        <a className="btn btn-primary mt-4" href="#">Our Products <i class="fa-solid fa-arrow-right-long"></i></a>
                      </div>
                    </div>
                    <div className='col-md-5'>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section className='our-technology'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='section-heading'>Our Technology</h2>
            </div>
            <div className='col-md-4'>
              <div className='card text-center'>
                <img src='./image/technology1.png' className='img-fluid w-100'></img>
                <div className='text-card'>
                  <p className='sub-heading-text'>HONE LAB RED</p>
                  <h3>for Grain Testing</h3>
                  <p className='paragarph'>A rugged and versatile device for on-farm measurement.</p>
                  <a href='#' className='learn-more'>Learn More</a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card text-center'>
                <img src='image/technology2.png' className='img-fluid w-100'></img>
                <div className='text-card'>
                  <p className='sub-heading-text'>HONE LAB BLACK</p>
                  <h3>for Wine Testing</h3>
                  <p className='paragarph'>A rugged and versatile device for on-farm measurement.</p>
                  <a href='#' className='learn-more'>Learn More</a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card text-center'>
                <img src='image/technology3.png' className='img-fluid w-100'></img>
                <div className='text-card'>
                  <p className='sub-heading-text'>HONE carbon</p>
                  <h3>for Soil Testing</h3>
                  <p className='paragarph'>Delivering comprehensive analysis within minutes.</p>
                  <a href='#' className='learn-more'>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-products py-3 py-md-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='image-section'>
                <img src='image/hone-lab-red.png' className='img-fluid w-100'></img>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='product-item-wrap'>
                <div className='text-card'>
                  <p className='sub-heading-text'>our PRODUCTS</p>
                  <h2 className='section-heading'>hone lab red</h2>
                  <p className='paragarph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <ul>
                    <li>Rapid Results for Quick Decision Making</li>
                    <li>Handheld and Rugged for On-Farm Use</li>
                    <li>Easy to Use and Intuitive</li>
                  </ul>
                  <a href='#' className='btn btn-primary'>Stay Updated</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-products py-3 py-md-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='product-item-wrap'>
                <div className='text-card'>
                  <p className='sub-heading-text'>our PRODUCTS</p>
                  <h2 className='section-heading'>hone Carbon</h2>
                  <p className='paragarph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae explicabo.</p>
                  <ul>
                    <li>Rapid Results for Quick Decision Making</li>
                    <li>Handheld and Rugged for On-Farm Use</li>
                    <li>Easy to Use and Intuitive</li>
                  </ul>
                  <a href='#' className='btn btn-primary'>Stay Updated</a>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='image-section'>
                <img src='image/hone-carbon.png' className='img-fluid w-100'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-products py-3 py-md-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='image-section'>
                <img src='image/hone-lab-black.png' className='img-fluid w-100'></img>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='product-item-wrap'>
                <div className='text-card'>
                  <p className='sub-heading-text'>our PRODUCTS</p>
                  <h2 className='section-heading'>hone lab Black</h2>
                  <p className='paragarph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <ul>
                    <li>Rapid Results for Quick Decision Making</li>
                    <li>Handheld and Rugged for On-Farm Use</li>
                    <li>Easy to Use and Intuitive</li>
                  </ul>
                  <a href='#' className='btn btn-primary'>Stay Updated</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-products pt-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='product-item-wrap'>
                <div className='text-card'>
                  <p className='sub-heading-text'>read the blog</p>
                  <h2 className='section-heading'>Research and Design</h2>
                  <p className='paragarph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <a href='#' className='btn btn-primary mt-5'>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='blog-section'>
                <div className='blog-wrap img-first'>
                  <div className='blog-posts'>
                    <img src='image/blog-1.png' className='img-fluid w-100'></img>
                    <div className='blog-card text-center'>
                      <p className='sub-heading-text'>blog</p>
                      <h2 className='heading-text'>Example blog title showing on hover</h2>
                      <a href='#' className='btn btn-primary mt-3'>Read More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                  </div>
                </div>
                <div className='blog-wrap img-second'>
                  <div className='blog-posts'>
                    <img src='image/blog-2.png' className='img-fluid w-100'></img>
                    <div className='blog-card text-center'>
                      <p className='sub-heading-text'>blog</p>
                      <h2 className='heading-text'>Example blog title showing on hover</h2>
                      <a href='#' className='btn btn-primary mt-3'>Read More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-testimonils'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-7'>
              <div className='customers-wrap'>
                <h2 className='section-heading'>See what our customers have to say</h2>
                <p className='paragarph'>Join over x customers who are already using Hone products across the globe.</p>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='testimonils'>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block" src="image/testimonils.svg" alt="First slide" />
                      <div className='testimonils-card'>
                        <p className='paragarph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, dicta sunt explicabo.</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <img class="mr-4" src="image/testimonils-author.png" alt="First slide" />
                        <p className='paragarph m-0'>Customer name, grain corp</p>
                      </div>                     
                    </div>
                    <div class="carousel-item">
                      <img class="d-block" src="image/testimonils.svg" alt="First slide" />
                      <div className='testimonils-card'>
                        <p className='paragarph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, dicta sunt explicabo.</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <img class="mr-4" src="image/testimonils-author.png" alt="First slide" />
                        <p className='paragarph m-0'>Customer name, grain corp</p>
                      </div>                     
                    </div>
                    <div class="carousel-item">
                      <img class="d-block" src="image/testimonils.svg" alt="First slide" />
                      <div className='testimonils-card'>
                        <p className='paragarph'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, dicta sunt explicabo.</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <img class="mr-4" src="image/testimonils-author.png" alt="First slide" />
                        <p className='paragarph m-0'>Customer name, grain corp</p>
                      </div>                     
                    </div>
                  </div>

                  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='img-testimonials d-flex justify-content-center flex-wrap align-items-center'>
                <img src='image/logo1.svg' className='img-fluid' />
                <img src='image/logo2.svg' className='img-fluid' />
                <img src='image/logo3.svg' className='img-fluid' />
                <img src='image/logo4.svg' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
