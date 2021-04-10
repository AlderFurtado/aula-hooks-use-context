import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={isLogged}>
      <Auth />
      <button
        onClick={() => {
          if (isLogged) setIsLogged(false);
          else setIsLogged(true);
        }}
      >
        {isLogged ? "Deslogar" : "Logar"}
      </button>
    </AuthContext.Provider>
  );
}

function Auth() {
  const theme = useContext(AuthContext);
  return <h1>{theme ? "Logado" : "Deslogado"}</h1>;
}

export default App;
