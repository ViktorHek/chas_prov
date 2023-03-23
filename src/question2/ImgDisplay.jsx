function ImgDisplay({ prop }) {
  console.log({ prop });
  return <img src={prop} alt="img" style={{ height: "50px", width: "50px" }} />;
}

export default ImgDisplay;
