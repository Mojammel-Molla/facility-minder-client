import { useEffect, useState } from 'react';

const UseApartment = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://facility-minder-server.vercel.app/apartments')
      .then(res => res.json())
      .then(data => {
        setApartments(data);
        setLoading(false);
      });
  }, []);
  return [apartments, loading];
};
export default UseApartment;
