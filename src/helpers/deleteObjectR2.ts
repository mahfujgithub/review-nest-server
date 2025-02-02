import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import config from "../config";
import { r2 } from "../config/multer.config";

export const deleteObjectFromR2 = async (key: string): Promise<void> => {
  const command = new DeleteObjectCommand({
    Bucket: config.r2.bucketName,
    Key: key,
  });

  try {
    await r2.send(command);
  } catch (error) {
    throw error; // Re-throw the error if needed
  }
};