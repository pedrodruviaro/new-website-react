import React from 'react'
import profilepicture from '../../assets/imgs/perfil.jpg'
import { Paragraph, SecondaryTitle } from '../Typography'
import { ProfileStyled } from './styles'

export default function Index() {
    return (
        <ProfileStyled id="home">
            <SecondaryTitle>Hi, I am <strong>Pedro</strong></SecondaryTitle>
            <Paragraph>front-end dev</Paragraph>
            <img src={profilepicture} alt="Pedro, visto de frente sorrindo." />
        </ProfileStyled>
    )
}
