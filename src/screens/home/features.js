import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FeatureCard = styled.div``;

class Features extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.featureArray.map(feature => {
          return (
            <FeatureCard key={feature.title}>
              <img src={feature.icon} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          );
        })}
      </Wrapper>
    );
  }
}

Features.propTypes = {
  featureArray: PropTypes.array
};

export default Features;
