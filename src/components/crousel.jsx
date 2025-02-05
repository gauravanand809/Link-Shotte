import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => {
  return (
    <div className="flex justify-center mt-6 px-4">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="w-full max-w-4xl mt-10 mx-4 rounded-xl shadow-xl"
      >
        <div>
          <img
            src="/banner1.png"
            alt="Slide 1"
            className="object-cover w-full h-64 md:h-80 md:w-70 lg:h-96 rounded-xl"
          />
        </div>
        <div>
          <img
            src="/banner2x.jpg"
            alt="Slide 2"
            className="object-cover w-full h-64 md:h-80 md:w-70 lg:h-96 rounded-xl"
          />
        </div>
        <div>
          <img
            src="/banner3x.jpg"
            alt="Slide 3"
            className="object-cover w-full h-64 md:h-80 md:w-70 lg:h-96 rounded-xl"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
