import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
interface SlideData {
  image: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const slidesData: SlideData[] = [
  {
    image: "./1.png",
    title: "Summer Collection",
    description: "Trendy and Comfortable Wear",
    backgroundColor: "bg-blue-50",
  },
  {
    image: "./2.png",
    title: "Autumn Essentials",
    description: "Stylish Layers for Cool Days",
    backgroundColor: "bg-orange-50",
  },
  {
    image: "./3.png",
    title: "Winter Warmth",
    description: "Cozy Outfits for Chilly Nights",
    backgroundColor: "bg-gray-100",
  },
];

export default function LandSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    arrows: false,
  };
  return (

    <div className="slider-container">
      <Slider {...settings}>
        {
          slidesData.map((slide, index) => (
            <div key={index} className="slider-item h-[60dvh]">
              <div className={`w-full h-full ${slide.backgroundColor}`}>
                <div className="flex flex-col md:flex-row justify-center items-center h-full w-full md:w-[80%] p-10 mx-auto gap-10">
                  {/* Text Section */}
                  <div className="text-center md:text-left space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl duration-150 font-bold text-gray-900 dark:text-white">
                      {slide.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {slide.description}
                    </p>
                    <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Shop Now
                    </button>
                  </div>

                  {/* Image Section */}
                  <div className="flex justify-center items-center w-full md:w-1/2">
                    <img
                      className="w-[300px] lg:w-[600px] object-cover"
                      src={slide.image}
                      alt={`${slide.title} - ${slide.description}`}
                      width="800"
                      height="600"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>
          ))
        }
      </Slider>
    </div>
  );
}
