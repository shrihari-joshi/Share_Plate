import React, { useState } from 'react';
import axios from 'axios';
import Chatgpt from './chatgpt';

const MapsWithLocationAndForm = () => {
    const [coordinates, setCoordinates] = useState([null, null]);
    const [ngos, setNgos] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        quantity: '',
        expiry:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData); // Debug statement to check the formData object

        // Fetch location data
        const locationOptions = {
            method: 'GET',
            url: 'https://maps-data.p.rapidapi.com/geocoding.php',
            params: {
                query: formData.location,
                lang: 'en',
                country: 'in'
            },
            headers: {
                'X-RapidAPI-Key': '84649a33bemsh89067bd4af0ca65p1ab404jsnb6641d742154',
                'X-RapidAPI-Host': 'maps-data.p.rapidapi.com'
            }
        };

        try {
            const locationResponse = await axios.request(locationOptions);
            const { lat, lng } = locationResponse.data.data;
            setCoordinates([lat, lng]);

            // Fetch nearby NGOs using the obtained coordinates
            const nearbyNGOsOptions = {
                method: 'GET',
                url: 'https://map-places.p.rapidapi.com/nearbysearch/json',
                params: {
                    location: `${lat},${lng}`,
                    radius: '1500',
                    keyword: 'NGO',
                    type: 'point_of_interest',
                    fields: 'name,geometry'
                },
                headers: {
                    'X-RapidAPI-Key': '84649a33bemsh89067bd4af0ca65p1ab404jsnb6641d742154',
                    'X-RapidAPI-Host': 'map-places.p.rapidapi.com'
                }
            };

            const nearbyNGOsResponse = await axios.request(nearbyNGOsOptions);
            const top5NGOs = nearbyNGOsResponse.data.results.slice(0, 5);
            setNgos(top5NGOs);

            // Clear form fields after submission
            setFormData({
                name: '',
                location: '',
                quantity: '',
                expiry:''
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>NGOs Nearby</h1>
            <p>Latitude: {coordinates ? coordinates[0] : 'Loading...'}, Longitude: {coordinates ? coordinates[1] : 'Loading...'}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber">Quantity:</label>
                    <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="contactNumber">Expiry Date:</label>
                    <input
                        type="date"
                        id="expiry"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>

            <h2>NGOs Nearby</h2>
            {ngos ? (
                <ul>
                    {ngos.map((ngo, index) => (
                        <li key={index}>{ngo.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No NGOs nearby.</p>
            )}
            {ngos && <Chatgpt formData={formData} />}
        </div>
    );
};

export default MapsWithLocationAndForm;
