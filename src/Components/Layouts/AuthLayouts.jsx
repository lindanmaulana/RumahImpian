import { Fragment } from "react";
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { title, children, type } = props;

  const handleForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-banner">
      <div className="container">
        <div className="relative flex items-center justify-between w-full h-screen">
          <button className="absolute flex px-1 py-1 rounded-full bg-secondary top-20">
            <img
              src="/logo/rumahImpian.svg"
              alt="RUmah Impian"
              className="self-center w-8 h-8"
            />
          </button>
          <div className="w-1/2">
            <h2 className="text-md text-white/70 ">WELCOME MEMBER</h2>
            <h2 className="text-2xl text-secondary">{title} Page RumahImpian</h2>
          </div>
          <div className="flex justify-center w-1/2">
            <form
              onSubmit={handleForm}
              action=""
              className="max-w-xs px-2 py-10"
            >
              <div className="mb-8 text-center">
                <label
                  htmlFor=""
                  className="text-3xl font-semibold text-secondary"
                >
                  {title}
                </label>
                <p className="text-sm text-secondary">
                  Wellcome, Please enter your details
                </p>
              </div>
              {children}
              <div className="flex px-5 py-1 border rounded-md border-white/40 active:border-premier">
                <button className="w-full text-center text-secondary active:text-premier">
                  {type === "register" ? "Login" : "Register"}
                </button>
              </div>

              <div className="flex justify-center py-2 gap-x-2">
                {type === "login" ? (
                  <Fragment>
                    <p className="self-center text-xs opacity-50 text-secondary">
                      Dont have an account?
                    </p>
                    <Link to="/register" className="self-center text-xs text-blue-500">
                      Sign up now
                    </Link>
                  </Fragment>
                ) : (
                  <Fragment>
                    <p className="self-center text-xs opacity-50 text-secondary">
                      Have an account?
                    </p>
                    <Link to="/login" className="self-center text-xs text-blue-500">
                      Sign In
                    </Link>
                  </Fragment>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
