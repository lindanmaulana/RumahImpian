import AuthLayouts from "../../Components/Layouts/AuthLayouts";
import Login from "../../Components/Fragments/Auth/Login";

const LoginPages = () => {
  return (
    <AuthLayouts title="Login" type="login">
      <Login />
    </AuthLayouts>
  );
};

export default LoginPages;
