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
    image: "/1.avif",
    title: "Summer Collection",
    description: "Trendy and Comfortable Wear",
    backgroundColor: "bg-blue-50",
  },
  {
    image: "/2.avif",
    title: "Autumn Essentials",
    description: "Stylish Layers for Cool Days",
    backgroundColor: "bg-orange-50",
  },
  {
    image: "/3.avif",
    title: "Winter Warmth",
    description: "Cozy Outfits for Chilly Nights",
    backgroundColor: "bg-gray-100",
  },
];

export default function LandSlider() {
  const settings = {
    dots: true, // Show dots for better navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Increased for better UX
    lazyLoad: "ondemand" as const,
    arrows: false,
  };

  return (
    <div className="slider-container" role="region" aria-label="Promotional Slider">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="slider-item h-[60dvh]" aria-live="polite">
            <div className={`w-full h-full ${slide.backgroundColor}`}>
              <div className="flex flex-col md:flex-row justify-center items-center h-full w-full md:w-[80%] p-10 mx-auto gap-10">

                {/* Text Section */}
                <div className="text-center md:text-left space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {slide.description}
                  </p>
                  <button
                    className="bg-sky-700 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label={`Shop Now for ${slide.title}`}
                  >
                    Shop Now
                  </button>
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center w-full md:w-1/2">
                  <img
                    src={slide.image}
                    alt={`${slide.title} - ${slide.description}`}
                    width="800"
                    height="600"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    className="w-auto h-auto max-w-full max-h-[50vh] object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
