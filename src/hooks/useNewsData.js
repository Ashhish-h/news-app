import { useState, useEffect } from 'react';

const useNewsData = (category, searchTerm) => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNewsData() {
            try {
                setLoading(true);
                setError(null);

                const apiKey = process.env.REACT_APP_NEWS_API_KEY;
                if (!apiKey) {
                    throw new Error('API key is missing');
                }

                let apiUrl = `https://gnews.io/api/v4/top-headlines?token=${apiKey}`;

                if (category) {
                    apiUrl += `&topic=${category}`;
                }

                if (searchTerm) {
                    apiUrl += `&q=${searchTerm}`;
                }

                const response = await fetch(apiUrl);
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                setNewsData(data.articles);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchNewsData();
    }, [category, searchTerm]);

    return { newsData, loading, error };
};

export default useNewsData;
