import React from 'react';
import './home.css';
import Carousel from '../../Components/Carousel/Carousel';
import github from '../../Images/github.svg';
import linkedin from '../../Images/linkedin.svg';
import email from '../../Images/email.svg';

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
                        <img className='icons' src={github} />
                        <p>github.com/sarafogo</p>
                    </div>
                    <div className='col'>
                        <img className='icons' src={linkedin} />
                        <p>linkedIn.com/sara-fogo</p>
                    </div>
                    <div className='col'>
                        <img className='icons' src={email} />
                        <p>sarafogo.ss@gmail.com</p>
                    </div>
                    {/* <Row className='row-content'>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row className='row-content'>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    <Row className='row-content'>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row> */}


                </div>
            </div>

        </div>
    )
}

export default Home;