const Profile = () => {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src="/assets/profile.png" alt="Jinah Yoo" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Jinah Yoo</h1>
                <p className="section__text__p2 animated_text">Develope with purpose,</p>
                <p className="section__text__p2 animated_text">Code for fun,</p>
                <p className="section__text__p2 animated_text">Learn every day</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={() => window.open("/assets/resume.pdf")}>
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={() => window.location.href = "#contact"}>
                        Contact Info
                    </button>
                </div>
                <div id="socials-container">
                    <a className="icon" href="https://github.com/jyooDev"><i className="bi bi-github"></i></a>
                    <a className="icon" href="https://www.linkedin.com/in/jinahyoo79/"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </section>
    );
};

export default Profile;
