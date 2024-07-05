// src/components/UTMParameters.jsx
import  { useEffect, useRef } from 'react';
import axios from 'axios';

const useQuery = () => {
  return new URLSearchParams(window.location.search);
};

const UTMParameters = () => {
  const hasSentRequest = useRef(false);

  useEffect(() => {
    if (hasSentRequest.current) return; // Prevent double API call due to Strict Mode

    const query = useQuery();
    const params = {
      utm_source: query.get('utm_source'),
      utm_medium: query.get('utm_medium'),
      utm_campaign: query.get('utm_campaign'),
      utm_term: query.get('utm_term'),
      utm_content: query.get('utm_content')
    };

    console.log('Sending UTM parameters to backend:', params);

    // Send UTM params to backend
    axios.post('http://localhost:5000/api/save-utm', params)
      .then(response => {
        console.log('UTM parameters logged and saved:', response.data);
        hasSentRequest.current = true; // Mark as sent
      })
      .catch(error => {
        console.error('Error logging and saving UTM parameters:', error);
      });
  }, []);

  return null;
};

export default UTMParameters;
