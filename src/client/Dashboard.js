import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [auth, setAuth] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    var auth = localStorage.getItem("Email");
    var username = localStorage.getItem("Username");

    setAuth(auth);
    setAuth(username);
  }, []);
  if (auth === null) {
    navigate(`/login`);
  }
  return (
    <div className="container">
      <h1>{auth}</h1>

      <div className="text-end">
        <div className="user-pic">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F026%2F152%2Fgigachad.jpg&f=1&nofb=1&ipt=c10dd7cf373c01b043ff231622e3c4e4a6ac741d6ae72c4dc7586c15da08118f&ipo=images" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
