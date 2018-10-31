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
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBVE_RewWE_ZpIEW401Wji9Aaj4PvXtPrYDfRhEmEJ2z4XUSa_Q"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Angel Rodriguez</h2>
                        <h4 style={{color: 'grey'}}>Web Developer</h4>
                        <hr style={{borderTop: '3px solid #83bfb2', width: '50%'}} />
                        <p>I've always been fascinated by tech, in some shape or form. Whether it was building a menu on my laptop, running price changes in a database or livening up a personal website with some HTML. I have been coding for over a year now, and recently, I decided to take a deep dive into a web/software development bootcamp. I realized this was one of the greatest decisions I have ever made. It was also the best investment I could ever make in myself. My passion has always truly been problem solving and tech is one of the best ways to demonstrate problem solving skills. Yes, programming can be difficult; it can test your will and spirit. However, I feel it has shown me what I'm truly made of and how much I can accomplish if I don't give up and simply keep learning and working on new projects.</p>
                        <hr style={{borderTop: '3px solid #83bfb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>123.456.7890</p>
                        <h5>Email</h5>
                        <p>angelr1076@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #83bfb2', width: '50%'}} />

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
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

                    <h2>Experience</h2>

                        <Experience 
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Bachelor of Science in Culinary Arts & Hospitality Studies
                            Graduated Summa Cum Laude. Traveled to several destinations in Europe and studied in both class room environments and hands on training in culinary and hospitality studies."
                        />

                        <Experience 
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="Bachelor of Science in Culinary Arts & Hospitality Studies
                            Graduated Summa Cum Laude. Traveled to several destinations in Europe and studied in both class room environments and hands on training in culinary and hospitality studies."
                        />

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