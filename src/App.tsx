import { Providers } from "./contexts";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Providers>
      <GlobalStyle />
      <Router />
    </Providers>
  )
}

export default App
