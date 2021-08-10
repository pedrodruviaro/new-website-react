import styled from "styled-components";

import pattern from '../../assets/imgs/pattern.svg'

export const HeroStyled = styled.div`

    height: calc(100vh - 8vh);
    background-image: url(${pattern}), radial-gradient(#494949, #5e317099);
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-position: center;
    background-size: contain cover;
    background-repeat: repeat;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	text-align: center;
	gap: 1.5rem;
    padding: 1rem;
`;

export const HeroTitle = styled.h1`
	font-weight: 200;
	font-size: 4rem;

	@media (min-width: 900px) {
		font-size: 5rem;
	}
`;

export const HeroSubtitle = styled.h2`
	font-weight: 400;
	font-size: 2.5rem;

	@media (min-width: 900px) {
		font-size: 3.5rem;
	}
`;
