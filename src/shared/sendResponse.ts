import { Response } from 'express';
import { IPosts } from '../app/modules/posts/post.interface';

type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null;
};

// Define a new type for response data structure that includes both 'post' and 'relatedPosts'
export interface IPostWithRelated {
  result?: IPosts;
  relatedPosts: IPosts[];
  relatedCount: number;
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null,
  };

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
