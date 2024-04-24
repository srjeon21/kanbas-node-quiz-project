import * as dao from "./dao.js";

function QuizRoutes(app) {
    // Quiz List
    const findAllQuizzes = async (req, res) => {
      const quizzes = await dao.findAllQuizzes();
      res.json(quizzes);
    };
    app.get("/api/courses/:cid/quizzes", findAllQuizzes);
    // Quiz List
    const createQuiz = async (req, res) => {
        const { cid } = req.params;
        const quiz = await dao.createQuiz(cid, req.body);
        res.json(quiz);
    };
    app.post("/api/courses/:cid/quizzes", createQuiz);
    // Quiz Details
    const findQuizById = async (req, res) => {
        const { qid } = req.params;
        const quiz = await dao.findQuizById(qid);
        res.json(quiz);
    }
    app.get("/api/quizzes/:qid", findQuizById);
    // Quiz Details
    const updateQuiz = async (req, res) => {
        const { qid } = req.params;
        const status = await dao.updateQuiz(qid, req.body);
        res.json(status);
      }
      app.put("/api/quizzes/:qid", updateQuiz);
  /*
  // delete
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };
  app.delete("/api/modules/:mid", deleteModule);
  */
}
export default QuizRoutes;