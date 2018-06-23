import React from "react";
import styled from "styled-components";

import { GO_MAP } from "../../Constatnts/Maps";
import Category from "./Category";

const ContentSection = styled.section`
  padding-top: 100px;
`;

class AttestationContainer extends React.Component {
  state = {
    results: {}
  };

  setActive = category => index => choice => {
    const { results } = this.state;
    const categoryResults = results[category] || [];

    categoryResults[index] = choice;

    this.setState({ results: { ...results, [category]: categoryResults } });
  };

  render() {
    const { data } = GO_MAP;
    const { results } = this.state;
    return (
      <div>
        <ContentSection>
          {data.map((item, index) => (
            <Category
              name={item.name}
              questions={item.children}
              key={index}
              results={results[item]}
              setActive={this.setActive(item)}
            />
          ))}
        </ContentSection>
      </div>
    );
  }
}

export default AttestationContainer;
