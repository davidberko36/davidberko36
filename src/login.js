import {useState} from 'react';
import Footer from './footer';
const Login = () => {
    const [userID, setUserID] = useState('');
    const [pin, setPin] = useState('');

    const handleLogin = () => {
        if (userID.length === 8 && pin.length === 5) {
            alert('Successful login.')
        } else {
            alert('Please enter a valid ID or pin')
        }
    };

    return ( 
        <div>
            <div className="bg-gray-800 w-1/2 text-white ml-96 mt-48 h-48">
            <h2>Login</h2>
            <label>
                 ID:
                <input type="number" value= {userID} onChange={(e) => setUserID(e.target.value)} className='text-black ml-2 mb-10'/>
            </label>
            <br/>
            <label className="">
                PIN:
                <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} className="text-black"/>
            </label>
            <br/>
            <button onClick={handleLogin} className='bg-white text-black mt-8 w-24 rounded-lg'>Login</button>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Login;