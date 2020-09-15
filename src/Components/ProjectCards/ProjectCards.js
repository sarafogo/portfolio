import React, { useState } from 'react';
import './projectCards.css';
import {
  CardText, CardBody, CardTitle, Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';


const ProjectCards = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <div className='card-div'>
      <div className='card'>
        <img top className='cardImg' src={props.cardImg} alt={props.cardAlt} />
        <CardBody>
          <CardTitle><b>{props.cardTitle}</b></CardTitle>

          <CardText>{props.cardText1}</CardText>
          <CardText><b>Foram utilizados:</b> {props.cardText2}</CardText>
          <div className='card-btn'>
            <Button onClick={toggle}>Veja mais</Button>
          </div>
        </CardBody>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{props.modalTitle}</ModalHeader>
          <ModalBody>{props.modalBody1}</ModalBody>
          <ModalBody>{props.modalBody2}</ModalBody>
          <ModalBody>{props.modalBody3}</ModalBody>
          <ModalBody>{props.modalBody4}</ModalBody>
          <ModalFooter>
            <Button>Ver site</Button>
            <Button onClick={toggle}>Fechar</Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};


export default ProjectCards;