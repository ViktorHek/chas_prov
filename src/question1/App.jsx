// 1a. Återanvändbara komponenter 2p
// Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 1b. Återanvändbara komponenter med children 2p
// Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 1c. Återanvändbara komponenter med icon 2p
// Skapa en komponent ButtonWithIcon som tar en title och icon som props.
// Använd valfritt icon-bibliotek. Använd komponenten 2 gånger med olika
// title och icon.
import ButtonProp from "./ButtonProp";
import ButtonWithChildren from "./ButtonWithChildren";
import ButtonWithIcon from "./ButtonWithIcon";
function App() {
  const iconLink1 = "https://cdn-icons-png.flaticon.com/512/10054/10054531.png"
  const iconLink2 = "https://cdn-icons-png.flaticon.com/512/1596/1596392.png"

  return (
    <div>
      <ButtonProp prop={{ title: "first prop", color: "red" }} />
      <ButtonProp prop={{ title: "secons prop", color: "green" }} />
      <ButtonWithChildren color={'red'}>first child</ButtonWithChildren>
      <ButtonWithChildren color={'green'}>second child</ButtonWithChildren>
      <ButtonWithIcon prop={{ title: "first icon", icon: iconLink1 }} />
      <ButtonWithIcon prop={{ title: "secons icon", icon: iconLink2 }} />
    </div>
  );
}

export default App;
