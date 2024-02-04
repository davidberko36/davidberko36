import Footer from "./footer"
import Navbar from "./navbar";

const Form = () => {
    return(
        <div>
            <Navbar/>
            <div className="bg-gray-800 text-white ml-96 w-1/2 mt-10 h-96">
                <h2 className="mb-3">Report Missing Grades</h2>
                <label className="">
                    Instructor's name:
                    <input type="text" className="text-black ml-1 mb-4"/>
                </label>
                <br/>
                <label className="ml-7">
                    Course name:
                    <input type="text" className="text-black ml-1 mb-4"/>
                </label>
                <br/>
                <label className="ml-7">
                    Course code:
                    <input type="text" className="text-black ml-2 mb-4"/>
                </label>
                <br/>
                <label className="">
                    Expected Grade:
                    <input type="text" className="text-black ml-3"/>
                </label>
                <br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Form;