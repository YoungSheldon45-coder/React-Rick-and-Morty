import './App.css';
import Characters from './Components/TheCharacters';
import Locations from './Components/TheLocations';
import Episodes from './Components/TheEpisodes';


function App() {
  return (
    <div>
      <ul className="nav nav-tabs bg-black" id="myTab" role="tablist" style={{padding: '10px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'}}>
        <li className="nav-item" role="presentation" style={{fontSize: '20px', backgroundColor: '#0dcaf0', marginRight: '10px', marginLeft: '10px', padding: '10px', borderRadius: '15px'}}>
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" style={{borderRadius: '15px', backgroundColor: '#56c342', color: 'white'}}>Characters</button>
        </li>
        <li className="nav-item" role="presentation" style={{fontSize: '20px', backgroundColor: '#0dcaf0', marginRight: '10px', marginLeft: '10px', padding: '10px', borderRadius: '15px'}}>
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" style={{borderRadius: '15px', backgroundColor: '#56c342', color: 'white'}}>Locations</button>
        </li>
        <li className="nav-item" role="presentation" style={{fontSize: '20px', backgroundColor: '#0dcaf0', marginRight: '10px', marginLeft: '10px', padding: '10px', borderRadius: '15px'}}>
          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" style={{borderRadius: '15px', backgroundColor: '#56c342', color: 'white'}}>Episodes</button>
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
