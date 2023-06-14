import express from 'express';
import {
  AddNewLab,
  DeleteLab,
  getAllLabs,
} from '../controllers/LabLabeeController.js';
//creating the lab router using express framework
const LabRouter = express.Router();
//post new lab
LabRouter.post('/', AddNewLab);
//get all labs
LabRouter.get('/', getAllLabs);
//delete Lab
LabRouter.delete('/:id', DeleteLab);
export default LabRouter;
