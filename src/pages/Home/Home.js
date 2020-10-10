import React from 'react';
import './home.css';
import Carousel from '../../Components/Carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <div className='main-div'>
            <div className='carousel-div'>
                <Carousel />
            </div>
            <div className='info-div'>
                <h1>Sara Fogo</h1>
                <h4 className='h4-class'>Desenvolvedora Front-end</h4>
                <div className='p-div'>
                    <div className='col'>
                        <FontAwesomeIcon className='icons' icon={faGithubAlt} />
                        <p>github.com/sarafogo</p>
                    </div>
                    <div className='col'>
                        <FontAwesomeIcon className='icons' icon={faLinkedinIn} />
                        <p>linkedIn.com/sara-fogo</p>
                    </div>
                    <div className='col'>
                        <FontAwesomeIcon className='icons' icon={faEnvelope} />
                        <p>sarafogo.ss@gmail.com</p>
                    </div>
                    <div className='col'>
                        <FontAwesomeIcon className='icons' icon={faMobileAlt} />
                        <p>(81) 99518-9720</p>
                    </div>
                    


                </div>
            </div>

        </div>
    )
}

export default Home;