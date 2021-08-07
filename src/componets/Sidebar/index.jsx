import React from 'react'
import { SidebarLink, SidebarStyled } from './styles'

export default function Index(props) {
    
    return (
        <SidebarStyled open={props.open}>
            <nav>
                <ul>
                    <li>
                        <SidebarLink href="">Home</SidebarLink>
                    </li>
                    <li>
                        <SidebarLink href="">My Services</SidebarLink>
                    </li>
                    <li>
                        <SidebarLink href="">Aboute me</SidebarLink>
                    </li>
                    <li>
                        <SidebarLink href="">My Work</SidebarLink>
                    </li>
                </ul>
            </nav>
        </SidebarStyled>
    )
}
