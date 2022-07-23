import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovie] = useState([]);
  let URL = "https://image.tmdb.org/t/p/w500/";

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            language: "es-MX",
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjY0NzU2NDhiNDdlOTA2ZmIzNmE5MmFiMjFlZWY3YyIsInN1YiI6IjYyYmQyMDFmMTJhYWJjMGU0MzdiNTJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vcOi86lIrP7rYvysjFLiEoY3s_Mn53M6DJ3E5xPhz-A ",
          },
        }
      );
      setMovie(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="contenedor" id="contenedor">
        {movies.map((movie) => (
          <div key={movie.id} className="pelicula">
            <img
              className="poster"
              src={`${URL}${movie.poster_path}`}
              alt={movie.title}
            />
            <h1 className="titulo">{movie.title}</h1>
          </div>
        ))}
      </div>

      <div className="paginacion">
        <button id="btnAnterior">Anterior</button>
        <button id="btnSiguiente">Siguiente</button>
      </div>
    </>
  );
}

export default App;
