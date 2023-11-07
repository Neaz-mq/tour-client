
import { useLoaderData} from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const ServiceDetails = () => {
    const services = useLoaderData();
    return (
        <div className='m-20'>
      
      

        <div className="carousel w-full max-h-96 mb-20 ">
    <div id="slide1" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/HVMq9ZD/shop-942398-1280.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/xjFs0GW/bargain-456004-1280.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/YN6JtJR/sale-685005-1280.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    
  </div>
        
        <div className='grid md:grid-cols-2 ml-20 gap-10'>
        {
          services.map(service => <ServiceCard
          
            key={service._id}
            product={service}
            
           
          ></ServiceCard>)
        }
        
        </div>
        </div> 
    );
};

export default ServiceDetails;