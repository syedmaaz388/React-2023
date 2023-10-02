import './App.css';
import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';
function App() {

  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) 
  }


  return (
  <div className="App">
   <div className='box'>
    <div className='card'>
     <form onSubmit={(e) => {
      e.preventDefault();
      convert()
     }}>
     <InputBox
      label={from}
      amount={amount}  
      currencyOptions={options}
      onCurrencyChange={(currency) => setAmount(amount)}
      selectCurrency = {from}
      onAmountChange={(amount) => setAmount(amount)}
      />
      <button onClick={swap}>Swap</button>
      <InputBox
      label={to}
      amount={convertedAmount}  
      currencyOptions={options}
      onCurrencyChange={(currency) => setTo(currency)}
      selectCurrency = {from}
      amountDisable
      />
      <button type='submit'>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
     </form>
    </div>
   </div>
    </div>
  );
}

export default App;
