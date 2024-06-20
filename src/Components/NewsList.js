import { useEffect, useState } from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

const NewsList = (props) =>{
    const {category, searchTerm} = props;

    const [news, setNews] = useState([]);

    useEffect( () => {
        const fetchNews = async () => {
            let url = `https://gnews.io/api/v4/top-headlines?lang=en`;

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
    });

    return <></>
}

export default NewsList;