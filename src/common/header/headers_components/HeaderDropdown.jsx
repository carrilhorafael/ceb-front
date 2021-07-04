import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function HeaderDropdown ({svgtoggle, header, menu, className}){
    return(
        <Dropdown>
            <Dropdown.Toggle className="button_dropdown" variant="success" id="dropdown-basic">
                <img src={svgtoggle}></img>
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-menu">
                <Dropdown.Header>{header}</Dropdown.Header>
                {menu.map(item => (
                    <Dropdown.Item onClick={item.onClick}>{item.nome}</Dropdown.Item>
                    ))
                }
                
            </Dropdown.Menu>
        </Dropdown>
    )

}