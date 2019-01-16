import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BodyCopy } from "../../components/body-copy";
import { Button } from "../../components/button";
import { SectionTitle } from "../../components/section-title";
import { Wrapper } from "../../components/wrapper";

const OutterWrapper = styled.div`
  background: #FC6986;
  border-bottom: 1rem solid rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 -1rem 0 rgba(0, 0, 0, 0.2);
`;

class GetStarted extends React.Component {
  render() {
    const { getStartedObj } = this.props;

    return (
      <OutterWrapper>
        <Wrapper>
          <SectionTitle>Get Started</SectionTitle>
          <BodyCopy>{getStartedObj.description}</BodyCopy>
          <Button href={getStartedObj.link}>Documentation</Button>
        </Wrapper>
      </OutterWrapper>
    );
  }
}

GetStarted.propTypes = {
  getStartedObj: PropTypes.object
};

export default GetStarted;
