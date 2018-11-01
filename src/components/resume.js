import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://res.cloudinary.com/angelrodriguez/image/upload/v1528903608/3_2.jpg"
                                alt="avatar"
                                style={{height: '300px'}}
                            />
                        </div>
                        <h4 style={{color: 'grey'}}>Web Developer</h4>
                        <hr style={{borderTop: '3px solid #83bfb2', width: '50%'}} />
                        <p>I've worked with JavaScript, jQuery, React, Sass, ActiveRecord, Node.js, JSON, Phaser3, Tiled, SQLite3, Ruby, Rails, Sinatra, Heroku, Firebase, Hugo, Bootsrap, Materialize, HTML5, CSS3, Git and Github</p>
                        <hr style={{borderTop: '3px solid #83bfb2', width: '50%'}} />
                        <h5>Location</h5>
                        <p>Philadelphia, PA</p>
                        <h5>Phone</h5>
                        <p>858.232.3288</p>
                        <h5>Email</h5>
                        <p>angelr1076@gmail.com</p>
                        <h5>Web</h5>
                        <p>angelroddy.com</p>
                        <hr style={{borderTop: '3px solid #83bfb2', width: '50%'}} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Experience</h2>

                        <Experience 
                            startYear={2016}
                            endYear={2017}
                            jobName="Nationwide"
                            jobTitle="Commercial Lines Processor"
                            jobDescription="Initiated a root cause problem-solving objective to target an issue within our origination process that caused a major blockage affecting 100s of agents within the company. Successfully targeted the issue and merged with members of the IT department to finally resolve the impediment. Assigned to special projects to update reference documents in our database that were outdated and required images and modernization of wording and references."
                        />

                        <Experience 
                            startYear={2012}
                            endYear={2016}
                            jobName="Wawa, Inc."
                            jobTitle="Food & Beverage Manager"
                            jobDescription="Led stores to earn Food Safety Risk Assessments and Business Readiness scores in the top 30%. Achieved 50% sales increases in express food service gross profits by implementing new merchandising techniques, such as prominently displaying and sampling slow moving products. Appointed Food Service Efficiency Training by Area Manager, tasked with training new managers."
                        />

                        <h2>Education</h2>

                        <Education 
                            startYear={2018}
                            endYear={2018}
                            schoolName="New York Code & Design Academy"
                            degree="Certification - Web Development/Software Engineering"
                            schoolDescription="Completed 420+ hours of Web Development Intensive Program covering various full-stack technologies and various methodologies including OOP, TDD, pair-programming, AGILE, and SCRUM."
                        />

                        <Education 
                            startYear={2008}
                            endYear={2011}
                            schoolName="Walnut Hill College"
                            degree="Bachelor of Science in Culinary Arts & Hospitality Studies"
                            schoolDescription="Bachelor of Science in Culinary Arts & Hospitality Studies
                            Graduated Summa Cum Laude. Traveled to several destinations in Europe and studied in both class room environments and hands on training in culinary and hospitality studies."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                    <h2>Skills</h2>
                    <Skills 
                        skill="JavaScript"
                        progress={60}
                        />
                    <Skills 
                        skill="Ruby"
                        progress={50}
                        />
                    <Skills 
                        skill="Rails"
                        progress={70}
                        />
                    <Skills 
                        skill="HTML5"
                        progress={90}
                        />
                    <Skills 
                        skill="CSS3"
                        progress={90}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;