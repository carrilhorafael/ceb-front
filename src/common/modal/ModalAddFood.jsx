import { Button, Modal } from 'react-bootstrap'
import React from 'react'
import "./style.css"
import { useState } from 'react'
import { postProduct } from '../../service/Api'

export default function ModalAddFood({show, restaurant_id, toggleShow, products, setProducts}){
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState({})
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [portion, setPortion] = useState("P")
    
    const handleSubmit = () => {
        let productData = new FormData()
        productData.append("name", name)
        productData.append("photo", photo.pictureAsFile)
        productData.append("description", description)
        productData.append("price", parseFloat(value))
        productData.append("portion", portion)
        productData.append("restaurant_id", restaurant_id)

        postProduct(productData)
        .then(({data}) => {
            setProducts([...products, data])
        })

    }
    const handleUpload = e => {
        setPhoto({
            picturePreview : URL.createObjectURL(e.target.files[0]),
            pictureAsFile : e.target.files[0]
        });
    }


    return(
        <div className={show? 'modal-container' : null}>

            <Modal show={show} onHide={toggleShow} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Criar novo prato</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <fieldset>
                            <label>Nome</label>
                            <input type="text" className="main_input" value={name} onChange={e => setName(e.target.value)}/>
                        </fieldset>
                        <fieldset>
                            <label>Foto</label>
                            <input type="file" className="main_input" onChange={handleUpload}/>
                        </fieldset>
                        <fieldset>
                            <label>Descrição</label>
                            <input type="text" className="main_input" value={description} onChange={e => setDescription(e.target.value)}/>
                        </fieldset>
                        <fieldset>
                            <label>Valor</label>
                            <input type="text" className="main_input" value={value} onChange={e => setValue(e.target.value)}/>
                        </fieldset>
                        <fieldset>
                            <label>Porção</label>
                            <select className="main_input" value={portion} onChange={e => setPortion(e.target.value)}>
                                <option value="P">Pequena</option>
                                <option value="M">Média</option>
                                <option value="G">Grande</option>
                            </select>
                        </fieldset>
                    </form>
                </Modal.Body>                                                   
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>Criar prato</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}