import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    id: {type: String, required: true },
    title: { type: String, required: true},
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
    published: {type: Boolean, default: false},
    course: { type: String, required: true },
  },
  { collection: "quizzes" });
export default quizSchema;