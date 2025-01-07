import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import path from 'path';

// middlewares
app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));
// Serve static files from the 'public' directory
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Application Routes
app.use('/api/v1', routes);
// app.use('/create-post')

// testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // res.send('affiliate server booming!');
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

// global error handler
app.use(globalErrorHandler);

app.use(async (req: Request, res: Response, next: NextFunction) => {
  const httpStatus = await import('http-status-ts');
  res.status(httpStatus.HttpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found!',
      },
    ],
  });

  next();
});



export default app;
