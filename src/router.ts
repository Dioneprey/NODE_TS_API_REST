import { Router, Request, Response } from "express";
import { createMovie, getAllMovies, getMovieById, removeMovie, updateMovie } from "./controllers/movieController";

import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router.get('/', (req, res) => {
        return res.json({Ok: "Ok"});
    })
    .post("/movie", movieCreateValidation() ,validate, createMovie)
    .get("/movie", getAllMovies)
    .get("/movie/:id", getMovieById)
    .delete("/movie/:id", removeMovie)
    .patch("/movie/:id", movieCreateValidation(), validate, updateMovie)