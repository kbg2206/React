import { useState } from 'react'
// import './App.css'
import { InputBox } from './components'
// import { useEffect ,useState} from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount,setAmount] = useState(0)
  const [convertedAmount,setConvertedAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)

  const options  = Object.keys(currencyInfo)

  const swap = ()=>{
    const TempFrom = from;
    setFrom(to)
    setTo(TempFrom);

    const AmountTemp = convertedAmount;
    setConvertedAmount(amount);
    setAmount(AmountTemp)
  }

  const converter = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center " style={{backgroundImage:`url('https://plus.unsplash.com/premium_photo-1723741313198-0c1084da6914?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}} >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => {
              e.preventDefault();   
              converter();
            }}>
              <div className="w-full mb-1">
                  <InputBox label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}/>
                            
              </div>


              <div className="relative w-full h-0.5">
                  <button
                      type="button"
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                      swap
                  </button>
              </div>
              <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            visibleCurrency={(currency) => setTo(currency)}
                        />
                    </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                  Convert {from.toUpperCase()} to {to.toUpperCase()} 
              </button>
            </form>
          </div>
        </div>
    </div>
)};

export default App;
