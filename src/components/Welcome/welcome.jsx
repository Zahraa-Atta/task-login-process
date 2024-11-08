// MainWelcome.jsx
import "./welcome.css";
import lines from "../../../src/assets/lines.svg";


const MainWelcome = () => {
  return (

      <div className="contient">
      <div className="mainContainer"> 
        <div className="card">
          <div className="mainCard">
            <div className="info">
              <h1>Welcome to Your Freelancing Hub!</h1>
              <p className="subInfo">
                We’re thrilled to have you here! Whether you're a client searching
                for skilled freelancers to bring your projects to life or a
                freelancer eager to find exciting opportunities, this is the place
                where connections are made, and ideas come to reality. Let's start
                building something amazing together!
              </p>
            </div>
          </div>
          <img src={lines} className="Line" alt="" />
        </div>

     
      
        </div>
      </div>
  
  );
};
export default MainWelcome;


