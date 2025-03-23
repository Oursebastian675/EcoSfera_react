import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import './Login.css';
import './Encabezado';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with', email, password);
    
    // Example login logic (replace with actual API call)
    if (email && password) { // Basic validation
      // Redirect to the desired route after successful login
      history.push('/homepage'); // Specify the route to redirect to
    }
  };

  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input type="checkbox" className="toggle" />
          <span className="slider"></span>
          <div className="flip-card__inner">

            {/* Card Front (Login) */}
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form" onSubmit={handleSubmit}>
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="flip-card__btn">Let`s go!</button>
              </form>
            </div>

            {/* Card Back (Sign up) */}
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form" action="">
                <input
                  className="flip-card__input"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button className="flip-card__btn">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Login;