function ButtonWithIcon({ prop }) {
  console.log({ prop });

  return (
    <button>
      <img src={prop.icon} alt="icon" style={{height: '25px'}} /> {prop.title}
    </button>
  );
}

export default ButtonWithIcon;
