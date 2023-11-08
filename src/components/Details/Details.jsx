import { Typewriter } from 'react-simple-typewriter'

const Details = () => {
    return (
        <div className="hero min-h-screen bg-base-200" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
  <div className="hero-content flex-col lg:flex-row-reverse ">
  <iframe src="https://lottie.host/?file=c6e1870b-1883-4ebc-869b-2be9acfc11f5/n1JF3NNln4.json" className='w-1/2 h-96'></iframe>
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