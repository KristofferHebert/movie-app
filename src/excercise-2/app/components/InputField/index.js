import React from 'react'

const InputField = ({ type, value, name, onChange, className = '', labelClassName = '', checked = false }) => {
  return (
    <label htmlFor={value} className={labelClassName}>
      <input
        type={type}
        id={value}
        name={name}
        value={value}
        className={className}
        checked={checked}
        onChange={onChange}
      /> {value}
    </label>
  )
}
export default InputField
