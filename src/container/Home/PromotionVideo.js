import React, {useEffect, useState} from 'react';
import styles from './Home.module.scss';

const PromotionVideo = (props) => {
  const [AllPromotionVideo, setAllPromotionVideo] = useState([]);

  useEffect(() => {
    getPromotionVideo();
  }, [props]);

  const getPromotionVideo = () => {
    // fetch(SITEURL.FULLBASE_API + "promotionalVideo", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    // })
    //   .then((resp) => resp.json())
    //   .then((respJson) => {
    //     if (respJson.status === true) {
    //       setAllPromotionVideo(respJson.video)
    //     }
    //   })
    //   .catch((err) => {
    //   });
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 15000,
  };

  return (
    <div className="wth-ans-outer-single-slide modile-screen-border ease-in-effect">
      <div className="screen ">
        <div className="head justify-content-end">
          {/*<img alt="" src={logo}/>*/}
        </div>
        <div className="wth-ans-inner-slider promotionVideoSlide">
          {/*<Slider {...settings}>*/}
          {/*  {AllPromotionVideo.map((item) => (*/}
          {/*    <div className="wth-ans-inner-single-slide">*/}
          {/*      <div className="sticky-user-name with-slide d-show active">*/}
          {/*        <div className="cont">*/}
          {/*          <span>{item.title}</span>*/}
          {/*          <h4>{item.author}</h4>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="img-vid">*/}
          {/*        <video playsInline autoPlay muted loop>*/}
          {/*          <source src={item.video} type="video/mp4"/>*/}
          {/*        </video>*/}
          {/*      </div>*/}
          {/*      <div className="cont">*/}
          {/*        <p>{item.question}</p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</Slider>*/}
        </div>
      </div>
    </div>
  );
};

export default PromotionVideo;
