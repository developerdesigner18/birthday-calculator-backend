import express from "express";
import { guessAgeSave, fetchHistory } from "./guess_age.controller.js"

export const guessAgeRouter = express.Router();

guessAgeRouter.post('/guessAgeSave', guessAgeSave)
guessAgeRouter.get('/fetchHistory', fetchHistory)
