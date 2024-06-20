import { useEffect, useState } from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

const NewsList = (props) =>{
    const {category, searchTerm} = props;

    const [news, setNews] = useState([]);

    useEffect( () => {
        const fetchNews = async () => {
            let url = "https://gnews.io/api/v4/top-headlines?category=general";

            if(category){
                url += `&topic=${category}`;
            }
            if(searchTerm) {
                url += `&q=${searchTerm}`;
            }
            url += `&token=${process.env.REACT_APP_NEWS_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setNews(data.articles);
        };

        fetchNews();
    }, [searchTerm, category]);

    return (
        <Container>
        <Row>
            {news?.map((article) => (
                <Col xs={12} md={6} lg={4} key={article.url}>
                    <Card>
                       <Card.Img src={article.image} variant="top"/>

                       <Card.Body>
                            <Card.Title>{article.title}</Card.Title>

                            <Card.Text>{article.description}</Card.Text>

                            <Card.Link href={article.url}>Read More</Card.Link>
                       </Card.Body>

                    </Card>
                </Col>
            ))};
        </Row>
    </Container>
    );
    
}

export default NewsList;