import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

// middlewares
app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
app.use('/api/v1', routes);

// testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('affiliate server booming!');
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
