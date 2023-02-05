import { useState, useEffect } from 'react';
import axios from 'axios';
export const useFetchData = (url, initialData, dependents) => {
    const [data, setData] = useState(initialData);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
    }, [url, ...dependents, isUpdated]);

    return [data, setIsUpdated];
}
