import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import "@material-ui/core/";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionItem: props.actionItem || "x",
      actionItems: [],
    };
  }

  deleteItem(item) {
    const { actionItems } = this.state;
    const filtered = actionItems.filter((actionItem) => actionItem !== item);
    this.setState({
      actionItems: filtered,
    });
  }

  submit(e) {
    e.preventDefault();
    const { actionItems, actionItem } = this.state;

    this.setState({
      actionItems: [...actionItems, actionItem],
      actionItem: "",
    });
  }

  render() {
    // return (
    //   <h1>
    //     <span foo={3}> Haidren! </span>
    //   </h1>
    // );
    return (
      <Box
        minHeight="30vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding={30}
      >
        <Typography
          variant="h4"
          align="center"
          id="lol"
          style={{ marginBottom: "15px" }}
        >
          Todo List in Heids
        </Typography>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <List>
              {this.state.actionItems.map((item) => (
                <ListItem key={item}>
                  <ListItemText>{item}</ListItemText>
                  <ListItemIcon>
                    <IconButton onClick={() => this.deleteItem(item)}>
                      <Delete />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12}>
            <form onSubmit={(e) => this.submit(e)}>
              <TextField
                size="small"
                fullWidth
                label="Action"
                variant="outlined"
                value={this.state.actionItem}
                onChange={(e) => {
                  this.setState({
                    actionItem: e.target.value,
                  });
                }}
              />
            </form>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={(e) => this.submit(e)}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Form;
