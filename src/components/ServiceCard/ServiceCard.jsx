

const ServiceCard = ({service}) => {
    const {_id, photo, name, title, email, price, details, area } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photo}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p> {title}</p>
          <p> {email}</p>
          <p> {price}</p>     
          <p> {details}</p>     
          <p> {area}</p>
           
         
        </div>
      </div>
    );
};

export default ServiceCard;