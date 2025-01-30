data "aws_instances" "mongodb_instances" {
  instance_tags = {
                            Name        = "${data.aws_eks_cluster.cluster.name}-MongoDB-Server"
                            Environment = "${terraform.workspace}"
                    }

  
  instance_state_names = ["running"]
}