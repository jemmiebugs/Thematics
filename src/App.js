import React from 'react';
import logo from './logo.svg';


function App() {
  return (
    <React.Fragment>
      <header id="header">
        <div className="container">

          <div className="logo float-left">
              <a href="index.html"><img src="assets/img/trlogo.png" alt="logo" className="img-fluid"/></a>
          </div>

          <nav className="nav-menu float-right d-none d-lg-block">
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  {/* <!-- <a href="index.html"><img src="assets/img/trlogo.png" alt="" className="img-fluid"></a> --> */}
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Our Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </nav> 
          </nav>
        </div>
      </header>


      <section id="hero">
        
        <div className="hero-container"> 
          
          <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">

              <div className="carousel-item active" style="{{ background-image: url('assets/img/slide/slide 1.jpg'); }}">
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">WE ARE PASSIONATE <br/>ABOUT THE<span style="color: coral;"> PEOPLE</span></h2>
                    <p className="animate__animated animate__fadeInUp" style="font-size: larger;">Creating an exceptional experience for every nigerian <br/> enjoy and undertand the pupose of what we do.</p>
                      <div className="social-links float-left">
                      <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                      <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                      <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                      <a href="#" className="skype"><i className="icofont-skype"></i></a>
                      <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                    </div>
                  
                    <div className="copyright" style="align-items: center;">
                    &copy; Copyright <strong><span>Thematic Resources limited</span></strong>. All Rights Reserved
                  </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" style="{{ background-image: url('assets/img/slide/slide 2.jpg'); }}">
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">WE ARE PASSIONATE <br/>ABOUT THE<span style="color: coral;"> SOCIETY</span></h2>
                    <p className="animate__animated animate__fadeInUp" style="font-size: larger;">Weather we are building anything we are creating <br/>
                      something that would empower the society for greater change..</p>
                    <div className="social-links float-left">
                      <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                      <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                      <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                      <a href="#" className="skype"><i className="icofont-skype"></i></a>
                      <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                    </div>
                  
                    <div className="copyright" style="align-items: center;">
                    &copy; Copyright <strong><span>Thematic Resources limited</span></strong>. All Rights Reserved
                  </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item" style="{{ background-image: url('assets/img/slide/slide 3.jpg'); }}">
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">WE ARE PASSIONATE <br/>ABOUT THE<span style="color: coral;"> WHAT WE DO</span></h2>
                    <p className="animate__animated animate__fadeInUp" style="font-size: larger;">Delivering oil and gas to every household in nigeria <br/>is possible and thats why creating a value with what we do is very <br/>crucial to the goal we want to acheive.</p>
                    </div>
                </div>
                  </div>
                </div>
              </div>

            </div>

            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>

          {/* </div>
        </div>
        </div> */}
        
      </section>
        
          <div className="copyright" style="background-color: rgb(39, 27, 27); display:flex; align-items:center; height:50px; color: white; justify-content:center;">
            {/* <div id="social-links " style="color: whitesmoke; padding-left: 10px;">
              <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
              <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
              <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
              <a href="#" className="skype"><i className="icofont-skype"></i></a>
              <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
            </div> */}
            {/* <div> */}
              &copy; Copyright<span >Thematic Resources limited</span>. All Rights Reserved
            {/* </div> */}

          </div>
    </React.Fragment>
  );
}

export default App;
