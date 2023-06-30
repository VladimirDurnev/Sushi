import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// interface IDemoCarousel {
//     imgUrl: string[];
// }

const DemoCarousel: React.FC = ({}) => {
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
            <div>
                <img
                    // eslint-disable-next-line max-len
                    src="https://yobi.efood.dev/images/qJSUgCWUV4ejE8jKO9nIgTL3-phjOUCePCUBM09pKPY/pr:advert_desktop/ZjJnbmNpMDUwaXRi/Z3o0aDE4b3VwY2Fz/eWhzaw"
                    alt="new"
                />
            </div>
            <div>
                <img
                    // eslint-disable-next-line max-len
                    src="https://yobi.efood.dev/images/pLlUDDpQsbYmeHCiuCFwxejx82Cuj0JbQOiiAPUrIRY/pr:advert_desktop/ZXIxd2podG1yZDQ5/OXdycDBjY3pkOXll/amFmMg"
                    alt="new"
                />
            </div>
        </Carousel>
    );
};

export default DemoCarousel;
