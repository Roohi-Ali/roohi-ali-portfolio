import React from "react";
import "./Resume.css";
import avatar from "../../assets/logoR.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ItemsSection from "../ItemBar"
import SkillsSection from '../SkillsSection'
import DownloadResumeButton from '../DownloadResumeButton'

const Resume = () => {
    return (
        <div className="resume-main">
            <section className="resume-sidebar">
                <div className="avatarImg"><img className="img-avatar" src={avatar} alt="avatar" /></div>

                <div className="bottomLineSeparator sidebar-item">
                    <h3>Contact</h3>
                    <div className="padding-20"><LocalPhoneIcon/><span className="padding-20">+92 334 3881010</span></div>
                    <div className="padding-20"><LocationOnIcon /><span className="padding-20">Karachi, Pakistan</span></div>
                    <div className="padding-20"><a href="mailto:roohi.shama@gmail.com"><EmailIcon /><span className="padding-20">roohi.shama@gmail.com</span></a></div>
                    
                    <div className="padding-20"><a href="https://www.linkedin.com/in/roohialikamdi/" target="_blank"rel="noopener noreferrer"><LinkedInIcon /><span className="padding-20">LinkedIn</span></a></div>
                    <div className="padding-20"><a href="https://github.com/Roohi-Ali" target="_blank" rel="noopener noreferrer"><GitHubIcon /><span className="padding-20">GitHub</span></a></div>
                    <br/>
                </div>

                <div className="bottomLineSeparator sidebar-item">
                    
                    <ItemsSection/>
                    <br/>
                </div>
                <div className="sidebar-item">    
                    <SkillsSection/>
                    <br/>
                </div>

            </section>

            <section className="resume-content">
                <h1>Roohi Ali Kamdi</h1>
                <table>
                    
                    <thead>
                        <tr >
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="colored-bg">
                            <td >Consulnet Corporation ,Karachi. Pakistan - <i>CodeGirls Intern</i></td>
                            <td className="td-date">Aug 2023 - May 2024</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <ul>
                                    <li className="indented">
                                        Completed intensive training at CodeGirls, mastering front-end
                                        and MERN stack development.
                                    </li>
                                    <li className="indented">
                                        Following links leads to my projects, created as part of the
                                        CodeGirls program:
                                        <ul>
                                            <div>
                                                <li className="indented linkColor">
                                                    <a
                                                        href="http://social-media.cnet-web.consulnet.net/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="indented">Social Media App</span>
                                                    </a>
                                                    <a
                                                        href="https://github.com/Roohi-Ali/SocialMediaApp-Hyve"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="indented">View on GitHub</span>
                                                    </a>
                                                </li>
                                            </div>
                                            <div>
                                                <li className="indented linkColor">
                                                    <a
                                                        href="https://roohi-ali.github.io/Maze_Project_TS/build/index.html"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="indented">Maze Game - Typescript</span>
                                                    </a>

                                                    <a
                                                        href="https://github.com/Roohi-Ali/Maze_Project_TS"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="indented">View on GitHub</span>
                                                    </a>
                                                </li>
                                            </div>
                                            <div>
                                                <li className="indented linkColor">
                                                    <a
                                                        href="https://roohi-ali.github.io/Meal-App/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="indented">Optimized Meal App in React</span>
                                                    </a>

                                                    <a
                                                        href="https://github.com/Roohi-Ali/Meal-App"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span className="indented">View on GitHub</span>
                                                    </a>
                                                </li>
                                            </div>
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="colored-bg">
                            <td >Emirates Skywards, Dubai, UAE - <i>Data Mining and Research Officer</i></td>
                            <td className="td-date">Dec 2010 - Aug 2011</td>
                        </tr>
                        <tr >
                            <td colSpan="2">
                                <ul>
                                    <li className="indented">
                                        As part of the MIS team, I was responsible for delivering
                                        various reports within Skywards as well as other commercial
                                        divisions of Emirates.
                                    </li>
                                    <li className="indented">
                                        Conducted data analysis and research to identify trends and
                                        patterns
                                    </li>
                                    <li className="indented">
                                        Used Crystal Reports Software to generate reports and optimize
                                        query creation
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="colored-bg">
                            <td >Sultan Abdul Rahman Contracting Co., Dubai, UAE - <i>Project Team Lead</i></td>
                            <td className="td-date">Sep 2007 - Jun 2008</td>
                        </tr>

                        <tr>
                            <td colSpan="2">
                                <ul>
                                    <li className="indented">
                                        Worked with ERP software - Microsoft Dynamics SL 7.0 for SARCO
                                        as a System Analyst, Database Manager and Developer
                                    </li>
                                    <li className="indented">
                                        Investigating and assessing the use of Microsoft ERP
                                        technology
                                    </li>
                                    <li className="indented">
                                        Experience of working with SQL Server 2005.
                                    </li>
                                    <li className="indented">
                                        Development of a dashboard, showing company’s key performance
                                        indicators (KPIs), using SharePoint technologies
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th>Education</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="colored-bg">
                            <td>University of Wollongong in Dubai (UOWD) - Dubai, UAE</td>
                            <td>Sep 2006 - Dec 2009</td>
                        </tr>
                        <tr>

                            <td className="size-16" colSpan="2">Bachelors in Computer Science (BCs) - Software Engineering</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <li className="indented">
                                    Outstanding Academic Excellence Scholarship (100%), University of Wollongong Dubai
                                </li>
                                <li className="indented">
                                    Dean’s Merit List (Rewarded to only 5% of the top grade students)
                                </li>
                            </td>
                        </tr>
                        <tr className="colored-bg">
                            <td>St Mary's High School - Dubai, UAE</td>
                            <td>Sep 2004 - Dec 2006</td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="size-16">A Levels</td>
                        </tr>
                        <tr><td colSpan="2">
                            <li className="indented">
                                All A's - (Physics, Maths, Computers, Accounts)
                            </li></td>
                        </tr>
                    </tbody>
                </table>
                <DownloadResumeButton/>
            </section>
            
        </div>
    );
};

export default Resume;
