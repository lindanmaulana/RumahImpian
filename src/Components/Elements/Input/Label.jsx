const Label = (props) => {
    const {name, icons} = props
  return (
    <label htmlFor={name} className="self-center mr-2">
      {icons}
    </label>
  );
};

export default Label;
