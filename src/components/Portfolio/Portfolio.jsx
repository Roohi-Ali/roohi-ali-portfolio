import React from 'react';
import './Portfolio.css'


const Portfolio = () => {
  // Array of project objects
  const projects = [
    {
      name: 'Social Media App - Hyve',
      image: '/images/hyve.png',
      hoverImage: '/images/hyve-hover.png', // Image to show on hover
      website: 'http://social-media.cnet-web.consulnet.net/', // Replace with actual project URL
      github: 'https://github.com/Roohi-Ali/SocialMediaApp-Hyve', // GitHub repo link
      description: 'Built with React, Node.js, Firebase, Material UI',
    },
    {
      name: 'Maze Game in Typescript',
      image: '/images/mazegame.png',
      hoverImage: '/images/mazegame-hover.png',
      website: 'https://roohi-ali.github.io/Maze_Project_TS/build/index.html',
      github: 'https://github.com/Roohi-Ali/Maze_Project_TS',
      description: 'Built with Typescript on VS Code',
    },
    {
      name: 'Optimized Meal App',
      image: '/images/mealapp.png',
      hoverImage: '/images/mealapp-hover.png',
      website: 'https://roohi-ali.github.io/Meal-App/',
      github: 'https://github.com/Roohi-Ali/Meal-App',
      description: 'Built with React, Javascript, Using Context API',
    },
  ];

  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          {/* Image that links to the website */}
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <div className="image-wrapper">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <img
                src={project.hoverImage}
                alt={`${project.name} hover`}
                className="project-hover-image"
              />
            </div>
          </a>
          {/* Project Name */}
          <p className="project-name">{project.name}</p>

          {/* GitHub Repo Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View GitHub Repo
          </a>

          {/* Project description */}
          <div className="project-description">
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
