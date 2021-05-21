/* eslint-disable react/prop-types */
import React from "react";
// used for making the prop types of this component
// core components
import Button from "components/CustomButtons/Button.js";

export default function ImageUpload(props) {
  const { setFile } = props;
  let fileInput = React.createRef();
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    console.log(reader);
    let file = e.target.files[0];
    setFile(file);
    console.log(file);
    reader.onloadend = () => {
      console.log(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // eslint-disable-next-line
  const handleSubmit = (e) => {
    e.preventDefault();
    // file is the file/image uploaded
    // in this function you can save the image (file) on form submit
    // you have to call it yourself
  };
  const handleClick = () => {
    fileInput.current.click();
  };

  let { changeButtonProps } = props;
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div>
        <Button {...changeButtonProps} onClick={() => handleClick()}>
          {changeButtonProps.text || "Upload Image"}
        </Button>
      </div>
    </div>
  );
}
