import './App.css';
import {useState} from 'react';

function App() {
  const[name, setName] = useState('');
  const[date, setDate] = useState('');
  const[description, setDescription]= useState('');

  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        price,
        name:name.substring(price.length+1), 
        description, 
        date,

      })
    }).then(response => {
      response.json().then(json => {
        setName('');
        setDate('');
        setDescription('');
        console.log('result', json)
      })
    })
  }

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input 
            type="text" 
            placeholder='20 lunch with David' 
            value={name}
            onChange={ev => setName(ev.target.value)}/>
          <input 
            type="datetime-local"
            value={date}
            onChange={ev => setDate(ev.target.value)}/>
        </div>
        <div className='description'>
          <input 
            type="text" 
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder='description'/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className='name'>Job</div>
            <div className='description'>i got a job</div>
          </div>

          <div className="right">
            <div className='price red'>$20</div>
            <div className='datetime'>2023-6-3 15:55</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className='name'>lunch with David</div>
            <div className='description'>lobster lunch</div>
          </div>

          <div className="right">
            <div className='price green'>-$20</div>
            <div className='datetime'>2023-6-3 15:55</div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default App;
