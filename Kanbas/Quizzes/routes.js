import * as dao from "./dao.js";

function QuizRoutes(app) {
  // create
  const createQuiz = async (req, res) => {
    const { cid } = req.params;
    const quiz = await dao.createQuiz(cid, req.body);
    res.json(quiz);
  };
  app.post("/api/courses/:cid/quizzes", createQuiz);
  // find
  const findAllQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.json(quizzes);
  };
  app.get("/api/courses/:cid/quizzes", findAllQuizzes);
  /*
  // delete
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };
  app.delete("/api/modules/:mid", deleteModule);
  // update
  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body);
    res.json(status);
  }
  app.put("/api/modules/:mid", updateModule);
  */
}
export default QuizRoutes;