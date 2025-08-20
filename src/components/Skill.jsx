import '../styles/Skill.css'
import {skills} from '../data/DataSkill';

function Skill() {
    return (
        <section id='skill' style={{padding: '3rem'}}>
            <div className="page-content">
                <div className="container-fluid">
                    <div className="row" style={{padding: "0 200px"}}>
                        <div className="col-md-12 justify-content-center align-items-center d-flex">
                            <h1 className='title-page'>Tech Stack</h1>
                        </div>
                        <div className="row g-4" style={{ padding: '2rem 10rem' }}>
                            {skills.map((skill) => (
                                <div className="col-md-3">
                                    <a href={skill.href} target="_blank" rel="noopener noreferrer">
                                        <div className="skill-wrapper">
                                        <img src={skill.image} alt={skill.name} />
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill