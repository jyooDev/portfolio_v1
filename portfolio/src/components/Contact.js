const Contact = () => {
    return (
        <section id="contact">
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-container">
                <div className="contact-info-inner-container">
                    <div className="contact-icon-box"><i className="bi bi-envelope-fill"></i></div>
                    <p><a href="mailto:jinahyoo2@gmail.com">jinahyoo2@gmail.com</a></p>
                </div>
                <div className="contact-info-inner-container">
                    <div className="contact-icon-box"><i className="bi bi-linkedin"></i></div>
                    <p><a href="https://www.linkedin.com/in/jinahyoo79/">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
