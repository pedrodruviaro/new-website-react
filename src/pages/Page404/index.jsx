import React from 'react'
import { SecondaryTitle } from '../../componets/Typography'
import {FlexContainer} from '../../componets/Containers'
import illustration from '../../assets/imgs/il_lost.svg'
import {ButtonSubmit} from '../../componets/Button'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <FlexContainer direction="column" gap="2rem" padding="3rem">
            <SecondaryTitle>Sorry, this page doesn't exist...<strong> :(</strong></SecondaryTitle>
            <ButtonSubmit>
                <Link to="/">Back to home</Link>
            </ButtonSubmit>
            <img src={illustration} alt="" />
        </FlexContainer>
    )
}
