import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import InputForm from "../../Elements/Input/Index";
import InputPassword from "../../Elements/Input/InputPassword";

const Login = () => {

  return (
    <div className="flex flex-col mb-10 gap-y-3">
      <InputForm
        icons={<IoPersonOutline className="w-5 h-5 text-secondary" />}
        type="text"
        placeholder="Insert Your Username"
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

export default Login;
