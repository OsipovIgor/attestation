import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Dialog,
  DialogActions,
  DialogContent as MUIDialogContent,
  DialogTitle,
  TextField,
  Grid,
  Card,
  Avatar as MUIAvatar,
  CardContent,
  CardActions as MUICardActions,
  Button,
  ListItem,
  Typography } from "@material-ui/core";
import { PLATFORMS_MOCK } from "../../Constants/Platforms";
import Sources from "../../Sources/Sources";
import Loader from "../../Components/Loader";

class PlatformContainer extends React.Component {
  state = {
    editMode: false, // true - edit, false - add
    id: null, // текущий раздел, открытый на редактирование
    loading: true,
    open: false, // модалка добавления платформы
    name: "", // Название добавляемого раздела
    platforms: []
  };

  modalClose = () => {
    this.setState({ open: false, name: "" });
  };

  // значение добавляемого поля
  setName = name => this.setState({ name });
  // реагирует на ввод в поле
  handleChangeName = e => this.setName(e.target.value);

  // цвет аватара для карты
  getRandomColor = () => {
    const colors = ["#2882E3", "#D07131", "#D04962", "#35AF51", "#4565AF", "#A749AF"];
    return colors[Math.round(Math.random() * (colors.length - 1))];
  };

  getData = () => {
    this.setState({ loading: true });
    Sources.getPlatformList()
      .then(response => {
        this.setState({ platforms: response.data, loading: false })
      })
      .catch(error => {
        if(error.response && error.response.status === 401) {
          window.location.href="/auth/login";
        }
      })
  };

  componentDidMount() {
    this.getData();
  }

  // Открытие модалки на редактирование раздела
  openEditMode = (id, name) => () => {
    this.setState({ open: true, editMode: true, name, id })
  };

  // Открытие модалки на добавление раздела
  openAddMode = () => {
    this.setState({ open: true, editMode: false, name: "" })
  };

  // Добавление раздела
  addPlatform = () => {
    Sources.addPlatform(this.state.name)
      .then(response => {
        // перезагружаем список
        this.getData();
      })
      .catch(error => {
        if(error.response && error.response.status === 401) {
          window.location.href="/auth/login";
        }
      });

    this.modalClose();
  };

  // Редактировать платформу
  editPlatform = () => {
    const { id, name } = this.state;

    Sources.editPlatform(id, name)
      .then(response => {
        // перезагружаем список
        this.getData();
      })
      .catch(error => {
        if(error.response && error.response.status === 401) {
          window.location.href="/auth/login";
        }
      });

    this.modalClose();
  };


  // Удаление раздела
  deletePlatform = id => () => {
    Sources.deletePlatform(id)
      .then(response => {
        // перезагружаем список
        this.getData();
      })
      .catch(error => {
        if(error.response && error.response.status === 401) {
          window.location.href="/auth/login";
        }
      });
  };

  renderModal =  () => {
    const { open, name, editMode } = this.state;

    return(
      <Dialog
        open={this.state.open}
        onClose={this.modalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{editMode ? "Редактирование раздела" : "Добавление раздела"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Название"
            defaultValue={name}
            onChange={this.handleChangeName}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.modalClose} color="primary">
            Отмена
          </Button>
          <Button onClick={editMode ? this.editPlatform : this.addPlatform } color="primary" variant="raised">
            {editMode ? "Сохранить" : "Добавить"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  render() {
    if(this.state.loading) return <Loader text="Идёт загрузка данных..."/>;

    return (
      <Grid container spacing={24}>
        {this.state.platforms.map((platform, index) => (
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
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={this.deletePlatform(platform.id)}>
                  Удалить
                </Button>
                <Button size="small" color="primary" onClick={this.openEditMode(platform.id, platform.name)}>
                  Редактировать
                </Button>
                <StyledLink to={`/platform/${platform.id}`}>
                  <Button size="small" color="primary">
                    Открыть
                  </Button>
                </StyledLink>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AddPlatform button onClick={this.openAddMode}>Добавить раздел</AddPlatform>
        </Grid>
        {
          this.renderModal()
        }
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

const CardActions = styled(MUICardActions)`
  justify-content: flex-end;
`;

const Avatar = styled(MUIAvatar)`
  background-color: ${p => p.color};
  color: #fff;
  margin-right: 20px;
`;

const AddPlatform = styled(ListItem)`
  min-height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  border: 2px dashed #ddd;
  height: 100%;
  color: ${p => p.theme.palette.mainColor};
  
  &:hover {
    background: #fff;
    border-color: ${p => p.theme.palette.mainColor};
  }
`;

const DialogContent = styled(MUIDialogContent)`
  width: 400px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
