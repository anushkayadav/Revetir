/*eslint-disable*/
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";
import axios from 'axios';

import image from "assets/img/bg7.jpg";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const useStyles = makeStyles(loginPageStyle);

export default function LoginPage() {

  // 0 for initial, -1 means failed, 1 means logged in, 2 means registered
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if(status === 2) setStatus(1);
    const response = await axios.post('http://tmmlgpu4.eastus.cloudapp.azure.com:5009/api/v1/query/login', {email, password});
    if(response.data.message === "Invalid Password") setStatus(-1);
    if(response.data.message === "Login Successful") setStatus(1);
    if(response.data.message === "You have been registered succesfully") setStatus(2);
    if(response.data.message === "Login Successful" || response.data.message === "You have been registered succesfully") localStorage.setItem('email', email);
  }


  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  if(status === 1) {
    return <Redirect to="/ecommerce-page"/>
  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Revetir"
        links={<HeaderLinks dropdownHoverColor="info" />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Login</h4>
                  </CardHeader>
                  <p className={classes.description + " " + classes.textCenter}>
                   
                  </p>
                  <CardBody signup>
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Email...",
                        type: "email",
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Password",
                        type: "password",
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    {status === 2 && "You have been registered successfully"}
                    {status === -1 && "Invalid Login credentials"}
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button simple color="primary" size="lg" onClick={login}>
                      {status === 2 ? "Continue" : "Register/Login"}
                    </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          className={classes.footer}
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-login"
                      target="_blank"
                      className={classes.block}
                    >
                   
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=mkpr-login"
                      target="_blank"
                      className={classes.block}
                    >
                      
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                     
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=mkpr-login"
                      target="_blank"
                      className={classes.block}
                    >
                    
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                
                <a
                  href="https://www.creative-tim.com?ref=mkpr-login"
                  target="_blank"
                >
                 
                </a>{" "}
               
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
