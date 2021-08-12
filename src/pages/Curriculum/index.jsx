import React from "react";
import {Container} from '../../componets/Containers'
import {Paragraph, QuaternayTitle, TertiaryTitle} from '../../componets/Typography'
import { CentralCurriculum, Curriculum, SideBarCurriculum } from "./styles";
import profilePhoto from '../../assets/imgs/perfil.jpg'

export default function index() {
    return (
        <Container>
            <TertiaryTitle>Curriculum</TertiaryTitle>
            <Curriculum>
                <SideBarCurriculum>
                    <img src={profilePhoto} alt="Pedro Profile"/>
                    <h4 className="nome">PEDRO HENRIQUE DALMOLIN RUVIARO</h4>
                    <p className="titulo">Desenvolvedor Web</p>
                    <div className="perfil-pessoal">
                        <QuaternayTitle>Perfil Pessoal</QuaternayTitle>
                        <Paragraph>
                            Extremamente motivado, em constante desenvolvimento
                            de minhas habilidades e crescimento profissional.
                            Confio em minha capacidade de resolver problemas e
                            implementar novas funcionalidades à meus projetos.
                        </Paragraph>
                    </div>
                    <div className="habilidades">
                        <QuaternayTitle>Habilidades e competencias</QuaternayTitle>
                        <ul>
                            <li>- Programação de aplicações web em React JS</li>
                            <li>- Desevolvimento em HTML e CSS</li>
                            <li>
                                - Conhecimentos de bibliotecas como Material UI
                                e Styled-Components
                            </li>
                            <li>- Git e GitHub</li>
                            <li>- Conhecimento de métodos ágeis</li>
                            <li>- Motivado e desciplinado</li>
                            <li>- Possuo fluência em ingles</li>
                            <li>- Trabalho bem em equipe</li>
                        </ul>
                    </div>

                    <div className="contato">
                        <QuaternayTitle>CONTATO</QuaternayTitle>
                        <p>55 9995527755</p>
                        <p>pedrodruviaro@gmail.com</p>
                        <p>Rio Grande Do Sul, Brasil</p>
                    </div>
                </SideBarCurriculum>

                <CentralCurriculum>
                    <div className="historico">
                        <h2>HISTORICO PROFISSIONAL</h2>
                        <h3>Lorem, ipsum.</h3>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi quidem sint debitis minus
                            reprehenderit voluptatum accusantium enim illo
                            maxime! Fuga voluptatibus sunt laudantium facere
                            magnam sint ipsum voluptates officia impedit!
                        </Paragraph>
                    </div>

                    <div className="educacional">
                        <h2>HISTORICO EDUCACIONAL</h2>
                        <Paragraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Tempore perspiciatis dolorem, dignissimos,
                            deleniti voluptate officia in ab fugiat a atque
                            provident repudiandae expedita ipsum, blanditiis
                            modi delectus accusamus corrupti. Quam!
                        </Paragraph>
                    </div>

                    <div className="interesses">
                        <h2>INTERESSES E HOBBIES</h2>
                        <Paragraph>
                            Leitor assíduo, gosto de estudar e entender sobre
                            tudo o que se passa à minha volta. Desde meu
                            ingresso ao campo da tecnologia, programar e
                            aprender tudo relacionado à esse universo tem sido
                            minha principal fonte de interesse e pesquisa.
                        </Paragraph>
                    </div>
                </CentralCurriculum>
            </Curriculum>
        </Container>
    );
}
