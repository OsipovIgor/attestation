import React from "react";
import styled from "styled-components";
import {
  Grid,
  Card,
  Avatar as MUIAvatar,
  CardContent,
  CardActions,
  Button,
  Typography } from "@material-ui/core";
import { PLATFORMS_MOCK } from "../../Constants/Platforms";
import Sources from "../../Sources/Sources";


class PlatformContainer extends React.Component {
  getRandomColor = () => {
    const colors = ["#2882E3", "#D07131", "#D04962", "#35AF51", "#4565AF", "#A749AF"];
    return colors[Math.round(Math.random() * (colors.length - 1))];
  };

  // componentDidMount() {
  //   Sources.getPlatformList()
  //     .then(response => {
  //       console.log("response", response);
  //     })
  //     .catch(error => {
  //       console.error("ERROR", response);
  //     })
  // }

  render() {
    return (
      <Grid container spacing={24}>
        {PLATFORMS_MOCK.map((platform, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardContent>
                <CardHeader>
                  <Avatar color={this.getRandomColor()} aria-label="Recipe">
                    {platform.name[0]}
                  </Avatar>
                  <Typography gutterBottom variant="headline" component="h2">
                    {platform.name}
                  </Typography>
                </CardHeader>
                <Typography component="p">
                  {platform.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Редактировать
                </Button>
                <Button size="small" color="primary">
                  Открыть
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default PlatformContainer;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled(MUIAvatar)`
  background-color: ${p => p.color};
  color: #fff;
  margin-right: 20px;
`;

