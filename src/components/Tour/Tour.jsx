import { Link } from "react-router-dom";


const Tour = ({tour}) => {
    const { id, image, name, description, button, providerimg, provider, price} = tour;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
       
       <figure><img src={image} alt="Shoes" /></figure>
       <div className="card-body">
           <h2 className="card-title text-3xl font-semibold ">{name}</h2>
           <p className="text-xl">{description}</p>
           <Link to={`/tour/${id}`}>
           <button className="btn btn-success">{button}</button>
           </Link>
       </div>
       <figure className="px-20 pt-20"><img className="rounded-3xl" src={providerimg} alt="Shoes" /></figure>
       <div className="card-body">
           <h2 className="card-title text-3xl font-semibold px-16">{provider}</h2>
           <p className="text-2xl text-red-400 font-bold px-16">${price}</p>
           
       </div>
              
           
           </div>
    );
};

export default Tour;