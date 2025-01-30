variable "service_name" {
    
}
variable "annotations" {
    default = {}
    type = map(string)
}
variable "container_port" {
  
}
variable "dns_name" {
    default = ""
}
variable "service_type" {
    default = "ClusterIP"
}
variable "node_selector" {  
}
variable "docker_credentials" {
}
variable "env" {
    default = {}
    type = map(string)
}
variable "region"{}
variable "app_version"{}
variable "server_url"{}
variable "server_uri"{}
variable "token"{}
locals {
            image_tag   =   "${var.server_url}:${var.service_name}_${var.app_version}"   
        }
resource "null_resource" "docker_build" {
    triggers = {
        always_run = timestamp()
    }
    provisioner "local-exec" {
        command = "docker build -t ${local.image_tag} --file ../${var.service_name}/Dockerfile-prod  ../${var.service_name}"
     }
}
resource "null_resource" "docker_login" {
    depends_on = [ null_resource.docker_build ] 
    triggers = {
        always_run = timestamp()
    }
    provisioner "local-exec" {
        command = "aws ecr get-login-password --region ${var.region} | docker login --username AWS --password-stdin ${var.server_uri}"
    }
}
resource "null_resource" "docker_push" {
    depends_on = [ null_resource.docker_login ]
    triggers = {
        always_run = timestamp()
    }
    provisioner "local-exec" {
        command = "docker push ${local.image_tag}"
    }
}

resource "kubernetes_deployment_v1" "service_deployment" {
    depends_on = [
                    null_resource.docker_push
                    ]
    metadata {
        name = var.service_name
        labels = {
            pod = var.service_name
        }
    }
    spec {
            replicas = 1
            selector {
                match_labels = {            
                    pod = var.service_name
                }
            }
            template {
                        metadata {
                            labels = {
                                pod = var.service_name
                            }
                        }
                        spec {
                            container {
                                        image = local.image_tag
                                        name = var.service_name
                                        port {
                                                container_port = var.container_port
                                                protocol = "TCP"
                                        }

                                        env {
                                                name = "PORT"
                                                value = "80"
                                            }
                                        dynamic "env" {
                                                            for_each = var.env
                                                            content {
                                                                        name = env.key
                                                                        value = env.value
                                                                    }
                                                        }
                                        }
                            hostname = var.service_name
                            node_selector = var.node_selector
                            image_pull_secrets {
                                name = var.docker_credentials
                            }
                        }
                    }
        }
    wait_for_rollout = true
}
resource "kubernetes_service_v1" "service" { 
    depends_on = [ kubernetes_deployment_v1.service_deployment ]
    metadata {
        name = var.service_name
        labels = {
            app = var.service_name
        }
    }
    spec {
        selector = {
            pod = kubernetes_deployment_v1.service_deployment.metadata[0].labels.pod         
            }
        type = var.service_type                                                                                                                                                     
        port {
            name = "http"
            port = 80
            protocol = "TCP"
            target_port = "80"
        }
    }
} 
