import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/gRSWhRg/pexels-son-tung-tran-6492956.jpg)' }}>
      <div className="hero-overlay bg-opacity-75"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg" data-aos="fade-down">
          <h1 className="mb-5 lg:text-5xl lg:mr-0 lg:ml-0 text-2xl font-bold text-white my-8">Let's  <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Visit The World!']}
            loop={15}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span></h1>
          <p className="mb-5  lg:mr-0 lg:ml-0 lg:text-2xl text-base font-medium ">Book unique and memorable travel experience guided by locals. </p>
          <button className="btn btn-error text-white">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;