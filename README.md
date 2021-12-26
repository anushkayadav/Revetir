# REVETIR : Try & Buy Clothes

![logo](logo.gif) 

The main focus of this project is to enhance the user experience by enabling users to interact with the product which they are buying. To facilitate this, we worked on a deep learning framework, which enables the user to upload his/her own pictures and virtually try the products to understand its fit and look. This will enable the user to become its own model on one hand increasing the user experience also on the other hand increasing the confidence level in himself/herself.

We integrate this project with a complete workflow from product listing, to virtual try on and buying, in order to demonstrate that such an implementation is extremely efficient and has huge potential to become mainstream. The whole product has been adhered to ASGI interface to overcome scalability issues, and get optimized runtimes. The project covers all aspects of database management, frontend UI/UX, backend optimization and much more.

### DATASET

 - **Zalando Dataset**: VITON contains a training set of 14, 221 image pairs and a testing set of 2, 032 image  pairs, each of which has a front-view woman photo and a  top clothing image with the resolution 256 × 192
 - **MPV (Multi-Pose Virtual try on) dataset** : Recently constructed virtual try-on dataset,  MPV contains 35, 687 / 13, 524 person / clothes images.Multiple images of a person wearing the target clothes from different views

### APPROACH

 **MODEL :**
 Parser-Free Virtual Try-on via Distilling Appearance Flows[1]
 
**STEPS**:

 1. Trained the complete pipeline on Datasets
 2. Used a **modified mask- generation technique** to get fine masks of Clothes.
 3. Earlier the model only worked on white background images. We have added automated background removal using U2-Net [2] to generate a fine person image with White background. 
 
 ### MODEL RESULTS
![](https://lh3.googleusercontent.com/cYlUPqT1Z76HZdNT8BSDZKLfBzgcc1bWLXFpTr6sUcJc0TiSD6EahE23nNKwwqw2cwCbF3mB-aQKY2ew_Ulodsj0F-r0ElUQLR01XnyKkq19LQKMmJ22iO7UAGjJVD-uZhWBt5o5)![](https://lh5.googleusercontent.com/UPMSsebYQkHUCKawdqA22U6NOyT4b2DgyH0pNaVCNmCJ1PSCuNjz1_fMilNBE0_C9xwaOo5cduNxTHxgUX4cWgjZzcKQZZD90xMWpGimnNt_QaQGAjv6cc_h5U8xB1bgU-Y1tYxm)![](https://lh4.googleusercontent.com/FpNUdWXkL7fMpvdd12NYLMzaEbRypOXY98Cojc0Xe4BQpQCBYsjM7DzuEeWRcpOW7UrWXx7zjfykh9wEQFeqI7fLZIlx1BS6nKskE7PZpGdEAbw28-zimyD_YFBnpARyj0y5_azq)

### DEPLOYMENT

![](https://lh4.googleusercontent.com/0hTeb7jdU0weNOwBHuCD8tX0WHyBgDbSbc4EokxMbTzLouskN3EuHUfWKTYJTT9vdXn_SEvd9ewnBUsjyTzHBU1Ht0oUbZMZblbfEuq0a4ZAw8wOC6CCGgZupEHOGCn3lDg9l8v7)

 1. **FastAPI as RestAPI backend** :  FastAPI connects Starlette, Pydantic, OpenAPI, and JSON Schema. Pydantic for data validation Starlette for tooling under the hood.
 2.  **Users database and Products Database are hosted on mongo cloud**: Odmantic is used to access MongoDB
 3. **ReactJS frontend**: Axios is used for making api requests to our fastapi based backend
 
 ### WEBAPP OVERVIEW
 LIST VIEW PAGE
![](https://lh4.googleusercontent.com/9nXb6sOH0jUadCID72kKf9oNQFu96-_b-_0qb2uud9a-nu_IGSXPp7SHKXWfusb79-M7o21Cdju7XJAmSn9lKyr1NHHJ9JKnmFYztBI2wXBbbWWVFmGGGyKFCTLK6SKMkuuimrlj)
PRODUCT PAGE
![](https://lh5.googleusercontent.com/aDUdFBmaiR-8SS9oFohbx9Cr8D3tTqU1z3yDF37Mb3i7eByQ71fzf7OFDg92KDJBCFMDxFRdYUT76wASoz-_oAOVAgwLYx-cy3rFj38duGtFn0MVogIl_hFiyVbOV-7nXYs01ql3)

UPLOAD YOUR IMAGE 

**![](https://lh4.googleusercontent.com/PJECXX1pKR6FU1eR9-FvZgDFRmXcdvPNZAQZeeJNHzvaA_te_h_5YmuybZpT76KkwqX_oH1I7C59kkwGadXnln4Vpi_Yby5VpI1xHz0SjrrXTTvAxflVHedx3K5Z8-Tc3XZMIulj)

TRY ON RESULTS
**![](https://lh4.googleusercontent.com/H2D8yI6xBnncq7rr93oY_kHQ_NRtTXl1SLBkyw4Upp5lSa9-_XHLfksDJpL3aHU35-NFga2AuCn9Z7qJfLCOb1VAa3rtR_A5Y3OqQbact-ZS1BLyEQIc5xjult6jo2XGbsgs-xZx)

## REFERENCES
[1] Ge, Yuying et al. "Parser-Free Virtual Try-on via Distilling Appearance Flows". arXiv preprint arXiv:2103.04559. (2021).
[2] Qin, Xuebin et al. "U2-Net: Going deeper with nested U-structure for salient object detection". Pattern Recognition 106. (2020): 107404.
