import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatgpt = () => {
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://maps-data.p.rapidapi.com/geocoding.php',
                params: {
                  query: 'infinity mall malad',
                  lang: 'en',
                  country: 'in'
                },
                headers: {
                  'X-RapidAPI-Key': '84649a33bemsh89067bd4af0ca65p1ab404jsnb6641d742154',
                  'X-RapidAPI-Host': 'maps-data.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data);
              } catch (error) {
                  console.error(error);
              }
        };
    
        fetchData();
    }, []);

    return (
        <div>
            {responseData && (
                <p>{JSON.stringify(responseData, null, 2)}</p>
            )}
        </div>
    );
}

export default Chatgpt;
