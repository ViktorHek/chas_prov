// 1a. Återanvändbara komponenter 2p
// Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

function ButtonProp({prop}) {
  const {title, color} = prop
  console.log({prop})

  return <button style={{backgroundColor: color}}>{title}</button>;
}

export default ButtonProp;
