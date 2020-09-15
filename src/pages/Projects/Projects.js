import React from 'react';
import { Col, Row } from 'reactstrap';
import ProjectCards from '../../Components/ProjectCards/ProjectCards';
import Jocelia from '../../Images/Jocelia.PNG';
import ListaDeTarefas from '../../Images/todo.PNG';
import Oya from '../../Images/oya.png';
import Venus from '../../Images/conexao-venus.png';
import TodoAPI from '../../Images/listaDeTarefas.png';

function Projects() {

    return (
        <div>
            <Row >
                <Col>
                    <ProjectCards
                        cardImg={Jocelia}
                        cardTitle='M de Maravilhosas'
                        cardText1='Projeto feito na quarta semana de curso da {reprograma}.'
                        cardText2='HTML, CSS e Bootstrap'
                        modalTitle='M de Maravilhosas'
                        modalBody1='Nesse projeto cada aluna escolheu uma mulher que lhe inspira e criou uma página para essa mulher, com fotos, links e textos.'
                        modalBody2='O site foi criado de forma responsiva, usando somente HTML e CSS.'
                        modalBody3='Foi usado o Git/Github para junção dos projetos.'
                        modalBody4='A minha escolha foi Jocelia Fonseca, poetriz, militante negra, feminista, bacharel em letras e direito. Também conhecida como minha mãe (rs) '
                        
                    />
                </Col>
                <Col>
                    <ProjectCards
                        cardImg={ListaDeTarefas}
                        cardTitle='Lista de Tarefas'
                        cardText1='Projeto feito na oitava semana de curso da {reprograma}.'
                        cardText2='HTML, CSS e JavaScript'
                        modalTitle='Lista de Tarefas'
                        modalBody1='O projeto foi feito em dupla. Em cinco dias tivemos que entregar um lista de tarefas utilizando somente JavaScript, não foi permetido usar jQuery ou bibliotecas/framework.'
                        modalBody2='Os requisitos eram:  
                        Adicionar itens na lista;
                        Marcar itens concluidos individualmente;
                        Excluir itens individualmente;
                        Validar campo para não aceitar itens vazios;
                        Limpar campo de texto depois da tarefa ser incluida na lista.'
                        modalBody3='Opção extra:  
                        Marcar todos os itens como feito;
                        Excluir todos os itens da lista;
                        Mudar o CSS que já foi dado pronto.'
                    />
                </Col>
                <Col>
                    <ProjectCards
                        cardImg={Oya}
                        cardTitle='Oya Produções Artsticas' 
                        cardText1='Projeto feito na décima primera semana de curso da {reprograma}.'
                        cardText2=' HTML, CSS e Bootstrap. Metodologia ágeis.'
                        modalTitle='Oya Produções Artsticas'
                        modalBody1='Durante esse projeto tinhamos que fazer um site para uma cliente real. Utilizamos o método Scrum. ' 
                        modalBody2='Junto com quatro colegas, desenvolvi o site para uma produtora de São Paulo, a Oya Produções Artísticas. Para construí-lo, usamos HTML, Bootstrap, CSS e o deixamos com layout responsivo.'
                        modalBody3='Tivemos alguns problemas incialmente, pois o layout desenvolvido pela agência havia sido feito baseado em uma outra produtora com nome parecido. Contornamos o incidente de forma satisfatória para a cliente.'
                        />
                </Col>
            </Row>
            <Row>
                <Col>
                <ProjectCards
                    cardImg={Venus}
                    cardTitle='Conexão Vênus'
                    cardText1='Projeto final na vigésima semana de curso da {reprograma}.'
                    cardText2='React, reactstrap e CSS.'
                    modalTitle='Conexão Vênus'
                    modalBody1='Até então no curso não havia conhecido o reactstrap, mas foi muito divertido aprender mais essa funcionalidade durante a produção do projeto. '
                    modalBody2='Esse foi meu projeto de conclusão de curso, o tema era livre, e de preferência algo com impacto social. Minha escolha foi colocar em andamento um antigo projeto de fazer uma cartilha sobre os tipos de assédios/abusos. Pra iniciar comecei a falar sobre o assédio sexual. A ideia e continuar o site com a ajuda de outras duas amigas que tiveram interesse no mesmo tema, mas não são da área de TI. '
                />
                </Col>
                <Col>
                <ProjectCards 
                    cardImg={TodoAPI}
                    cardTitle='To Do List - API'
                    cardText1='Exercício de ReactJS utilizando API.'
                    cardText2='React, reactstrap, CSS, fake API REST.'
                    modalTitle='To Do List - API'
                    modalBody1='No teste foi solicitado que uma primeira página mostrasse todos os usuários da API e ao clicar no nome de um deles abrisse uma outra página mostrando sua lista de tarefas pré existente. '
                    modalBody2='Nessa segunda página teria que ser possível colocar novas tarefas, além de deleta-las, assim como as tarefas da API.'
                />
                </Col>
            </Row>
        </div>
    )
}

export default Projects;