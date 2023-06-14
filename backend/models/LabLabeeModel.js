import mongoose from 'mongoose';
const LabSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    technology: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);
const Lab = mongoose.model('Lab', LabSchema);
export default Lab;
