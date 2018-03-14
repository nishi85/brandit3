import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <div className="contact-container">
                <div className="contact">
                    <div className="contact-text">
                        <img src="./dev/assets/brandItLogoOrange.png" alt="" />
                        <h2><span className="orangeText">BrandIt</span></h2>
                        <p> 213 Sterling Road,</p>
                        <p> Studio 200B Toronto, </p>
                        <p> ON M6R 2B2 </p>
                        <p> Canada </p>

                        <p><i className="fas fa-phone" data-fa-transform="rotate-90"></i> 123-456-7890</p>
                        <p><i className="fas fa-at"></i> hello@brandit.com</p>

                        <a href=""><i className="fab fa-facebook-square fa-2x"></i></a>
                        <a href=""><i className="fab fa-twitter-square fa-2x"></i></a>
                        <a href=""><i className="fab fa-instagram fa-2x"></i></a>
                    </div>
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.650889304256!2d-79.44752498483443!3d43.655431260304994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3447d0a7fb69%3A0x90c25118b009da7c!2s213+Sterling+Rd%2C+Toronto%2C+ON+M6R+2B2!5e0!3m2!1sen!2sca!4v1520380301988"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;