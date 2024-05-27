import home from "./home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import backImg1 from "../../img/background-img/back-img1.png";
import backImg2 from "../../img/background-img/back-img2.png";
import backImg3 from "../../img/background-img/back-img3.png";
import backImg4 from "../../img/background-img/back-img4.png";
import backImg5 from "../../img/background-img/back-img5.png";

import imgSlide1 from "../../img/slider/photo-output.png";
import imgSlide2 from "../../img/slider/photo-output (1).png";
import imgSlide3 from "../../img/slider/photo-output (2).png";
import imgSlide4 from "../../img/slider/photo-output (3).png";
import imgSlide5 from "../../img/slider/photo-output (4).png";

import phone from "../../img/slider/iphone1.png";

const Home = () => {
  function SimpleSlider() {
    const settings = {
      swipe: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      pauseOnHover: false,
    };
    return (
      <div className={home.homeSliderWrap}>
        <img src={phone} alt="phone" />
        <Slider {...settings}>
          <div className={home.videoWrap}>
            <video className={home.video} autoPlay muted loop>
              <source
                src="https://youtu.be/1nTmxID76rk?si=q5CvJ5j12Jp3Un0v"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={home.videoWrap}>
            <video className={home.video} autoPlay muted loop>
              {/* <source src={img2} type="video/mp4" /> */}
            </video> 
          </div>
          <div className={home.videoWrap}>
            <video className={home.video} autoPlay muted loop>
              {/* <source src={img3} type="video/mp4" /> */}
            </video>
          </div>
          <div className={home.videoWrap}>
            <video className={home.video} autoPlay muted loop>
              {/* <source src={img4} type="video/mp4" /> */}
            </video>
          </div>
          <div className={home.videoWrap}>
            <video className={home.video} autoPlay muted loop>
              {/* <source src={img1} type="video/mp4" /> */}
            </video>
          </div>
          <div className={home.videoWrap}>
            <video className={home.video} autoPlay muted loop>
              {/* <source src={img2} type="video/mp4" /> */}
            </video>
          </div>
        </Slider>
      </div>
    );
  }

  return (
    <section className={home.home} id="home-section">
      <div className="container">
        <div className={home.homeWrap}>
          <h1 className={home.homeTitle}>Manage everything in one place</h1>
          <p className={home.homeDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore
            et dolore.
          </p>
          <div className={home.homeBackgroundImgWrap}>
            <div className={home.phoneContainer}>
              <div className={home.iphone}>
                <div className={home.screen}>
                  <div className={home.notch}>
                    <div className={home.camera}></div>
                    <div className={home.speaker}></div>
                  </div>
                </div>
                <div className={home.buttonVolumeUp}></div>
                <div className={home.buttonVolumeDown}></div>
                <div className={home.buttonPower}></div>
              </div>
            </div>
            <img
              className={home.backImg1}
              src={backImg1}
              alt="background image"
            />
          </div>
          <div className={home.homeBackgroundImgWrap}>
            <img
              className={home.backImg4}
              src={backImg3}
              alt="background image"
            />
          </div>
          <div className={home.homeBackgroundImgWrap}>
            <img
              className={home.backImg3}
              src={backImg2}
              alt="background image"
            />
          </div>
          <div className={home.homeBackgroundImgWrap}>
            <img
              className={home.backImg2}
              src={backImg4}
              alt="background image"
            />
          </div>
          <div className={home.homeBackgroundImgWrap}>
            <img
              className={home.backImg5}
              src={backImg5}
              alt="background image"
            />
          </div>
          {SimpleSlider()}
        </div>
      </div>
    </section>
  );
};

export default Home;
