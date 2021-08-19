import React from "react";
import { Paragraph, QuaternayTitle, TertiaryTitle } from "../../componets/Typography";
import {
    CentralCurriculum,
    Curriculum,
    CurriculumWrapper,
    SideBarCurriculum,
} from "./styles";
import profilePhoto from "../../assets/imgs/perfil.jpg";

export default function index() {
    return (
        <CurriculumWrapper>
            <TertiaryTitle style={{marginBottom: '4rem'}}>Curriculum</TertiaryTitle>
            <Curriculum>
                <SideBarCurriculum>
                    <img src={profilePhoto} alt="Pedro Profile" />
                    <h4 className="nome">PEDRO HENRIQUE DALMOLIN RUVIARO</h4>
                    <p className="titulo">Desenvolvedor Web</p>
                    <div>
                        <QuaternayTitle>Perfil Pessoal</QuaternayTitle>
                        <Paragraph>
                            Extremamente motivado, em constante desenvolvimento
                            de minhas habilidades e focado em meu crescimento
                            profissional. Confio na minha capacidade de resolver
                            problemas e implementar novas funcionalidades à meus
                            projetos. Desde o início de 2021 venho estudando
                            programação voltada ao Frond-end. Químico de
                            formação, busco hoje, a migração de carreira para a
                            área da tecnologia, com muito estudo e empenho.
                            Acredito que minhas vivências e experiências
                            adquiridas ao longo da graduação me levam hoje a ser
                            um profissional dedicado e proativo. Atualmente
                            busco oportunidades de primeiro emprego ou estágio
                            na área de front-end, principalmente utilizando
                            React JS.
                        </Paragraph>
                    </div>
                    <div>
                        <QuaternayTitle>Soft Skills</QuaternayTitle>
                        <ul>
                            <li>Proativo e determinado.</li>
                            <li>Facilidade no apredizado.</li>
                            <li>Organizado e ótimo com prazos.</li>
                            <li>Facilidade com trabalho em equipe.</li>
                            <li>Autodidata e esforçado.</li>
                        </ul>
                    </div>
                    <div>
                        <QuaternayTitle>Hard Skills</QuaternayTitle>
                        <ul>
                            <li>Aplicações web com React JS.</li>
                            <li>
                                Conhecimentos de bibliotecas como Material UI e
                                Styled-Components.
                            </li>
                            <li>Conhecimento de Firebase.</li>
                            <li>Desevolvimento em HTML e CSS.</li>
                            <li>Git e GitHub.</li>
                            <li>Conhecimento de métodos ágeis.</li>
                            <li>Inglês intermediários à avançado.</li>
                        </ul>
                    </div>

                    <div className="contato">
                        <QuaternayTitle>CONTATO</QuaternayTitle>
                        <Paragraph>55 9 99552-7744</Paragraph>
                        <Paragraph>pedrodruviaro@gmail.com</Paragraph>
                        <Paragraph>Faxinal do Soturno, RS, Brasil</Paragraph>
                    </div>
                </SideBarCurriculum>

                <CentralCurriculum>
                    <div className="historico">
                        <h4>HISTORICO PROFISSIONAL</h4>
                        <h5>Lorem, ipsum.</h5>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi quidem sint debitis minus
                            reprehenderit voluptatum accusantium enim illo
                            maxime! Fuga voluptatibus sunt laudantium facere
                            magnam sint ipsum voluptates officia impedit!
                        </Paragraph>
                    </div>

                    <div className="educacional">
                        <h4>HISTORICO EDUCACIONAL</h4>
                        <Paragraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Tempore perspiciatis dolorem, dignissimos,
                            deleniti voluptate officia in ab fugiat a atque
                            provident repudiandae expedita ipsum, blanditiis
                            modi delectus accusamus corrupti. Quam!
                        </Paragraph>
                    </div>

                    <div className="interesses">
                        <h4>INTERESSES E HOBBIES</h4>
                        <Paragraph>
                            Leitor assíduo, gosto de estudar e entender sobre
                            tudo o que se passa à minha volta. Desde meu
                            ingresso ao campo da tecnologia, programar e
                            aprender tudo relacionado à esse universo tem sido
                            minha principal fonte de interesse e pesquisa.
                            Escrevo sobre minha jornada e dou dicas para quem,
                            assim como eu, é autoditada na área.
                        </Paragraph>
                    </div>
                </CentralCurriculum>
            </Curriculum>
        </CurriculumWrapper>
    );
}
