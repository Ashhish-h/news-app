import {useState, useEffect } from "react";

const newsData = (category, searchTerm) => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
};

export default newsData;