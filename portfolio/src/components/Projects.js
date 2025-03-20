import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const projects = [
    { 
        id: 1, 
        title: "Manufacturing ERP", 
        img: "/assets/projects/smrfs/google-form-integration.gif",
        badges: ["#DOTNET", "#FULLSTACK"] 
    },
    { 
        id: 2, 
        title: "Project 2", 
        img: "/assets/projects/smrfs/google-form-integration.gif",
        badges: ["#DOTNET","#FULLSTACK"],
    },
    { id: 3, 
        title: "Project 3", 
        img: "/assets/projects/smrfs/google-form-integration.gif",
        badges: ["#EMBEDDED C"] 
    },
];

const Projects = () => {
    return (
        <section id="project">
            <h2 className="section__text__p1">Projects</h2>
            <span className="line"></span>
            <div className="swiper project-container">
                <Swiper className="project-wrapper"
                modules={[Navigation, Pagination]}
                loop={true}
                spaceBetween={20}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }}    
                }>                   
                        {projects.map((project) => (
                        <SwiperSlide key={project.id} className="project-list">
                            <a className="project-link" href="">
                                <img className="project-image" src={project.img} alt={project.title} />
                                <div className="project-badge">
                                        {project.badges.map((badge, index) => (
                                            <p key={index} className={`badge ${badge.toLowerCase().replace(" ", "-").replace("#", "")}-badge`}>
                                            {badge}    </p>
                                        
                                        ))}
                                </div>
                                <h2 className="project-title">{project.title}</h2>
                            </a>
                        </SwiperSlide>
                        ))}                    
                </Swiper>
                
            </div>
        </section>
    );
};

export default Projects;
