import InputList from "./InputList";
import Label from "./Label";

const InputForm = (props) => {
    const {icons, type, placeholder, name} = props
    
  return (
    <div className="flex px-5 py-1 border rounded-md border-white/40">
      <Label icons={icons} name={name} />
      <InputList type={type} id={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
