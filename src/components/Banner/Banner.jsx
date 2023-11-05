

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/gRSWhRg/pexels-son-tung-tran-6492956.jpg)'}}>
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg" data-aos="fade-down">
            <h1 className="mb-5 lg:text-5xl text-5xl font-bold text-white my-8">Let's Visit The World</h1>
            <p className="mb-5 lg:text-2xl text-base font-medium text-">Book unique and memorable travel experience guided by locals. </p>
            <button className="btn btn-error text-white">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;