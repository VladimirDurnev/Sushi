import React from 'react';
import Filter from '../components/Filter';
import ListItem from '../components/ListItem';
import DemoCarousel from '../components/UI/Carousel';
const Home = () => {
    return (
        <>
            <Filter></Filter>
            <DemoCarousel ></DemoCarousel>
            <ListItem></ListItem>
        </>
    );
};
export default Home;
