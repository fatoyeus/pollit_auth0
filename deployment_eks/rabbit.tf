resource "kubernetes_deployment" "rabbit" {
  metadata {
    name = "rabbit"
    labels = {
      App = "pollit_rabbit"
    }
  }

  spec {
    replicas = 1
    selector {
      match_labels = {
        App = "pollit_rabbit"
      }
    }
    template {
      metadata {
        labels = {
          App = "pollit_rabbit"
        }
      }
      spec {
        container {
          image = "rabbitmq:3.8.5-management"
          name  = "rabbit"

          port {
            container_port = 5672
          }

          resources {
            limits = {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "50Mi"
            }
          }
        }
      }
    }
  }
}
resource "kubernetes_service" "rabbit" {
  metadata {
    name = "rabbit"
  }
  spec {
    selector = {
      App = kubernetes_deployment.rabbit.spec.0.template.0.metadata[0].labels.App
    }
    port {
      port        = 5672
      target_port = 5672
    }
  }
}
resource "kubernetes_service" "rabbit_dashboard" {
  metadata {
    name = "rabbit-dashboard"
  }
  spec {
    selector = {
      App = kubernetes_deployment.rabbit.spec.0.template.0.metadata[0].labels.App
    }
    port {
      port        = 15672
      target_port = 15672
    }
  
  }
}

