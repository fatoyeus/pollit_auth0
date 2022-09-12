terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.15.0"
    }

    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.0.1"
    }
  }
}
resource "aws_ecr_repository" "registry" {
  name = "pollit_registry"
}


data "aws_ecr_repository" "service" {
  name = aws_ecr_repository.registry.name
  registry_id = aws_ecr_repository.registry.registry_id
}