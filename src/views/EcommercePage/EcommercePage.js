/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionLatestOffers from "views/EcommercePage/Sections/SectionLatestOffers.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";

const useStyles = makeStyles(styles);

export default function EcommercePage() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Revetir"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "rose",
        }}
      />
      <Parallax
        image={require("assets/img/examples/cov3.png").default}
        //filter="dark"
        small
      >
        
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionLatestOffers />
      </div>
      </div>
  );
}
