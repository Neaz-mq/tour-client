import { Link } from "react-router-dom";


const Tour = ({tour}) => {
    const { id, image, name, description, button, providerimg, provider, price} = tour;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <Link to={`/tour/${id}`}>
       <figure><img src={image} alt="Shoes" /></figure>
       <div className="card-body">
           <h2 className="card-title text-2xl font-semibold">{name}</h2>
           <p>{description}</p>
           <button className="btn btn-success">{button}</button>
       </div>
       <figure className="px-10 pt-10"><img className="rounded-3xl" src={providerimg} alt="Shoes" /></figure>
       <div className="card-body">
           <h2 className="card-title text-3xl font-semibold px-7">{provider}</h2>
           <p className="text-2xl text-red-400 font-bold px-7">${price}</p>
           
       </div>
               
           </Link>
           </div>
    );
};

export default Tour;