terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.20.0"
    }

   
  }
}
data "terraform_remote_state" "eks" {
  backend = "s3"
  config = {
    bucket = "pollitng"
    key    = "clustereks/terraform.tfstate"
    region = "us-east-2"
  }
}

resource "aws_ecr_repository" "registry" {
  name = "pollit_registry"
}


data "aws_ecr_repository" "service" {
  name = aws_ecr_repository.registry.name
  registry_id = aws_ecr_repository.registry.registry_id
}