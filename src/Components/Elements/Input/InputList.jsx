
const InputList = (props) => {
    const {type, name, placeholder} = props
  return (
    <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="self-center bg-transparent outline-none text-secondary placeholder:text-xs cursor-white caret-secondary"
      />
  )
}

export default InputList
