
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateService = () => {
    const service = useLoaderData();
    const { _id, photo, name, title, email, price, details, area } = service;

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

         // send data to the server

         fetch(`http://localhost:5000/service/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service UPDATED Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }




    return (
        <div className="bg-emerald-100 p-24">
        <h2 className="text-3xl font-extrabold text-center">Update a Service</h2>
        <div className='lg:ml-96 -mr-16 mt-8'>
        <form onSubmit={handleUpdateService}>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Image</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo" defaultValue={photo} placeholder="Image url" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold"> Service Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="title" defaultValue={title} placeholder="Service name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold"> Your Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" defaultValue={name} placeholder="Product name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                    </label>
                    <label className="input-group">

                        <input type="email" name="email" defaultValue={email} placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Price</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Area</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="area"  defaultValue={area} placeholder="Area" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Details</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           

            <div className="form-control md:w-1/2">
          
                <input type="submit" value="Update Service" className="btn btn-block mt-10 btn-accent text-xl font-semibold" />
               
            </div>
        </form>
        </div>
    </div>
    );
};

export default UpdateService;