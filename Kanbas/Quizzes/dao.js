import model from "./model.js";
// Quiz List
export const createQuiz = (cid, quiz) => {
    delete quiz._id;
    const now = new Date();
    quiz.id = "" + now.getFullYear() + (now.getMonth() + 1) + now.getDate() + now.getHours() + now.getMinutes() + now.getSeconds();
    quiz.course = cid;
    return model.create(quiz);
};
// Quiz List
export const findAllQuizzes = () => model.find();
// Quiz Details
export const findQuizById = (qid) => model.findOne({ id:qid });
// Quiz Details
export const updateQuiz = (qid, quiz) =>  model.updateOne({ id: qid }, { $set: quiz });
/*
export const deleteModule = (mid) => model.deleteOne({ _id: mid });
*/