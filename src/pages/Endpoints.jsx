import { useState, useEffect } from "react";

function Endpoints() {
    const [routes, setRoutes] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
        fetchRoutes();
      }, []);

    const fetchRoutes = () => {
        fetch('https://eventapi.lukasronberg.dk/api/routes')
          .then((response) => response.text())  // Get raw HTML response
          .then((data) => {
            setRoutes(data);  // Set the raw HTML content into the state
            setError('');
          })
          .catch((err) => {
            setError(`Error fetching data: ${err.message}`);
            setRoutes('');
          });
      };


    return (  
        <>
        <h1>Endpoints</h1>
        <div dangerouslySetInnerHTML={{ __html: routes }} />

        </>
    );
}

export default Endpoints;