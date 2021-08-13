import React, { useEffect, useState } from "react";
import { FlexContainer } from "../../componets/Containers";
import { Paragraph, QuaternayTitle, TertiaryTitle } from "../../componets/Typography";
import { Article, List } from "./styles";
import { Button } from "../../componets/Button";
import firebase from '../../services/firebase'

export default function Index() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    const ref = firebase.firestore().collection("artigos")

    function getArticles(){
        setLoading(true)

        ref.onSnapshot(querySnapshot => {
            const items = []
            querySnapshot.forEach(doc => {
                items.push(doc.data())
            })

            setArticles(items)
            setLoading(false)
        })
    }

    useEffect(() => {
        console.log('usei effect');
        getArticles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(loading) {
        return (<FlexContainer
        align="center"
        justify="center"
        direction="column"
        gap="2rem"
    >
        
        <TertiaryTitle>Articles</TertiaryTitle>
        <QuaternayTitle>Loading...</QuaternayTitle>
    </FlexContainer>
        )
    }

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
