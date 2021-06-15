import React from 'react'
import { Dropdown } from 'react-bootstrap'
import './style.css'

export default function HeaderDropdown ({svgimg}){

    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src={svgimg}></img>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown_menu" id="dropdown_menu">
                <Dropdown.Item className="dropdown_item" href="#/action-1">Funciona</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Funciona</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Funciona</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

}