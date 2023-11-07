import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ServiceCard = ({ service }) => {
  const { _id, photo, name, title, email, price, details, area } = service;

  const handleDelete = _id => {

    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {

                                 
                    fetch(`http://localhost:5000/service/${_id}`, {
                      method: 'DELETE'
                    }) 
                    .then(res => res.json())
                    .then(data => {
                       console.log(data);
                       if(data.deletedCount > 0){
                        Swal.fire(
                          'Deleted!',
                          'Your service has been deleted.',
                          'success'
                      )  
                       }
                    })
                  }
              })

   
}



  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={photo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Title: {title}</p>
        <p>Email: {email}</p>
        <p>Price: ${price}</p>
        <p> {details}</p>
        <p>Area: {area}</p>

        <div className="card-actions">

          <Link to={`/updateService/${_id}`}>
          <button className="btn btn-primary">Edit</button>
          </Link>

        </div>

        <div className="card-actions">

          <button onClick={() => handleDelete(_id)} className="btn btn-error text-white">Delete</button>

        </div>


      </div>
    </div>
  );
};

export default ServiceCard;