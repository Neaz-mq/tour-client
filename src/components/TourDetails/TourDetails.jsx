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
   {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  </div>
</div>
           
        </div>
    );
};

export default TourDetails;