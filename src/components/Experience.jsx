import '../styles/Experience.css'
import bsp from '../assets/BSP.png'
import bjbs from '../assets/bank-bjb-syariah.png'

function Experience() {
  return (
    <section id='experience'>
        <div className="page-content">
            <div className="container-fluid">
                <div className="row" style={{padding: "100px 200px"}}>
                    <div className="col-md-12 mb-5">
                        <div className="card-title text-center">
                            <h1 className='title-page'>Work Experience</h1>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-6 justify-content-center align-items-center d-flex animate__animated animate__fadeInLeft">
                                <div className="card p-5">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3 className='fw-bold'>Bee Solution Partners</h3>
                                        </div>
                                        <div className="col-md-4 text-right">
                                            <img src={bsp} alt="Logo" className='rounded-circle logo-company'/>
                                        </div>
                                    </div>
                                    <h5 className='fw-bold' style={{color: "#8B0712"}}>Jan 2019 - Current</h5>
                                    <h5 className='fw-bold' style={{color: "#8B0712"}}>Programmer</h5>
                                    <span className='desc' style={{color: "white"}}>I work in this company to improve my skills in web development and representing data into visual forms.</span>
                                </div>
                            </div>
                            <div className="col-md-6 justify-content-center align-items-center d-flex animate__animated animate__fadeInRight">
                                <div className="card p-5">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3 className='fw-bold'>Bank BJB Syariah</h3>
                                        </div>
                                        <div className="col-md-4 text-right">
                                            <img src={bjbs} alt="Logo" className='rounded-circle logo-company'/>
                                        </div>
                                    </div>
                                    <h5 className='fw-bold' style={{color: "#8B0712"}}>Jan 2022 - Current</h5>
                                    <h5 className='fw-bold' style={{color: "#8B0712"}}>Frontend Developer (Outsourcing)</h5>
                                    <span className='desc'>I contribute as Front End in application development and in creating new applications.</span>
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

export default Experience