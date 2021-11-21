import React from 'react';

const Info = () => {
    return (
        <main>
            <h1>Tim Rager</h1>
            <h2>Frontend Developer</h2>
            <h3>timrager.website</h3>
            <div className="buttonList">
                <div className="whiteButton">
                    <span><i className="fas fa-envelope"></i></span>
                    Email
                </div>
                <div className="blueButton"><span><i className="fab fa-linkedin"></i></span>LinkedIn</div>
            </div>
            <p className="title">About</p>
            <p className="desc"> I am a frontend developer with a particular interest in making things simple and automating daily tasks.  I try to keep up with security and best practices, and am always looking for new things to learn </p>
            <p className="title">Interests</p>
            <p className="desc"> Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic. </p>
        </main>
    )
}

export default Info;