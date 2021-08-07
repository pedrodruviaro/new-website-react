import styled from "styled-components";
import bannerSM from "../../assets/imgs/banner_sm.jpg";
import bannerMD from "../../assets/imgs/banner_md.jpg";
import bannerXL from "../../assets/imgs/banner__xl.jpg";

export const HeroStyled = styled.section`
    background-color: #888;
    height: calc(100vh - 8vh);
    background-image: url(${bannerSM}), radial-gradient(rgb(73, 73, 73), rgb(255, 255, 255));
    background-attachment: fixed;
    background-blend-mode: multiply;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
	text-align: center;
	gap: 1.5rem;

    @media (min-width: 600px) {
        background-image: url(${bannerMD}), radial-gradient(rgb(73, 73, 73), rgb(255, 255, 255));
    }

    @media (min-width: 1200px) {
        background-image: url(${bannerXL}), radial-gradient(rgb(73, 73, 73), rgb(255, 255, 255));
    }
`;

export const HeroTitle = styled.h1`
	font-weight: 200;
	font-size: 4rem;

	@media (min-width: 900px) {
		font-size: 5rem;
	}
`;

export const HeroSubtitle = styled.h2`
	font-weight: 300;
	font-size: 2.5rem;

	@media (min-width: 900px) {
		font-size: 3.5rem;
	}
`;
