import React from 'react';
import './home.css';
import Carousel from '../../Components/Carousel/Carousel';

function Home() {
    return (
        <div className='main-div'>
            <div className='carousel-div'>
                <Carousel />
            </div>
            <div>
                <p>Sara Fogo</p>
            </div>

        </div>
    )
}

export default Home;