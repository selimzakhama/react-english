import React from 'react'

function InputBox({ label, amount, onAmoutChange, onCurrencyChange, currencyOptions = [], selectedCurrency = "usd", amountDisabled = false, currencyDisabled = false, className = "" }) {

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            <div className="w-1/2">

                <label htmlFor={label} className='text-black/40 mb-2 inline-block'>{label}</label>

                <input type="number" name={label} id={label} className='outline-none w-full bg-transparent py-1.5' placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e) => onAmoutChange && onAmoutChange(Number(e.target.value))} />

            </div>


            <div className="w-1/2">

                <label htmlFor="" className='text-black/40 mb-2 inline-block'>Currency Type</label>

                <select name="" id="" disabled={currencyDisabled} className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full' value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                    {currencyOptions.map((currency) => (
                        <option value={currency} key={currency}>{currency.toUpperCase()}</option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default InputBox
