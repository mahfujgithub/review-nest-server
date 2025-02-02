export interface MulterS3File extends Express.Multer.File {
  key: string; // The unique key of the uploaded file in the bucket
  location: string; // The public URL of the uploaded file
  bucket: string; // The name of the bucket where the file is stored
  acl: string; // The ACL (Access Control List) of the file
}
