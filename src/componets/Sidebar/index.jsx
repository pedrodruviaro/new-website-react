import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarItem, SidebarStyled } from './styles'

export default function Index(props) {
    
    return (
        <SidebarStyled open={props.open}>
            <nav>
                <ul>
                    <SidebarItem>
                        <Link to="/" onClick={() => props.handleSidebarOpen()}>Home</Link>
                    </SidebarItem>
                    <SidebarItem>
                        <Link to="/curriculum" onClick={() => props.handleSidebarOpen()}>Curriculum</Link>
                    </SidebarItem>
                    <SidebarItem>
                        <Link to="/contact" onClick={() => props.handleSidebarOpen()}>Contact</Link>
                    </SidebarItem>
                    <SidebarItem>
                        <a href="#services" onClick={() => props.handleSidebarOpen()}>My Services</a>
                    </SidebarItem>
                    <SidebarItem>
                        <a href="#about" onClick={() => props.handleSidebarOpen()}>Aboute me</a>
                    </SidebarItem>
                    <SidebarItem>
                        <a href="#work" onClick={() => props.handleSidebarOpen()}>My Work</a>
                    </SidebarItem>
                </ul>
            </nav>
        </SidebarStyled>
    )
}
