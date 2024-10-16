import React from 'react';
import styled from 'styled-components';
import resume from '../assets/resume.pdf'

const Button = styled.button`
  background-color: #c8ff00;
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:#5d740c;
  }
`;

// #45a049
const DownloadResumeButton = () => {
  return (
    <div>
      <a href={resume} download="Roohi_Ali_Resume.pdf">
        <Button>Download Resume</Button>
      </a>
    </div>
  );
};

export default DownloadResumeButton;
