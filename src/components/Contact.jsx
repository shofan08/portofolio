import '../styles/Contact.css'
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id='contact' className='p-5'>
        <div className="page-content">
            <div className="container-fluid">
                <div className="row" style={{padding: "0 200px"}}>
                    <div className="col-md-12 mb-5">
                        <div className="card-title text-center">
                            <h1 className='title-page'>Contact</h1>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-12 justify-content-center align-items-center d-flex">
                                <div className="card p-5 kontak">
                                    <div className="row">
                                        <span className='judul p-5'>Contact me here</span>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-md-2">
                                            <FaEnvelope size={40} color="#8B0712" />
                                        </div>
                                        <div className="col-md-10 align-items-center d-flex">
                                            <span className='desc maroon'>shofannashrulhaq@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-md-2">
                                            <FaLinkedin size={40} color="#8B0712" />
                                        </div>
                                        <div className="col-md-10 align-items-center d-flex">
                                            <a href='https://www.linkedin.com/in/shofan-nashrulhaq-289767151/' target='_blanj' className='desc maroon'>Shofan Nashrulhaq</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact