import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaGoogle, FaStar } from "react-icons/fa";
import "./Slider.css";

const reviews = [
  {
    name: "Oliver Stent",
    text: "My Business have set up a new website for my business. They have been great to deal with and I’m very happy...",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Suzee Wolstenholme",
    text: "We chose Grow My Business to do our website as we loved how theirs looked. Their work was showcased in their own...",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Kareen Holland",
    text: "Great services quick and efficient. Get solutions quickly.",
    img: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Britta Christiansen",
    text: "Thanks Iona for your patience, your brilliance and your gentle nudges, all of which helped transform my website into...",
    img: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Andrew",
    text: "The team at GMB were efficient. Communication was great and professional. They made the process smooth...",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];

const Slider = () => {
  return (
    <section className="slider-section">
      <h2 className="slider-heading">
        <span className="purple">People</span> says <span className="white">about</span> work
      </h2>
      <button className="review-btn">See all our reviews</button>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="slider-container"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <div className="review-top">
                <img src={review.img} alt={review.name} className="review-img" />
                <h4>{review.name}</h4>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="review-text">{review.text}</p>
              <div className="google-section">
                <FaGoogle className="google-icon" />
                <a href="https://google.com" target="_blank" rel="noreferrer">
                  Posted on Google
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
