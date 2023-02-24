import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./styles.css";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }

    setPasswordType("password");
  };

  return (
    <div className="form-container d-flex justify-content-center align-items-center">
      <Form className="d-flex flex-column form-group p-4">
        <h2 className="login-title">Login</h2>
        <p className="login-description">Hey, Enter your details to get sign in to your account</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={passwordType} name="password" placeholder="Password" onChange={handlePasswordChange} value={passwordInput} className="form-password" />

          <button onClick={togglePassword} type="button">
            {passwordType === "password" ? <i className="uil uil-eye-slash"></i> : <i className="uil uil-eye"></i>}
          </button>
        </Form.Group>
        <Button className="button-login" type="submit" href="/home">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
