import express from 'express';
import moviesController from './controllers/moviesController.js';
import data_movie from './share/data-movies.js'

const app = express();

app.use(express.json());

// Película con id:2 (1pto)
app.get('/movies/:id', (req,res)=>{
    data_movie.req = { id: req.params.id };
    moviesController.getMovieById(data_movie);
    res.send(data_movie.res)
})
// Eliminar la película con id:2 (1pto)
app.delete('/movies/:id', (req,res)=>{
    data_movie.req = { id: req.params.id };
    moviesController.removeMovie(data_movie)
    res.send(data_movie.res)
})
// Añade una nueva película new_movie
app.post('/movies/add', (req,res)=>{
    data_movie.req = req.body
    moviesController.createMovie(data_movie)
    res.send(data_movie.res)
})
//Modifica la película con id:3
app.put('/movies/update', (req,res)=>{
    data_movie.req = req.body
    moviesController.updateMovie(data_movie)
    res.send(data_movie.res)
})

//Devuelve todas las películas
// app.get('/movies/allfilms'), (req,res)=>{
//     moviesController.getAllMovies(data_movie)
//     res.send(data_movie.res)
// }

//Todas las peliculas del año 1994
app.get('/movies/year', (req,res)=>{
    const movies_year = req.body 
    data_movie.req = movies_year
    moviesController.getMovieBy(data_movie)
    res.send(data_movie.res)
})
//Añadir un actor a la pelicula


export default app