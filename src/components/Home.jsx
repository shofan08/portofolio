import '../styles/Home.css'
import profile from '../assets/profile.jpeg'

function Home() {
  return (
    <section id='home'>
        <div className="page-content">
            <div className="container-fluid">
                <div className="row" style={{padding: "0 200px"}}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6 d-flex justify-content-center align-items-center animate__animated animate__fadeInLeft" style={{minHeight: "90vh"}}>
                                <div className="card">
                                    <img src={profile} className='profile' alt='profile'/>
                                </div>
                            </div>
                            <div 
                                className="col-md-6 d-flex justify-content-end align-items-center" 
                                style={{ minHeight: "90vh" }}
                                >
                                <div className="card p-5 animate__animated animate__slideInRight">
                                    <h3 className="fs-2 animate__animated animate__fadeInUp animate__delay-1s">
                                    Hi, my name is
                                    </h3>
                                    <h1 className="title-page maroon animate__animated animate__bounceIn animate__delay-2s">
                                    Shofan Nashrulhaq
                                    </h1>
                                    <span className="fs-4 animate__animated animate__fadeInDown animate__delay-3s">
                                    I am an experienced web programmer with over 4 years of experience developing and maintaining web applications. I adapt easily to new environments, can work in a team, and am ready to learn current emerging technologies.
                                    </span>
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

export default Home