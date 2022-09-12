resource "aws_ecr_repository" "registry" {
  name = "pollit_registry"
}


data "aws_ecr_repository" "service" {
  name = aws_ecr_repository.registry.name
  registry_id = aws_ecr_repository.registry.registry_id
}