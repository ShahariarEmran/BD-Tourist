import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Banner/Banner.css'
import banner1 from '../images/coxs-1.jpg';
import banner2 from '../images/kuakata-1.jpg';
import banner3 from '../images/sajek-1.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
            <Carousel.Item style={{height:"100vh"}}>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="text">Topmost Tourist Attractions to Visit in Cox’s Bazar</h1>
                    <p className="text-p">Feeling monotonous of your daily routine? Want to get rid of this monotony? Well, all that you need is a break and in the meantime you can visit world’s longest sea beach Cox’s Bazar.</p>
                </Carousel.Caption>
            </Carousel.Item >
            <Carousel.Item style={{height:"100vh"}}>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="text">Discovering the Land of Hills and Clouds, Sajek Valley</h1>
                <p className="text-p">No word is enough to define the beauty of Sajek Valley. The deep forest, grassland, hilly areas make it a wonderful tourist spot and one of the best choices among the traveler, adventure lover and digital nomads.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:"100vh"}}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className="text">Kuakata Beach, the Daughter of Sea</h1>
                    <p className="text-p">You can enjoy the full view of the amazing sunrise and sunset from the same sandy beach in the Bay of Bengal.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;