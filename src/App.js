import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="header">
          <img src="https://www.pngkey.com/png/full/313-3135653_on-about-3-years-ago-yeezus-hat-yeezy.png" alt="img-header"></img>
        </div>

        <div className="container">
          <div className="info-container">
            <h1 id='parrafo'>"Parrafo de la api"</h1>
            <p>This is your kanye West quote for today, click below to get another one</p>
            <button id='getNow'>GET NEW ONE</button>
          </div>
          <img src="https://www.e-dea.co/hubfs/lucidchart-en-colombia-decoration.png" alt="img-content"></img>
        </div>

        <div className="footer">
          <h2>Be the first to access it</h2>
          <p>Subscribe to receive updates and join our beta list.</p>
          <div className="login-footer">
          <input placeholder="Enter your email" id='email'></input>
          <button id='enviar' className='send'> SUBSCRIBE</button>
          </div>
        </div>
        © Copyright 2022
      </div>
    </div>

    

  );
}

export default App;
