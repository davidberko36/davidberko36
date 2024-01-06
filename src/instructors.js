import Footer from "./footer";
import Navbar from "./navbar";

const Instructors = () => {

    const lecturers = [
        {name: "Bugs Bunny", mail: "Bugsbunny@ug.edu.gh", phone:"233000069420", officeHours: "7:00 - 9:00, Monday-Thursday"},
        {name: "Daffy Duck", mail: "Daffyisdagoat@ug.edu.gh", phone:"23300042069", officeHours: "11:00-15:00, sometimes lol"}
    ]
    return ( 
        <div>
            <Navbar/>
            <h1>Instructor Information</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th className="p-4">Lecturer name</th>
                        <th className="p-4">Mail</th>
                        <th className="p-4">Phone number</th>
                        <th className="p-4">Office Hours</th>
                    </tr>  
                    </thead>
                    <tbody>
                        {lecturers.map((lecturers, index) => (
                            <tr key={index}>
                                <td>{lecturers.name}</td>
                                <td>{lecturers.mail}</td>
                                <td>{lecturers.phone}</td>
                                <td>{lecturers.officeHours}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Instructors;