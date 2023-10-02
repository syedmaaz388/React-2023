import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable  = false,
}) {
    const amountInputId = useId()
  return (
    <div>
      <label htmlFor={amountInputId} >
        {label}
      </label>
      <input id={amountInputId}  type="number" 
      placeholder='Amount'
      disabled={amountDisable}
      value={amount}
      onChange={(e) => onAmountChange && 
      onAmountChange(Number(e.target.value))}
       />
       <p>Currency Type</p>
       <select value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}  disabled={currencyDisable}>
       {currencyOptions.map((currency) => (
        <option  key={currency} value={currency}>
            {currency}
        </option>
       ))}
       </select>
    </div>
  )
}

export default InputBox
