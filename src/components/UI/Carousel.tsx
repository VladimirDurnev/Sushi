import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useAppSelector } from '../../hooks';

const DemoCarousel: React.FC = () => {
    const { promotion } = useAppSelector((state) => state.SushiSlice);
    return (
        <Carousel
            showThumbs={true}
            emulateTouch={true}
            infiniteLoop={true}
            selectedItem={0}
            useKeyboardArrows={true}
            swipeScrollTolerance={50}
            showStatus={false}
            showArrows={false}
        >
            {promotion.map((item) => (
                <div key={item}>
                    <img
                        style={{ borderRadius: '25px' }}
                        src={item}
                        alt="item"
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default DemoCarousel;
