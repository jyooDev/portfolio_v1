const About = () => {
    return (
        <section id="about">
            <div>
                <h2 className="section__text__p1">About</h2>
                <span className="line"></span>
                <div id="text_container">
                    <p className="about_content">
                        <span className="strong-text"><strong>I am a senior student in Computer Science and Mathematics</strong></span> 
                        with a strong vision to pursue a career as a software developer. 
                        I have experience in the <span className="highligheted-text">entire software development lifecycle</span> and a passion for building impactful, efficient solutions.
                    </p>  
                    <p className="about_content">
                        <strong>I am a continuous learner.</strong> During my role as a <strong>DevOps Intern at ALLETE in 2024</strong>, I earned the <span className="highligheted-text">CKAD (Certified Kubernetes Application Developer)</span> certification to contribute more professionally to my team and organization.
                    </p>
                    <p className="about_content">
                        <strong>I am passionate about enhancing and automating inefficient processes.</strong> While working as a front-desk staff on campus, I noticed a redundant manual workflow for maintenance work order submissions, which involved manually copying emails into Excel and PDF files for printing. To address this, I have <span className="highligheted-text">developed a web application to streamline and automate the entire workflow</span>.
                    </p>
                </div>
            </div>
            <div className="my_skills">
                <p className="section__text__p1">My Skills</p>
                <span className="skill-line"></span>
                <div className="skills-grid">
                    <div className="skill-container">
                        <img src="/assets/skills/python.png" alt="Python" />
                        <p>Python</p>
                    </div>
                    <div className="skill-container">
                        <img src="/assets/skills/dotnet.png" alt=".Net" />
                        <p>.Net</p>
                    </div>
                    <div className="skill-container">
                        <img src="/assets/skills/git.png" alt="Git" />
                        <p>Git Source Control</p>
                    </div>
                    <div className="skill-container">
                        <img src="/assets/skills/javascript.png" alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-container">
                        <img src="/assets/skills/mssql.png" alt="MS SQL" />
                        <p>MS SQL</p>
                    </div>
                    <div className="skill-container">
                        <img src="/assets/skills/docker.png" alt="Docker" />
                        <p>Docker</p>
                    </div>
                    <div className="skill-container">
                        <img src="/assets/skills/kubernetes.png" alt="Kubernetes" />
                        <p>Kubernetes</p>
                    </div>
                    <div className="skill-container">
                        <img src="/assets/skills/html.png" alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-container">
                        <img src="/assets/skills/css.png" alt="CSS" />
                        <p>CSS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
