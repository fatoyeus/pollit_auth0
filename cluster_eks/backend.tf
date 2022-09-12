terraform {
  backend "s3" {
    bucket = "pollitng"
    key    = "clustereks/terraform.tfstate"
    region = "us-east-2"
  }
}
