import { useState } from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import "./App.css";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);

  const registerLink = () => {
    setIsRegistering(true);
  };

  const loginLink = () => {
    setIsRegistering(false);
  };

  return (
    <div className="register-login-form">
        {!isRegistering ? 
        <LoginForm register={registerLink} className="login-form-link" />
      :  <RegisterForm login={loginLink} />
      }
      </div>
  );
}

export default App;
