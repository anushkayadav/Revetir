/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Accordion from "components/Accordion/Accordion.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";
import Check from "@material-ui/icons/Check";
import ImageUpload from "components/CustomUpload/ImageUpload.js";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";
import basicsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/basicsStyle.js";

// images
import cardProduct1 from "assets/img/examples/card-product1.jpg";
import cardProduct3 from "assets/img/examples/card-product3.jpg";
import cardProduct4 from "assets/img/examples/card-product4.jpg";
import cardProduct2 from "assets/img/examples/card-product2.jpg";
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
const useStyles = makeStyles({ ...productStyle, ...basicsStyle });

export default function ProductPage() {
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = React.useState();
  const [userImageExists, setImageExists] = React.useState(false);
  const [useOldPic, setUseOldPic] = React.useState(false);
  const [file, setFile] = React.useState("");

  console.log({ id });
  console.log({ userImageExists, useOldPic });
  React.useEffect(() => {
    (async () => {
      const { data } = await axios.post(
        "http://tmmlgpu4.eastus.cloudapp.azure.com:5009/api/v1/query/products/view/",
        { pid: id, email: "hello123@example.com" }
      );
      console.log({ data });
      setProduct(data.product_info);
      setImageExists(!!data.recent_upload);
      setUseOldPic(!!data.recent_upload);
    })();
  }, []);

  React.useEffect(() => {
    if (file) {
      (async () => {
        const url =
          "http://tmmlgpu4.eastus.cloudapp.azure.com:5009/api/v1/model/predict";
        const formData = new FormData();
        formData.append(
          "block_data",
          `{\n "email":"hello123@example.com",\n"flag":${useOldPic},\n"cloth_image_url": "${product.cloth_url}",\n"host": true\n}`
        );
        formData.append("upload_image", file);
        const config = {
          headers: {
            token: "a1279d26-63ac-41f1-8266-4ef3702ad7cb",
            "content-type": "multipart/form-data",
          },
        };
        const { data } = await axios.post(url, formData, config);
        console.log({ afterUpload: data });
        setProduct({
          ...product,
          thumbnails: [...product.thumbnails, data.blob_url],
        });
      })();
    }
  }, [file]);

  const tryOn = () => {
    let data = new FormData();
    data.append(
      "block_data",
      `{\n "email":"hello123@example.com",\n"flag":${useOldPic},\n"cloth_image_url": "${product.cloth_url}",\n"host": true\n}`
    );

    console.log(data);

    let config = {
      method: "post",
      url: "http://tmmlgpu4.eastus.cloudapp.azure.com:5009/api/v1/model/predict",
      headers: {
        token: "a1279d26-63ac-41f1-8266-4ef3702ad7cb",
        "content-type": "multipart/form-data",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setProduct({
          ...product,
          thumbnails: [...product.thumbnails, response.data.blob_url],
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={classes.productPage}>
      <Header
        brand="Revetir"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 100,
          color: "rose",
        }}
      />
      <Parallax
        image={require("assets/img/back.jpg").default}
        //filter="rose"
        className={classes.pageHeader}
      >
        <div className={classes.container}>
          <GridContainer className={classes.titleRow}>
            <GridItem md={4} className={classes.mlAuto}></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.section, classes.sectionGray)}>
        <div className={classes.container}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            {product && (
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={product.thumbnails.length - 1}
                    items={product.thumbnails.map((thumbnail) => ({
                      original: thumbnail.split("?")[0],
                      thumbnail,
                    }))}
                    showThumbnails={true}
                    renderLeftNav={(onClick, disabled) => {
                      return (
                        <button
                          className="image-gallery-left-nav"
                          disabled={disabled}
                          onClick={onClick}
                        />
                      );
                    }}
                    renderRightNav={(onClick, disabled) => {
                      return (
                        <button
                          className="image-gallery-right-nav"
                          disabled={disabled}
                          onClick={onClick}
                        />
                      );
                    }}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h5
                    className={classes.mainPrice}
                    style={{ marginBottom: "5px" }}
                  >
                    {product.brand}
                  </h5>
                  <h3 className={classes.title} style={{ marginTop: "5px" }}>
                    {product.product_name}
                  </h3>
                  <h5 className={classes.mainPrice}>₹ {product.price}</h5>
                  <Accordion
                    active={0}
                    activeColor="rose"
                    collapses={[
                      {
                        title: "Description",
                        content: (
                          <>
                            {product.details.split("\r\n").map((str) => (
                              <p key={str}>{str}</p>
                            ))}
                          </>
                        ),
                      },
                    ]}
                  />
                  <GridContainer className={classes.pullRight}>
                    {userImageExists && (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={useOldPic}
                            tabIndex={-1}
                            onClick={() => setUseOldPic(!useOldPic)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot,
                            }}
                          />
                        }
                        classes={{
                          label: classes.label,
                          root: classes.labelRoot,
                        }}
                        label="Use Previously Uploaded Image"
                      />
                    )}
                    {userImageExists && useOldPic ? (
                      <Button round onClick={tryOn} color="rose">
                        Try on
                      </Button>
                    ) : null}
                    {useOldPic || (
                      <ImageUpload
                        setFile={setFile}
                        changeButtonProps={{
                          round: true,
                          color: "rose",
                          text: "Upload Image",
                        }}
                      />
                    )}
                    <div></div>
                  </GridContainer>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <GridContainer className={classes.pullRight}>
                  <Button round color="rose">
                    Add to Cart &nbsp; <ShoppingCart />
                  </Button>
                </GridContainer> */}
                </GridItem>
              </GridContainer>
            )}
          </div>
          <div className={classNames(classes.features, classes.textCenter)}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="2 Days Delivery"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={LocalShipping}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Refundable Policy"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={VerifiedUser}
                  iconColor="success"
                  vertical
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Popular Item"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={Favorite}
                  iconColor="rose"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
