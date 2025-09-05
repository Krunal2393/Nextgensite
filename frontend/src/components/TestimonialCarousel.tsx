"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "RECEIVED FROM",
    subtitle1: "GOVERNMENT SCHEMES",
    subtitle2: "SEED FUND",
    grant: "20,00,00 GRANT",
    name: "Rojit Parekh",
    role: "Director",
    img: "/testimonials/person1.png", // replace with your images
  },
  {
    id: 2,
    title: "RECEIVED FROM",
    subtitle1: "PRIVATE INVESTORS",
    subtitle2: "FUNDING ROUND A",
    grant: "15,00,00 GRANT",
    name: "Sneha Patel",
    role: "Co-Founder",
    img: "/testimonials/person2.png",
  },
  {
    id: 3,
    title: "RECEIVED FROM",
    subtitle1: "GOVT SCHEMES",
    subtitle2: "STARTUP INDIA",
    grant: "25,00,00 GRANT",
    name: "Vivek Shah",
    role: "CEO",
    img: "/testimonials/person3.png",
  },
  {
    id: 4,
    title: "RECEIVED FROM",
    subtitle1: "GOVT SCHEMES",
    subtitle2: "STARTUP INDIA",
    grant: "25,00,00 GRANT",
    name: "Vivek Shah",
    role: "CEO",
    img: "/testimonials/person4.png",
  },
];

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
  >
    <ChevronRight className="w-5 h-5" />
  </button>
);

export default function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full px-6 py-10">
      <h2 className="text-center text-[#05325F] text-2xl font-bold mb-8">
        Real experiences, real voices
      </h2>
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id} className="px-4">
            <div className="bg-gradient-to-b from-blue-100 to-blue-300 rounded-xl p-6 shadow-lg text-center">
              <h3 className="text-lg font-bold">{t.title}</h3>
              <p className="mt-2 font-semibold">{t.subtitle1}</p>
              <p className="font-semibold">{t.subtitle2}</p>
              <div className="mt-3 bg-blue-700 text-white px-4 py-2 rounded-md font-bold">
                {t.grant}
              </div>
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mt-4 border-4 border-white shadow-md"
              />
              <p className="mt-2 font-bold">{t.name}</p>
              <p className="text-sm text-gray-700">{t.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
