import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config"
import session from "express-session";
import UserRoutes from './Kanbas/Users/routes.js';
import cors from "cors";
import CourseRoutes from './Kanbas/Courses/routes.js';
import ModuleRoutes from './Kanbas/Modules/routes.js';
import QuizRoutes from './Kanbas/Quizzes/routes.js';

//const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    cors({
      credentials: true,
      origin: [process.env.FRONTEND_URL, process.env.FRONTEND_NETLIFY_URL]
    })
  );
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(
  session(sessionOptions)
);
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
QuizRoutes(app);
app.listen(process.env.PORT || 4000);