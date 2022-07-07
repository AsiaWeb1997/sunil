import React from 'react';

const Footer = () => {
    return (
      <footer>
          <div className='container'>
              <div className='row copyright'>
                  <div className='col-md-4 col-lg-4'>                      
                      <p className='mb-0'>© 2022 Hone Pty. Ltd.</p>
                      <p className='mb-3'>ABN: 638 541 483</p>
                      <p className='mb-0'>Suite 65b, Level 2</p>
                      <p className='mb-3'>113-145 Hunter St, Newcastle NSW 2300</p>
                      <a href='tel:+61 2 4036 3664'>+61 2 4036 3664</a>
                      <div className='social-icons'>
                        <a href='#' target="_blank">
                            <i class="fa-brands fa-facebook-square"></i> 
                        </a> 
                        <a href='#' target="_blank">
                            <i class="fa-brands fa-twitter-square"></i>
                        </a> 
                        <a href='#' target="_blank">
                            <i class="fa-brands fa-instagram-square"></i>
                        </a> 
                        <a href='#' target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a> 
                      </div>
                  </div>
                  <div  className='col-md-4 col-lg-4 mt-md-0 mt-3'>
                    <h3>Navigation</h3>
                    <ul>
                        <li>
                            <a href='#' className='mr-3'>Terms</a>
                        </li>
                        <li>
                            <a href='#' className='mr-3'>Privacy</a>
                        </li>
                        <li>
                            <a href='#' className='mr-3'>Contact Us</a>
                        </li>
                        <li>
                            <a href='#' className='mr-3'>Help and Support</a>
                        </li>
                    </ul>
                  </div>
                  <div className='col-md-4 col-lg-4 mt-lg-0 mt-3'>     
                    <h3>Keep in touch</h3> 
                    <form className='form-subscribe'>
                        <input type='email' className='input-form' placeholder='Enter your email address'/>
                        <button className='btn btn-primary'>Subscribe</button>
                    </form>                
                  </div>
              </div>
          </div>
      </footer>
    );
}

export default Footer;
