import { useLoaderData } from "react-router-dom";


const TourDetails = () => {

  


    const tour = useLoaderData()
    const {price, image, name, description, providerimg, provider
    } = tour;


    const handleUpdateService = event => {
      event.preventDefault();


      const form = event.target;
      const photo = form.photo.value;
      const title = form.title.value;
      const name = form.name.value;
      const email = form.email.value;
      const price = form.price.value;
      const area = form.area.value;
      const details = form.details.value;
    
    


      const updateService = { photo, name, title, email, price, details, area}

      console.log(updateService);


    }



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
  <div>
        <h2 className="text-3xl font-extrabold text-center">Confirm Purchase</h2>
        <div>
        <form onSubmit={handleUpdateService}>
            
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold"> Service Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="title"   placeholder="Service name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Image</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo"  placeholder="Image url" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Service Provider Email</span>
                    </label>
                    <label className="input-group">

                        <input type="email" name="email"  placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>

            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">User Email</span>
                    </label>
                    <label className="input-group">

                        <input type="email" name="email"  placeholder="User Email" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Service Taking date</span>
                    </label>
                    <label className="input-group">
                     
                        <input type="date" name="date"  placeholder="Date" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Instruction</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="instruction" placeholder="Address" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Price</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
            
          
           

            <div className="flex justify-between items-center">
            <div className="form-control md:w-1/2">
          
        <a href="/schedule"><input type="submit" value="Purchase" className="btn btn-block mt-10 btn-accent text-xl font-semibold" /></a>

      
         
      </div>
      <div>
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-error text-white mt-10">Close</button>
      </form>
      </div>
            </div>
        </form>
        </div>
    </div>
    
  </div>
</dialog>
  </div>
</div>
           
        </div>
    );
};

export default TourDetails;