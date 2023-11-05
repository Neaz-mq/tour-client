import { useEffect, useState } from "react";
import Tour from "../Tour/Tour";


const Services = () => {

    const [tours, setTours] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4);
  
    
    useEffect(() => {
      fetch("tours.json")
        .then((res) => res.json())
        .then((data) => setTours(data));
    }, []);



    return (
        
        <div>
        <div className="text-center">
          <h2 className="text-5xl font-bold p-14 mb-5" data-aos="zoom-in">Popular Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 md:ml-52 lg:grid-cols-2 gap-10  lg:mx-8 mx-5 my-12">
          {tours.slice(0, dataLength).map((tour) => (
            <Tour  key={tour.id} tour={tour}></Tour>
        
          ))}
        </div>
       
      </div>
    );
};

export default Services;