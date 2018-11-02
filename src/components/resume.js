import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={6}>
                        <div className="resume-template">
                            <img
                                src="https://res.cloudinary.com/angelrodriguez/image/upload/q_100/v1541122983/angel-rodriguez-resume-digital.png"
                                alt="resume"
                            />
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;