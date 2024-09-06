import { useAuth0, RedirectLoginOptions } from "@auth0/auth0-react";
import login from "../../assets/login.png";
import logo from "../../assets/logo.png";
import { DarkModeToggle } from "../../component";

interface CustomRedirectLoginOptions extends RedirectLoginOptions {
  screen_hint?: string;
}

const Auth = () => {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = () => {
    loginWithRedirect();
  };
  const handleRegistration = () => {
    loginWithRedirect({
      screen_hint: "signup",
    } as CustomRedirectLoginOptions);
  };
  return (
    <main className="relative flex flex-col justify-center bg-base-300 h-screen">
      <div className="absolute top-10 right-10">
        <DarkModeToggle />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="grid place-items-center gap-2">
          <h1 className="flex items-center gap-2 text-4xl font-bold tracking-widest">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 bg-black p-2 rounded-lg object-cover"
            />
            Just Home
          </h1>
          <p className="text-neutral-400">Find Your dream property</p>
        </div>
        <img src={login} alt="login" className="rounded-box object-cover" />
      </div>
      <div className="mt-10 flex justify-center gap-32">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl mb-4 text-secondary">Login</h3>
          <button onClick={handleLogin} className="btn btn-secondary btn-wide">
            Log In
          </button>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-4xl mb-4 text-neutral-content">Register</h3>
          <button
            onClick={handleRegistration}
            className="btn btn-neutral btn-wide"
          >
            Create account
          </button>
        </div>
      </div>
    </main>
  );
};

export default Auth;
