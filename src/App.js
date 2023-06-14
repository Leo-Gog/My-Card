import myImg from './assets/myImg.jpg'
import pic1 from './assets/linkedin.svg'
import pic2 from './assets/github.svg'
import pic3 from './assets/codewars.svg'

import './App.css';

function App() {
  return (
    <div className="card-container">
        <img className="round" src={myImg} alt="avatar" />
        <p><span className="name">Levan Alimbarashvili</span></p>
        <p><span className="address">Tbilisi, Georgia</span></p>
        <p>Front-End Developer</p>
        <a href="https://www.linkedin.com/in/levan-alimbarashvili-195539279/" class="icon-btn linkedin">
            <img src={pic1} alt="linkedin icon" />
        </a>
        <a href="https://github.com/Leo-Gog" className="icon-btn github">
            <img src={pic2} alt="github icon" />
        </a>
        <a href="https://www.codewars.com/users/LeoGog" className="icon-btn codewars">
            <img src={pic3} alt="codewars icon" />
        </a>
        <div className="skills">
            <p><b>Skills:</b></p>
            <ul>
                <li>Front End Development</li>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
                <li>React (Basics)</li>
                <li>PHP (Basics)</li>
            </ul>
        </div>
    </div>
  );
}

export default App;
