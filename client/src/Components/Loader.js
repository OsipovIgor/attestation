import React from "react";
import styled from "styled-components";
import { CircularProgress, Typography } from "@material-ui/core";

const Loader = ({ text }) => (
  <Wrapper>
    <CircularProgress />
    {text && <Title component="p">{text}</Title>}
  </Wrapper>
);

export default Loader;

const Wrapper = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled(Typography)`
  margin: 10px 0;
`;