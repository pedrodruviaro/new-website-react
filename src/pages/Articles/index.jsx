import React from "react";
import { FlexContainer } from "../../componets/Containers";
import { Paragraph, TertiaryTitle } from "../../componets/Typography";
import { Article, List } from "./styles";
import { Button } from "../../componets/Button";

export default function Index() {
    const articles = [
        {
            title: "Onde praticar minhas habilidades de front-end?",
            author: "Pedro",
            category: "estudos",
            date: "12/ago/2021",
            link: 'https://www.linkedin.com/pulse/onde-praticar-minhas-habilidades-de-front-end-dalmolin-ruviaro/'
        },
        {
            title: "Dicas no aprendizado de CSS",
            author: "Pedro",
            category: "css",
            date: "29/jul/2021",
            link: "https://www.linkedin.com/pulse/dicas-aprendizado-de-css-pedro-henrique-dalmolin-ruviaro/?trackingId=XwZb%2F1b3Rk6zi4pQbp6%2BTg%3D%3D",
        }
    ];

    return (
        <FlexContainer
            align="center"
            justify="center"
            direction="column"
            gap="2rem"
        >
            <TertiaryTitle>Articles</TertiaryTitle>
            <Paragraph align="center">
                Unfortunately for now my articles are only available on my
                native language, witch is portuguese. Their are gonna be
                translated soon. You can read then by clicking on the button
                bellow and acessing via Linkedin.
            </Paragraph>
            <List>
                {articles.map((article) => (
                    <li key={article.title}>
                        <Article>
                            <h4>{article.title}</h4>
                            <div className="header">
                                <div className="author">
                                    {article.author[0].toUpperCase()}
                                </div>
                                <span className="category">
                                    {article.category.toUpperCase()}
                                </span>
                                <span className="date">{article.date}</span>
                            </div>
                            <Paragraph>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Corporis, perspiciatis veniam
                                ut neque tenetur eaque inventore a, hic quasi,
                                rem iusto. Cumque libero fugit placeat enim
                                aperiam similique saepe amet.
                            </Paragraph>
                            <Button
                                target="_blank"
                                rel="noreferrer"
                                href={article.link}
                            >
                                Read
                            </Button>
                        </Article>
                    </li>
                ))}
            </List>
        </FlexContainer>
    );
}
