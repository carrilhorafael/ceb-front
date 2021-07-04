import { Button, Modal } from 'react-bootstrap'
import React from 'react'
import "./style.css"
import { useState } from 'react'

export default function ModalFood({show, toggleShow, food, addProduct}){
    const [quantity, setQuantity] = useState(0)
    
    return(
        <div className={show? 'modal-container' : null}>

            <Modal show={show} onHide={toggleShow} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{food.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="price">R$ {food.price}</p>
                    <p className="description">{food.description}</p>
                    <fieldset>
                        <label>Adicione uma quantidade</label>
                        <input type="number" className="main_input" value={quantity} onChange={e => setQuantity(e.target.value)}/>
                    </fieldset>
                </Modal.Body>                                                   
                <Modal.Footer>
                    <Button variant="primary" onClick={() => addProduct(food, quantity)}>Comprar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}