let page = 1;

let btnAnterior = document.getElementById('btnAnterior');
let btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if (page < 1000) {
        page += 1;
        getData();
    }
});

btnAnterior.addEventListener('click', () => {
    if (page > 1) {
        page -= 1;
        getData();
    }
})


const getData = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d66475648b47e906fb36a92ab21eef7c&page=${page}`)

        if (res.status === 200) {
            const datos = await res.json();

            let movies = "";
            datos.results.forEach(movie => {
                movies +=
                    `
                <div class="pelicula">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="poster"/>
                    <h1 class="titulo">${movie.title}</h1>
                </div>
                `
                document.getElementById('contenedor').innerHTML = movies;
            });
            console.log(datos)
        } else {
            console.log('no se pudieron cargar las peliculas')
        }
    } catch (err) {
        console.log(err)
    }
}

getData();