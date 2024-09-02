import { Outlet } from "react-router-dom";
import login from "../../assets/login.png";
import logo from "../../assets/logo.png";
import { DarkModeToggle } from "../../component";
const Auth = () => {
  return (
    <main className="relative flex h-screen">
      <div className="absolute top-10 right-10">
        <DarkModeToggle />
      </div>
      <div className="hidden lg:flex flex-1 bg-base-300 flex-col gap-10 justify-center items-center">
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
      <section className="flex-1">
        <Outlet />
      </section>
    </main>
  );
};

export default Auth;
