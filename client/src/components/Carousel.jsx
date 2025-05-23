
import { Carousel } from 'react-bootstrap';
import banner2 from './../images/Carousel-image2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselPage = () => {
  return (
    <div className="m-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.insurancedekho.com/pwa/img/nfo/lic-desktop-banner.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
