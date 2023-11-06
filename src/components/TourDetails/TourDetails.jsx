import { useLoaderData } from "react-router-dom";


const TourDetails = () => {

    const tour = useLoaderData()
    const {price, image, name, description, providerimg, provider
    } = tour;
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl ml-14 px-20 py-20">
  <figure className="w-full"><img src={image}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{name}</h2>
    <p className="text-lg">{description}</p>
    <figure className="w-40"><img src={providerimg}alt="Album"/></figure>
    <p className="text-xl">{provider}</p>
    <p className="text-xl text-red-600 font-bold">${price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
           
        </div>
    );
};

export default TourDetails;