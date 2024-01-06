import Footer from "./footer";
import Navbar from "./navbar";

const Dashboard = () => {
    const courses = [
        { code: "DCIT 201", name: "Programming I", grade: "N/A" },
        { code: "DCIT 203", name: "Digital and Logical Systems Design", grade: "N/A" },
        { code: "DCIT 205", name: "Multimedia and Web Design", grade: "N/A" },
        { code: "DCIT 207", name: "Computer Organization and Architecture", grade: "N/A" },
        { code: "MATH 223", name: "Calculus I", grade: "N/A" },
        { code: "CBAS 210", name: "Academic Writing II", grade: "N/A" }
    ];    

    const missingGrades = courses.filter(course => course.grade === "N/A");

    return (
        <div>
            <Navbar />
            <h1 className="mb-12 mt-10 text-2txl">Welcome To Your Dashboard</h1>
            <div className="flex">
                <div className="bg-gray-800 text-white w-96 h-80 ml-80">
                    <table>
                        <thead>
                            <tr>
                                <th className="p-4">Course Code</th>
                                <th className="p-4">Course Name</th>
                                <th className="p-4">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                <tr key={index}>
                                    <td>{course.code}</td>
                                    <td>{course.name}</td>
                                    <td>{course.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="bg-gray-800 text-white w-96 h-80 ml-8">
                    <h2>Missing Grades</h2>
                    <ul>
                        {missingGrades.map((course, index) => (
                            <li key={index}>
                                {course.code} - {course.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Dashboard;
