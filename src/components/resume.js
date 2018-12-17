import React, { Component } from 'react';
class Resume extends Component {
    render() {
        return (
            <div>
                <div className="resume-template">
                    <img
                        src="https://res.cloudinary.com/angelrodriguez/image/upload/v1545009483/rodriguez_angel_resume.png"
                        alt="resume"
                        style={{ width: '70%', height: '70%'}}
                    />
                </div>
            </div>
        )
    }
}

export default Resume;