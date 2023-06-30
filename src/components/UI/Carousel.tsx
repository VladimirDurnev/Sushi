import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useAppSelector } from '../../hooks';

const DemoCarousel: React.FC = () => {
    const { promotion } = useAppSelector((state) => state.SushiSlice);
    return (
        <Carousel
            showThumbs={false}
            emulateTouch={true}
            infiniteLoop={true}
            selectedItem={0}
            useKeyboardArrows={true}
            swipeScrollTolerance={50}
            showStatus={false}
        >
            {promotion.map((item) => (
                <div>
                    <img src={item} alt="new" />
                </div>
            ))}
        </Carousel>
    );
};

export default DemoCarousel;
