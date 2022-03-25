import Navbar from "./Navbar";

// Functional React component for Header and Navbar
const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <h1 className="m-0 leading-tight text-6xl text-ddnpblue hover:underline focus:underline text-center">
       Digital Dickens Notes Project 
      </h1>
    </div>
  );
};

export default Header; 


        // <h1
        //   className={
        //     "m-0 leading-tight text-6xl text-ddnpblue hover:underline focus:underline text-center"
        //   }
        // >
        //   Welcome to the{" "}
        //   <a href="https://nextjs.org">Digital Dickens Notes Project!</a>
        // </h1>
