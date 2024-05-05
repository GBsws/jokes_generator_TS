import { useState } from 'react'
import './App.scss';
import { Form, Joke } from './components';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import sourceOfJokes from './source/jokes-data';

interface JokeDataStructure {
  type:'general'| 'dad'| 'knock-knock'|'programming';
  count:1|2|3|4|5|6|7|8|9|10;
  source:sourceOfJokes;
  setup:string;
  punchline:string;
}

function App() {
  const [userName, setUserName] = useState()
  const [jokesData, setJokesData] = useState<JokeDataStructure>([])

  const generateJokesData = (type, count, source) => {
    const data = [...source];
    setJokesData(data
      .filter(item => item.type === type)
      .map((item, index) => ({...item, 'id': index}))
      .slice(0, count));
  };

  const handleSendData = (data) => {
    setUserName(data.name);
    generateJokesData(data.type, data.count, sourceOfJokes);
  };

  return (
    <div className="app">
    {jokesData.length > 0 ? (
        <div className="app__container">
          <h2>{userName}</h2>
          <h3>There are jokes for you!</h3>
          {jokesData.map((item) => <Joke key={item.id} setup={item.setup} punchline={item.punchline} />)}
          <span className='app__container__back-icon' onClick={() => setJokesData([])}><ArrowUturnLeftIcon /></span>
        </div>
      ) : (
        <div className="app__container">
          <h2>Welcome to jokes generator</h2>
          <h3>Please fill the form:</h3>
          <Form onSubmitData={handleSendData} />
        </div>
      )
    }
  </div>
  )
}

export default App
