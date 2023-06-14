import express from 'express';
import { AddNewLab } from '../controllers/LabLabeeController.js';
//creating the lab router using express framework
const LabRouter = express.Router();
//post new lab
LabRouter.post('/', AddNewLab);

export default LabRouter;
