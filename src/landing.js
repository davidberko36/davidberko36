import Footer from "./footer";
import Navbar from "./navbar";

const Landing = () => {
    return (
        <> 
        <div className="bg-black text-white w-1/2 ml-96 mt-10 h-12 p-0.5">
        <p className="mt-2">Grade Reporting System</p>
      </div>
      <div className="mt-2">
      <Navbar/>
      </div>
      <h1 className="text-2xl mt-4">Welcome To The Grade Reporting System</h1>
      <h2 className="text-xl">Please Log In To Continue</h2>
      <button className="bg-black text-white mt-10 w-24  rounded-lg">Log In</button>
      <Footer/>
      </>
     );
}
 
export default Landing;