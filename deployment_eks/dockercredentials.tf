locals {
    dockercreds = {
        auths = {
            "${split("/", "${aws_ecr_repository.registry.repository_url}")[0]}" = {
                auth = "${data.aws_ecr_authorization_token.token.authorization_token}"
            }
        }
    }
}
resource "kubernetes_secret" "docker_credentials" {
    metadata {
        name = "docker-credentials"
    }
    data = {
        ".dockerconfigjson" = jsonencode(local.dockercreds)
    }
    type = "kubernetes.io/dockerconfigjson"
}