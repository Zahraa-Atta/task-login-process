import "./right.css";
const right = () => {
  return (
   
    <div className="lines">
      <div className="top-bar">
        <div className="line-blue"></div>
        <div className="line-gray"></div>
        <div className="line-gray"></div>
      </div>
      <div className="info">
        <h2>Let’s Get started!</h2>
        <div className="subInfo">
          <p>How do you plan to use this platform</p>
        </div>
      </div>
      <div className="select">
        <div className="mainSelect">
          <div className="option freelance">
            <img src={"/freelance.png"} />
            <h4>Freelancer</h4>
            <p>I’m a freelancer ready to work for projects</p>
          </div>
          <div className="option client">
            <img src={"/client.png"} />
            <h4>Client</h4>
            <p>I’m a client searching for talented freelancers</p>
          </div>
        </div>
        </div>
        <div className="btn">
       
       <button >Next  </button > 
       </div>
     
    </div>
 
  );
};

export default right;
