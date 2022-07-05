import "./Project.css"
import post from "../data/project.json"
import otherPost from "../data/other-project.json"

function Project(){
    document.title="Rayhan Rusyd | Project"
    return(
        <div className="project container">
            <div className="row">
                {post.map((data) => (
                    <div className="col-30">
                        <div className="project-post">
                            <div className="content">
                                <h1>{data.name}</h1>
                                <p>{data.desc}</p>
                                <a className="btn-card" href={data.link}><i class="bi bi-box-arrow-up-right"></i><span>Explore</span></a> <a href={data.git}><i class="bi bi-github post-icon"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                {otherPost.map((data)=>(
                    <div className="col-30">
                        <div className="project-post">
                            <div className="content">
                                <a href={data.git}><h2><i class="bi bi-box"></i> {data.name}</h2></a>
                                <p>{data.desc}</p>
                                <a className="other-git" href={data.git}><i class="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project