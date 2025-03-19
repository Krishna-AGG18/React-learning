import React from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCuurencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
 
  return (
      <div className={`bg-black p-3 rounded-lg text-sm flex ${className} text-white`}>
          <div className="w-1/2">
              <label  className="text-white/90 mb-2 inline-block">
                  {label}
              </label>
              <input
                  
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled = {amountDisable}
                  value = {amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-cyan-950 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e) => onCuurencyChange && onCuurencyChange(e.target.value)}
                  disabled = {currencyDisable}
              >
                
                {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}> 
                  {currency}
                  </option>
                ) )}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;
