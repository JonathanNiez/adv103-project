const About = () => {
  return (
    <div className="container">
      <h1 className="text-center">About</h1>
      <div className="row">
        <h4 className="text-center">
                  This is for educational and project purposes only. Any movies listed in this website 
                  belongs to its rightfully owner.
        </h4>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="text-center"  >Developers</h2>
        </div>
      </div>
      <div className="row">
        <div className="col text-center m-5">
          <img
            className="rounded"
            src="https://i.postimg.cc/D4r28sPL/275900299-363973828975411-8937741833180476069-n.jpg"
          />
          <h3 className="devname">Louis Andrew Roque</h3>
        </div>
        <div className="col text-center m-5">
          <img
            className="rounded"
            src="https://i.postimg.cc/K3SGGQBm/277076121-375845741056631-7077835946382534022-n.jpg"
          />
         <h3 className="devname">Jonathan A. Niez Jr.</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
