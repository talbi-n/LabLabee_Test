import Lab from '../models/LabLabeeModel.js';
import expressAsyncHandler from 'express-async-handler';
//controller to add the New Lab
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
//controller to get all Labs
export const getAllLabs = async (req, res) => {
  const labs = await Lab.find();
  //test if exist
  if (labs) {
    res.send(labs);
  } else {
    res.status(404).send({ message: 'Labs not found' });
  }
};
// controller to  delete Lab
export const DeleteLab = async (req, res) => {
  const lab = await Lab.findById(req.params.id);
  if (lab) {
    const deletedLab = await Lab.findByIdAndDelete(req.params.id);
    res.status(200).send(deletedLab);
  } else {
    res.status(404).send({ message: 'Lab  not found ' });
  }
};
//Controller to get the Lab by Id
export const GetLabById = async (req, res) => {
  const lab = await Lab.findById(req.params.id);
  if (lab) {
    res.send(lab);
  } else {
    res.status(404).send({ message: 'Lab not found ' });
  }
};
//Controller to put the Lab by Id
export const UpdateLab = expressAsyncHandler(async (req, res) => {
  //finding the lab
  const lab = await Lab.findById(req.params.id);
  if (lab) {
    //if it is exist set the lab
    lab.name = req.body.name;
    lab.technology = req.body.technology;
    lab.endDate = req.body.endDate;
    lab.startDate = req.body.startDate;
    const updated_lab = await lab.save();
    res.status(201).send({ message: 'Lab Updated', lab: updated_lab });
  } else {
    res.status(404).send({ message: 'Lab not found ' });
  }
});
