import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarItem, SidebarStyled } from './styles'

export default function Index(props) {

    const links = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Curriculum",
            path: "/curriculum",
        },
        {
            label: "Contact",
            path: "/contact",
        }
    ];
    
    return (
        <SidebarStyled open={props.open}>
            <nav>
                <ul>

                    {links.map(link => (
                        <SidebarItem key={link.path}>
                            <Link to={link.path} onClick={() => props.handleSidebarOpen()} >{link.label}</Link>
                        </SidebarItem>
                    ))}
                </ul>
            </nav>
        </SidebarStyled>
    )
}
