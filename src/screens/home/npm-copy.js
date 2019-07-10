import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeroNPMWrapper = styled.div`
  flex-direction: row;
  justify-content: stretch;
  width: 30rem;
  display: flex;
  flex: 1 0 auto;
`;

const HeroNPMCopy = styled.p`
  width: 22rem;
  height: 4rem;
  color: #383838;
  background-color: #d5d5d5;
  color: black;
  text-align: left;
  padding: 0.33rem 1.5rem;
  line-height: 3.44rem;
  font-size: 14px;
  letter-spacing: 0.2px;
  margin: 0;
  flex: 1 0 auto;
`;

const HeroNPMButton = styled.button`
  width: 8rem;
  height: 4rem;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: #383838;
  border: 0;
  text-transform: uppercase;
  cursor: copy;
  &:hover {
    background-color: #f6f6f6;
  }
`;

const NpmCopy = ({ text = "npm install spectacle" }) => {
  const copyFallBack = () => {
    const copyTextArea = document.createElement("textArea");
    copyTextArea.value = text;
    document.body.appendChild(copyTextArea);
    copyTextArea.focus();
    copyTextArea.select();
    document.execCommand("copy");
    copyTextArea.remove();
  };

  const handleCopy = e => {
    if (!navigator.clipboard) {
      copyFallBack();
      e.preventDefault();
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <HeroNPMWrapper>
      <HeroNPMCopy>npm install spectacle</HeroNPMCopy>
      <HeroNPMButton onClick={handleCopy}>copy</HeroNPMButton>
    </HeroNPMWrapper>
  );
};

NpmCopy.propTypes = {
  text: PropTypes.string
};

export default NpmCopy;
