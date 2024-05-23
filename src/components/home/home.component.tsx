import home from "./home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";

import backImg1 from "../../img/background-img/back-img1.png";
import backImg2 from "../../img/background-img/back-img2.png";
import backImg3 from "../../img/background-img/back-img3.png";
import backImg4 from "../../img/background-img/back-img4.png";
import backImg5 from "../../img/background-img/back-img5.png";

// import videoMain from "../../img/video1.MP4";

const Home = () => {
  //   const container = document.getElementById("homeSliderWrap");
  //   let scrollAmount = 0;
  //   let scrollStep = 1; // шаг прокрутки

  //   function autoScroll() {
  //     scrollAmount += scrollStep;
  //     container.scrollLeft = scrollAmount;

  //     // Если дошли до конца, возвращаемся в начало
  //     if (scrollAmount >= container.scrollWidth - container.clientWidth) {
  //       scrollAmount = 0;
  //     }

  //     requestAnimationFrame(autoScroll); // рекурсивный вызов для плавной прокрутки
  //   }

  //   autoScroll();
  return (
    <section className={home.home}>
      <div className="container">
        <div className={home.homeWrap}>
          <h1 className={home.homeTitle}>Manage everything in one place</h1>
          <p className={home.homeDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore
            et dolore.
          </p>
          <div className={home.homeBackgroundImgWrap}>
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
          <div className={home.homeSliderWrap} id="homeSliderWrap">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
