import { IoPersonOutline, IoMailOutline } from "react-icons/io5";
import InputForm from "../../Elements/Input/Index";
import { Link } from "react-router-dom";
import InputPassword from "../../Elements/Input/InputPassword";

const Register = () => {
  return (
    <div className="flex flex-col mb-10 gap-y-3">
      <InputForm
        icons={<IoPersonOutline className="w-5 h-5 text-secondary" />}
        type="text"
        placeholder="Insert Your Username"
      />
      <InputForm
        icons={<IoMailOutline className="w-5 h-5 text-secondary" />}
        type="email"
        placeholder="Insert Your Email"
      />

      <InputPassword />
      <div className="flex justify-between">
        <Link className="text-xs text-left opacity-50 text-secondary">
          Forgot password!
        </Link>
        <Link to={"/"} className="text-xs opacity-50 text-secondary">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Register;
