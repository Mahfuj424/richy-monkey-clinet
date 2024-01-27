import React from 'react';
import Banner from './Banner';
import SpotLight from './SpotLight';
import Witcher from './Witcher';
import TopGame from './TopGame';
import ThronesImage from './ThronesImage';
import TopSelling from './TopSelling';
import HighLight from './HighLight';
import LatestNews from './LatestNews';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <SpotLight/>
            <Witcher/>
            <TopGame/>
            <ThronesImage/>
            <TopSelling/>
            <LatestNews/>
            <HighLight/>
        </div>
    );
};

export default HomePage;