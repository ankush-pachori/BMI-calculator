import './App.css';
import React,{useState} from 'react';


function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');


  //logic
  let calcBmi = (e) => {
    e.preventDefault();

    if(weight === 0 || height === 0)
    {
      alert('Please enter valid values');
      return;
    }
    else{
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));
      //
      if(bmi<25){
        setMessage('You are underweight');
      }
      else if(bmi>=25 && bmi<30){
        setMessage('You are a healthy weight');
      }
      else if(bmi>=30){
        setMessage('You are overweight');
      }
    }
  }

//reload
  let reload = (e) => {
    window.location.reload();
  }




  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label><b>Weight (lbs)</b></label>
            <input 
            type='text' 
            placeholder='Enter wieght value' 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label><b>Height (in)</b></label>
            <input 
            type='text' 
            placeholder='Enter hieght value' 
            value={height} 
            onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className='btn' type='submit'>
              Submit
            </button>
            <button className='btn btn-outline' onClick={reload} type='submit'>
              Reload
            </button>
          </div>
          <div className='center'>
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
