import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddService = () => {
    
    const handleAddService = event => {
        event.preventDefault();


        const form = event.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const area = form.area.value;
        const details = form.details.value;
      
      


        const newService = { photo, name, title, email, price, details, area}

        console.log(newService);

        

        // send data to the server

        fetch('https://tour-guide-server-azure.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="bg-emerald-100 p-24">
        <h2 className="text-3xl font-extrabold text-center">Add a Service</h2>
        <div className='lg:ml-96 -mr-16 mt-8'>
        <form onSubmit={handleAddService}>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Image</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo" placeholder="Image url" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold"> Service Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="title" placeholder="Service name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold"> Your Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="Product name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>
                    </label>
                    <label className="input-group">

                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
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
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Area</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="area" placeholder="Area" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Details</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           

            <div className="form-control md:w-1/2">
          
                <input type="submit" value="Add Service" className="btn btn-block mt-10 btn-accent text-xl font-semibold" />
               
            </div>
        </form>
        </div>
    </div>
    );
};

export default AddService;