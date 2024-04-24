import model from "./model.js";
export const createQuiz = (cid, quiz) => {
    delete quiz._id;
    quiz.course = cid;
    return model.create(quiz);
};
export const findAllQuizzes = () => model.find();
/*
export const deleteModule = (mid) => model.deleteOne({ _id: mid });
export const updateModule = (mid, module) =>  model.updateOne({ _id: mid }, { $set: module });
*/