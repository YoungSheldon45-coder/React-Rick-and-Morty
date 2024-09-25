import './App.css';
import Characters from './Components/Characters';
import Locations from './Components/Locations';
import Episodes from './Components/TempEpisodes';  


function App() {
  return (
    <div>
      <ul className="nav nav-tabs bg-black" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Characters</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Locations</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Episodes</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <Characters />
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <Locations />
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <Episodes />
        </div>
      </div>
    </div>
  );
}

export default App;
