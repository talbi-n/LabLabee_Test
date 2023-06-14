import Lab from '../models/LabLabeeModel.js';
import expressAsyncHandler from 'express-async-handler';
//function to add the New Lab
export const AddNewLab = expressAsyncHandler(async (req, res) => {
  try {
    const newLab = new Lab({
      name: req.body.name,
      technology: req.body.technology,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });
    //saving Lab on database
    const lab = await newLab.save();
    //return Lab to the frontend
    res.send({
      lab,
    });
  } catch (err) {
    res.status(500).send(' cannot create this new Lab because of : ' + err);
  }
});
