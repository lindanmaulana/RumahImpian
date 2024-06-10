import { Link } from "react-router-dom";

const HeaderSignUp = () => {
  return (
    <div className="hidden lg:flex">
      <Link to="/" className="px-6 py-1 text-base text-secondary">
        DAFTAR
      </Link>
      <Link
        to="/login"
        className="px-6 py-1 text-base bg-secondary text-premier"
      >
        MASUK
      </Link>
    </div>
  );
};

export default HeaderSignUp;
