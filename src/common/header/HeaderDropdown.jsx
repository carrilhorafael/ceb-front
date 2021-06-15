import React, { useContext } from 'react'
import { Dropdown } from 'react-bootstrap'
import { GlobalContext } from '../../context/GlobalContext'
import './style.css'

export default function HeaderDropdown ({svgimg}){
    const {user} = useContext(GlobalContext)
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img src={svgimg}></img>
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown_menu">
                <Dropdown.Header className="dropdown-header" onClick={()=>console.log("testei e funcionou")}>{user.name}</Dropdown.Header>
                <Dropdown.Item onClick={()=>console.log("testei e funcionou")}>Funciona</Dropdown.Item>
                <Dropdown.Item onClick={()=>console.log("testei e funcionou")}>Funciona</Dropdown.Item>
                <Dropdown.Item onClick={()=>console.log("testei e funcionou")}>Funciona</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

}