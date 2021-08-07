import React from 'react'
import { MyServicesStyled } from './styles'
import {SecondaryTitle} from '../Typography'
import {FlexContainer} from '../FlexContainer'
import {Button} from '../Button'

export default function index(props) {
    return (
        <MyServicesStyled>
            <SecondaryTitle>What I do</SecondaryTitle>

            <FlexContainer background="transparent" color={"dark"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium saepe suscipit tempora unde eius dolore nulla delectus natus temporibus quae cumque debitis fugiat culpa, minima earum similique, tempore magni.
            </FlexContainer>

            <Button>my work</Button>
        </MyServicesStyled>
    )
}
