terraform {
  backend "s3" {
    bucket = "pollitng"
    key    = "deploymenteks/terraform.tfstate"
    region = "us-east-2"
  }
}