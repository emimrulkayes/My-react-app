// import logo from './logo.svg';
import './App.css';



function App() {
  const players = ['Sakib Al Hasan', 'Tamim Iqbal', 'Rubel Hossain', 'Musfiqur Rahim', 'Mostafijur', 'Imrul kayes']
  return (
    <div className="App">
       <h1>React Componants</h1>
      {
        players.map(player => <Player name={player}></Player>)
      }
      <Person name="JavaScript" Librery="ReactJs"></Person>
      <Person name="nodeJs"></Person>
    </div>
  );
}


function Person(props) {
  // console.log(props);
  return (
    <div className="container">
      <h2>Language: {props.name}</h2>
      <h3>Library: {props.Librery}</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, ex.</p>
    </div>
  )
}

function Player(props) {
  // console.log(props);
  return (
    <div className="player">
      <h2>Player Name: {props.name}</h2>
      <p>Job: Cricketer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis perspiciatis laborum nesciunt aliquam ullam iure ipsa iusto, tempore doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates, ratione nam sint dicta earum in iste quae debitis eligendi nostrum hic minus itaque. Dolor harum ipsa numquam culpa quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, vitae.</p>
    </div>
  )
}

export default App;
