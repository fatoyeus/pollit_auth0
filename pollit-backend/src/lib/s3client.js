const { S3Client } = require("@aws-sdk/client-s3")
// Set the AWS Region.
const REGION = "us-east-2"; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const s3 = new S3Client({ region: REGION });
module.exports = {s3};