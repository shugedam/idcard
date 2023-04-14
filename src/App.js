import logo from './123.jpg';
import logo1 from './abc.jpg';
import logo2 from './xyz.png';
import logo3 from './barcode.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='container'>
            <div className='padding'>
                <div className='font'>
                    <div className='companyname'>Axiom Techguru<br></br><span className='tab'>Pvt.Ltd.</span></div>
                        <div className='top'>
                             <img src={logo2}></img>
                        </div>
                         <div className=''>
                              <div className='ename'>
                                <h6 className='p1'>Shubham G Gedam</h6>
                                <h6>WEB Developer</h6>
                              </div>
                              <div className='detail'>
                                   <p><b>Mobile No :</b>9970775229</p>
                                   <p><b>DOB :</b>14/04/2023</p>
                                   <div className='address'><b>Address :</b>30,Gopal Nagar,3rd Bus Stop,Nagpur-440022</div>
                              </div>
                         </div>
                         <div className='signature'>
                          <img src={logo}></img>
                         </div>
                         <div className='barcode'>
                          <img src={logo3}></img>
                         </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
