
import { useLoaderData} from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const ServiceDetails = () => {
  
    const services = useLoaderData();
    return (
<>
<div className='m-20'>
 
        
<div className='grid md:grid-cols-2 ml-20 gap-10'>
        {
          services.map(service => <ServiceCard
          
            key={service._id}
            service={service}
            
           
          ></ServiceCard>)
        }
         </div>
       </div>
        </>
    
    )
};

export default ServiceDetails;