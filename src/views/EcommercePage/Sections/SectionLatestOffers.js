import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";
import axios from "axios";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function SectionLatestOffers() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://tmmlgpu4.eastus.cloudapp.azure.com:5009/api/v1/query/products"
        );
        console.log(data);
        setProducts(data.products);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>All Products (18)</h2>
        <GridContainer>
          {products.map((product) => {
            return (
              <GridItem md={4} sm={4} key={product.pid}>
                <Card product plain>
                  <CardHeader image plain>
                    <NavLink to={`/product-page/${product.pid}`}>
                      <img src={product.main_image} alt="..." />
                    </NavLink>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${product.main_image})`,
                        opacity: 1,
                      }}
                    />
                  </CardHeader>
                  <CardBody className={classes.textCenter} plain>
                    <h4 className={classes.cardTitle}>{product.brand}</h4>
                    <p className={classes.cardDescription}>
                      {product.product_name}
                    </p>
                  </CardBody>
                  <CardFooter plain>
                    <div className={classes.priceContainer}>
                      <span
                        className={classNames(classes.price, classes.priceNew)}
                      >
                        {" "}
                        ₹ {product.price}
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
