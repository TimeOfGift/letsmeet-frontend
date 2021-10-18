import React, {useState} from 'react';
import EventDetails from './components/EventDetails/EventDetails';
import Events from './components/EventDetails/EventObj'
import './App.scss';

function App() {
  const [events, setEvent] = useState(Events);


  return (
    <div className="App">
      <EventDetails event={events}/>
    </div>
  );
}

export default App;
