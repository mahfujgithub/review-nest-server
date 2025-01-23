import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload | null;
    }
  }
}

declare global {
  namespace Express {
    namespace Multer {
      interface File {
        location: string; // Add the 'location' property
      }
    }
  }
}
