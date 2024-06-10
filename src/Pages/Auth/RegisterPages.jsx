import AuthLayouts from "../../Components/Layouts/AuthLayouts";
import Register from "../../Components/Fragments/Auth/Register";

const RegisterPages = () => {
  return (
    <AuthLayouts title="Register" type="register">
      <Register />
    </AuthLayouts>
  );
};

export default RegisterPages;
