
function ButtonWithChildren(prop) {
  console.log({prop})

  return <button style={{backgroundColor: prop.color}}>{prop.children}</button>;
}

export default ButtonWithChildren;
