import React, { useContext } from 'react'
import { Dropdown } from 'react-bootstrap'
import { GlobalContext } from '../../context/GlobalContext'
import './style.css'

export default function HeaderDropdown ({svgtoggle, header, menu, className}){

    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src={svgtoggle}></img>
            </Dropdown.Toggle>

            <Dropdown.Menu className={className} id="dropdown_menu">
                <Dropdown.Header>{header}</Dropdown.Header>
                {menu.map(item => (
                    <Dropdown.Item onClick={item.onClick}>{item.nome}</Dropdown.Item>
                    ))
                }
                
            </Dropdown.Menu>
        </Dropdown>
    )

}