import '../styles/Project.css'
import {projects} from '../data/DataProject';


function Project() {
  return (
    <section id='project'>
        <div className="page-content">
            <div className="container-fluid">
                <div className="row" style={{padding: "0 200px"}}>
                    <div className="col-md-12 justify-content-center align-items-center d-flex">
                        <h1 className='title-page'>Project</h1>
                    </div>
                    <div className="row mb-5 ">
                        <div id="carouselExample" className="carousel slide mt-5" data-bs-ride="carousel">

                            {/* gambar */}
                            <div className="carousel-inner">
                                {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                                >
                                    <img
                                        src={project.image}
                                        className="d-block mx-auto img-project w-75"
                                        alt={`Project ${project.id}`}
                                    />
                                </div>
                                ))}
                            </div>

                            <div className="carousel-indicators position-static mt-3 text-center">
                                {projects.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselExample"
                                    data-bs-slide-to={index}
                                    className={`rounded-circle ${index === 0 ? "active" : ""}`}
                                    aria-current={index === 0 ? "true" : "false"}
                                    aria-label={`Slide ${index + 1}`}
                                    style={{ width: "10px", height: "10px" }}
                                ></button>
                                ))}
                            </div>

                            {/* kontrol kiri-kanan */}
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project