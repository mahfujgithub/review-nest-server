import { UploadApiResponse } from 'cloudinary';
import cloudinary from './cloudinary.kit'; // Import cloudinary.v2

// Upload an image to Cloudinary
export const uploadToCloudinary = async (
  fileBuffer: Buffer,
  folder: string,
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
        },
        (error: any, result: UploadApiResponse | undefined) => {
          if (error) {
            reject(new Error('Failed to upload image to Cloudinary'));
          } else if (result) {
            resolve(result); // Only resolve if result is defined
          } else {
            reject(new Error('Cloudinary returned undefined result'));
          }
        },
      )
      .end(fileBuffer); // Write the file buffer to Cloudinary stream
  });
};
