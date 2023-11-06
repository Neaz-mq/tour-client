import { useEffect, useState } from "react";
import Tour from "../Tour/Tour";


const AllServices = () => {
  const [isShow, setIsShow] = useState(false);
  const [tours, setTours] = useState([]);



  useEffect(() => {
    fetch('http://localhost:5000/tours')
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-bold p-14 mb-5" data-aos="zoom-in">All Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 md:ml-52 lg:grid-cols-1 gap-16  lg:mx-8 mx-5 my-12">


        {
          isShow ? tours.map((tour) => (


            <Tour key={tour.id} tour={tour}></Tour>
          ))

            : tours.slice(0, 4).map((tour) => (
              <Tour key={tour.id} tour={tour}></Tour>
            ))
        }


      </div>
      <div className="text-center pb-5">
        {tours.length > 4 && <button onClick={() => setIsShow(!isShow)} className="btn btn-secondary">
          {isShow ? "See less" : "See More"}
        </button>}
      </div>

    </div>
  );
};

export default AllServices;