import React from "react";
import styled from "styled-components";

import Card, { CardActions, CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";

import { FEEDBACK_MAP } from "../../Constatnts/Feedback";
import { shuffle } from "../../Utils/FeedbackUtils";

import QuestionAnswerIcon from "material-ui-icons/QuestionAnswer";
import DoneIcon from "material-ui-icons/Done";

import FeedbackStepper from "./ProgressStepper";

import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import Avatar from "material-ui/Avatar";

const ContentSection = styled.section`
  padding-top: 100px;
  width: 700px;
`;

const CardHeading = styled(CardContent)`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 10px;
  }
`;

const StepVariant = styled(Avatar)`
  background-color: ${({ checked }) => (checked ? "#4caf50;" : "#bdbdbd")};
`;

const StepListItem = styled(ListItem)`
  &:hover {
    & > div:first-of-type {
      background-color: #4caf50;
    }
  }
`;

class AttestationContainer extends React.Component {
  state = {
    activeStep: 0,
    results: []
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  setStepResult = answer => {
    const { activeStep, results } = this.state;
    const stepResults = [...results];

    stepResults[activeStep] = answer;

    this.setState({ results: stepResults });
    this.handleNext();
  };

  render() {
    const { activeStep, results } = this.state;

    if (results.length === FEEDBACK_MAP.length) {
      return (
        <div>
          <ContentSection>
            <Card>
              <CardHeading>
                <QuestionAnswerIcon />
                <Typography variant="headline" component="h3">
                  Обратная связь
                </Typography>
              </CardHeading>
              <Divider />
              <CardContent>
                <Typography variant="subheading">
                  Спасибо за участие!
                </Typography>
              </CardContent>
            </Card>
          </ContentSection>
        </div>
      );
    }

    const { question, variants } = FEEDBACK_MAP[activeStep];

    const stepVariants = shuffle(
      Object.keys(variants).map(key => ({
        type: key,
        answerText: variants[key]
      }))
    );

    const stepResult = results[activeStep];

    return (
      <div>
        <ContentSection>
          <Card>
            <CardHeading>
              <QuestionAnswerIcon />
              <Typography variant="headline" component="h3">
                Обратная связь
              </Typography>
            </CardHeading>
            <Divider />
            <CardContent>
              <Typography variant="subheading">{question}</Typography>
            </CardContent>
            <List>
              {stepVariants.map(variant => (
                <StepListItem
                  dense
                  button
                  onClick={() => this.setStepResult(variant.type)}
                >
                  <StepVariant checked={stepResult === variant.type}>
                    {stepResult === variant.type ? <DoneIcon /> : variant.type}
                  </StepVariant>
                  <ListItemText primary={variant.answerText} />
                </StepListItem>
              ))}
            </List>
            <Divider />
            <FeedbackStepper
              items={FEEDBACK_MAP}
              handleBack={this.handleBack}
              handleNext={this.handleNext}
              activeStep={activeStep}
              nextEnabled={stepResult}
            />
          </Card>
        </ContentSection>
      </div>
    );
  }
}

export default AttestationContainer;
