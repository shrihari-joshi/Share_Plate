import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatgpt = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://maps-data.p.rapidapi.com/geocoding.php',
                params: {
                  query: 'juhu beach    ',
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
                  console.log(response); // Log the entire response object
                  setLat(response.data.data.lat); // Update state with response data
                  setLng(response.data.data.lng); // Update state with response data
              } catch (error) {
                  console.error(error);
              }
        };
    
        fetchData();
    }, []);

    return (
        <div>
            
                <p>Latitude: {lat}, Longitude: {lng}</p>
            
        </div>
    );
}

export default Chatgpt;
