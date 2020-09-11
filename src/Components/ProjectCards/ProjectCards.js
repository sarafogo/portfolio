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
          <CardTitle>{props.cardTitle}</CardTitle>

          <CardText>{props.cardText}</CardText>
          <div>
            <Button onClick={toggle}>Veja mais</Button>
          </div>
        </CardBody>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>{props.modalTitle}</ModalHeader>
          <ModalBody>{props.modalBody}</ModalBody>
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