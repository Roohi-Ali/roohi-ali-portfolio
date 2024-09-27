import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #c8ff00ac;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
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
      <a href="/resume.pdf" download="Roohi_Ali_Resume.pdf">
        <Button>Download Resume</Button>
      </a>
    </div>
  );
};

export default DownloadResumeButton;
