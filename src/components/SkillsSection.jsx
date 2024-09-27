import './Items.css'

const OtherSkills = ({ skills }) => {
    return (
      <div className="sidebar-item">
        <h3>Other Skills</h3>
        <ul className="other-skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  const SkillsSection = () => {
    const otherSkills = ['Git/Github', 'Material UI / Bootstrap', 'Express',' My Sql', 'MS Excel', 'HTML - CSS', 'JSON - JQuery', 'C#', 'Rest APIs','MVC', 'Object Oriented Programming - OOP'];
  
    return (
      <div>
        <OtherSkills skills={otherSkills} />
      </div>
    );
  };
  
  export default SkillsSection;
  