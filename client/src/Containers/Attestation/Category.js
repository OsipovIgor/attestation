import React from "react";
import styled from "styled-components";
import Divider from "material-ui/Divider";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import List from "material-ui/List";

import Question from "./Question";

const CategoryHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const QuestionList = styled(List)`
  width: 100%;
`;

const PanelContent = styled(ExpansionPanelDetails)`
  padding: 0;
`;

const Category = ({ name, questions = [], setActive, results }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <CategoryHeader>
          <Typography variant="subheading">{name}</Typography>
          <Typography>{questions.length}</Typography>
        </CategoryHeader>
      </ExpansionPanelSummary>
      <Divider />
      <PanelContent>
        <QuestionList dense disablePadding>
          {questions.map((question, index) => (
            <Question
              text={question}
              key={index}
              setActive={setActive(index)}
              questionChoice={results && results[index]}
            />
          ))}
        </QuestionList>
      </PanelContent>
    </ExpansionPanel>
  );
};

export default Category;
