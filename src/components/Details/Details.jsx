import { Typewriter } from 'react-simple-typewriter'

const Details = () => {
    return (
        <div className="hero min-h-screen bg-base-200" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/bQ2zXqP/pexels-malte-luk-2432299.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Local <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Tour and Guide!']}
            loop={15}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span></h1>
      <p className="py-6 text-lg font-medium">A tour guide  is a person who provides assistance, and information on cultural, historical and contemporary heritage </p>
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
    );
};

export default Details;