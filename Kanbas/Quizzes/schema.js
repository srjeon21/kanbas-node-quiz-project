import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    title: { type: String,required: true},
    description: String,
    type: { type: String, default: "Graded Quiz" },
    points: Number,
    assignmentGroup: { type: String, default: "Quizzes" },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    showCorrectAnswers: String,
    accessCode: String,
    oneQAtTime: { type: Boolean, default: false },
    webcam: {type: Boolean, default: false },
    lockQAfterAnswering: { type: Boolean, default: false },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    course: { type: String, required: true },
  },
  { collection: "quizzes" });
export default quizSchema;