import { faBootstrap, faCss3, faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBook, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'reactstrap';
import './skills.css';

const Skills = () => {
    return (
        <div className='skill-main-div'>

        <div className='about-div'>
            <h3>Sobre</h3>
            <p className='about-paragraph'>
            Adoro ler (preferência por aventura/fantasia e mistério), fã de carteirinha de Stephen King, gamer, dançarina nas horas vagas, crítica cenematográfica sem certificado e apaixonada por gatos. 
            </p>
            <p>
            Tenho experiência de trabalho com artes (teatro, dança, literatura), atendimento ao cliente e vendas. Sou muita grata por todas as áreas que já passei, aprendi muito com todas e me considero uma profissinal de muitas qualidades.
            </p>
            <p>
            Hoje me vejo em TI, e cada vez mais apaixonada pela área, pelas suas possibilidades, o alcance que tem ganho, a capacidade de mudar a vida das pessoas e até pelas dificudades e desafios.
            </p>
            
        </div>
        <div className='habilities-div'>
            <h3>Habilidades</h3>
            <Row className='habilities-row'>
                <Col className='skills-col' >
                <FontAwesomeIcon icon={faHtml5} />
                <p>HTML</p>
                </Col>
                <Col className='skills-col'>
                <FontAwesomeIcon icon={faCss3Alt} />
                <p>CSS</p>
                </Col>
                <Col className='skills-col'> 
                <FontAwesomeIcon icon={faJsSquare} />
                <p>JavaScript</p>
                </Col>
            </Row>
            <Row>
                <Col className='skills-col'>
                    <FontAwesomeIcon icon={faGitAlt} />
                    <p>Git</p>
                </Col>
                <Col className='skills-col'> 
                    <FontAwesomeIcon icon={faBootstrap} />
                    <p>Bootstrap</p>
                </Col>
                <Col className='skills-col'>
                    <FontAwesomeIcon icon={faBook} />
                    <p>JQuery</p>
                </Col>
            </Row>
            <Row>
                <Col className='skills-col'>
                    <FontAwesomeIcon icon={faReact} />
                    <p>React</p>
                </Col>
                <Col className='skills-col'>
                    <FontAwesomeIcon icon={faReact} />
                    <p>Reactstrap</p>
                </Col>
                <Col className='skills-col'>
                    <FontAwesomeIcon icon={faListAlt} />
                    <p>Scrum</p>
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default Skills;