import React from "react";
import styled from "styled-components";

import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List";
import Avatar from "material-ui/Avatar";

import WorkIcon from "material-ui-icons/Work";

import DescriptionIcon from "material-ui-icons/Description";
import BuildIcon from "material-ui-icons/Build";
import FavoriteIcon from "material-ui-icons/Favorite";

import Radio, { RadioGroup } from "material-ui/Radio";
import IconButton from "material-ui/IconButton";
import Tooltip from "material-ui/Tooltip";

const ActionRadioGroup = styled.div`
  flex-direction: row;
`;

const QuestionItemWrapper = styled(ListItem)`
  padding: 8px 24px;

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { setActive } = this.props;

    return (
      <QuestionItemWrapper>
        <Avatar>
          <WorkIcon />
        </Avatar>
        <ListItemText primary={this.props.text} />
        <ActionRadioGroup>
          <Tooltip title="Знаю">
            <IconButton onClick={() => setActive(0)}>
              <DescriptionIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Использую">
            <IconButton onClick={() => setActive(1)}>
              <BuildIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Хочу использовать">
            <IconButton onClick={() => setActive(2)}>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
        </ActionRadioGroup>
      </QuestionItemWrapper>
    );
  }
}

export default Question;
