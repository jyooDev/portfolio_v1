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
        badges: ["#DOTNET", "#FULLSTACK"],
        url: "https://goldenrod-attic-1f4.notion.site/SMRFS-Project-Details-178e58da9d49806daf1aff03cf6861b1" 
    },
    { 
        id: 2, 
        title: "Workorder Automation", 
        img: "/assets/projects/workorder-automation/main.gif",
        badges: ["#DOTNET","#FULLSTACK"],
        url: "https://github.com/jyooDev/reslife_workorder" 
    },
    { id: 3, 
        title: "Self Driving Trackbot", 
        img: "/assets/projects/trackbot/trackbot.png",
        badges: ["#EMBEDDED C", "#SIGNAL PROCESSING"],
        url: "https://github.com/jyooDev/trackbot"  
    },
];

const Projects = () => {
    return (
        <section id="project">
            <h2 className="section__text__p1">Projects</h2>
            <span className="line"></span>
                <Swiper
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
                            <a className="project-link" href={project.url}>
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

                {projects.map((project) => (
                        <div key={project.id} className="mobile-project-list">
                            <a className="project-link" href={project.url}>
                                <img className="project-image" src={project.img} alt={project.title} />
                                <div className="project-badge">
                                        {project.badges.map((badge, index) => (
                                            <p key={index} className={`badge ${badge.toLowerCase().replace(" ", "-").replace("#", "")}-badge`}>
                                            {badge}    </p>
                                        
                                        ))}
                                </div>
                                <h2 className="project-title">{project.title}</h2>
                            </a>
                        </div>
                        ))}     
        </section>
    );
};

export default Projects;
