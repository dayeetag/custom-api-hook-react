import { useState, useEffect } from "react";

export default function useApi(URL){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchDataFromApi(){
            try{
                const result = await fetch(URL)
                const data = await result.json()
                setData(data)
            }
            catch(e){
                setError(e)
            }
            finally {
                setLoading(false);
            }
        }
        fetchDataFromApi()
    }, [URL]);

    
    return {data, loading, error}
}