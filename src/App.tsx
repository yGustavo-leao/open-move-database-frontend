import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movies } from "./pages/movies/Movies";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Details } from "./pages/details/Details";
import { useEffect, useState } from "react";
import { MovieList } from "./@types/MovieList";
import { MovieListContext } from "./context/MovieListContext";
import { startServer } from "./utils/startServer";
import { Load } from "./App.styled";

function App() {
  const [movieList, setMovieList] = useState<MovieList>([])
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    (async () => {
      const serverIsOn = await startServer()
      if (serverIsOn) setIsOn(true)
    })()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {
        isOn ?
          <MovieListContext.Provider value={{ movieList, setMovieList }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/details/:imdbID" element={<Details />} />
              </Routes>
            </BrowserRouter>
          </MovieListContext.Provider>
          : <Load>Ligando servidor...<br />
            O servidor desliga a cada 30 minutos de inatividade
          </Load>
      }
    </ThemeProvider>
  );
}

export default App;
