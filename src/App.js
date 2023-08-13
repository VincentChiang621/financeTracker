import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className='basic'>
          <input type="text" placeholder='20 lunch with David' />
          <input type="datetime-local"/>
        </div>
        <div className='description'>
          <input type="text" placeholder='description'/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className='name'>lunch with David</div>
            <div className='description'>lobster lunch</div>
          </div>

          <div className="right">
            <div className='price'>$20</div>
            <div className='datetime'>2023-6-3 15:55</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className='name'>lunch with David</div>
            <div className='description'>lobster lunch</div>
          </div>

          <div className="right">
            <div className='price'>$20</div>
            <div className='datetime'>2023-6-3 15:55</div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default App;
