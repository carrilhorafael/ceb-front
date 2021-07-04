import { Button, Modal } from 'react-bootstrap'
import React from 'react'
import "./style.css"

export default function ModalFood({show, toggleShow, food}){

    return(
        <div className={show? 'modal-container' : null}>

            <Modal show={show} onHide={toggleShow} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{food.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="price">R$ {food.price}</p>
                    <p className="description">{food.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=> console.log("Agora")}>Comprar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}