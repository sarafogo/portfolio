import React from 'react';
import { Col, Row } from 'reactstrap';
import ProjectCards from '../../Components/ProjectCards/ProjectCards';
import Jocelia from '../../Images/Jocelia.PNG';
import ListaDeTarefas from '../../Images/todo.PNG'

function Projects() {

    return (
        <div>
            <Row >
                <Col>
                    <ProjectCards 
                    cardImg={Jocelia} 
                    cardTitle='M de Maravilhosas' cardText='Projeto bla bla' 
                    modalTitle='M de Maravilhosas'
                    modalBody='projeto da segunda'
                    />
                </Col>
                <Col>
                    <ProjectCards 
                    cardImg={ListaDeTarefas} 
                    cardTitle='Lista de Tarefas' cardText='Projeto bla bla' 
                    modalTitle='Lista de Tarefas'
                    modalBody='projeto da segunda'  />
                </Col>
                <Col>
                    <ProjectCards 
                    cardImg={ListaDeTarefas} 
                    cardTitle='Lista de Tarefas' cardText='Projeto bla bla' 
                    modalTitle='Lista de Tarefas'
                    modalBody='projeto da segunda'  />
                </Col>
                
            </Row>
        </div>
    )
}

export default Projects;