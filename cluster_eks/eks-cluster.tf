module "eks" {
                source  = "terraform-aws-modules/eks/aws"
                version = "18.30.2"

                cluster_name    = local.cluster_name
                cluster_version = "1.23"

                vpc_id     = module.vpc.vpc_id
                subnet_ids   = slice(module.vpc.private_subnets, 0, 3 )

                eks_managed_node_group_defaults = {
                  cluster_name = local.cluster_name
                  ami_type = "AL2_x86_64"
                  attach_cluster_primary_security_group = true

                  # Disabling and using externally provided security groups
                  create_security_group = false
                  create_node_security_group = false
                }
                
                eks_managed_node_groups = {
                                            one = {
                                                    name = "node-group-1"
                                                    labels = {
                                                                "node-type" = "backend"
                                                              }
                                                    instance_types = ["t3.micro"]
                                                    
                                                    min_size     = 5
                                                    max_size     = 10
                                                    desired_size = 5
                                                    
                                                    pre_bootstrap_user_data = <<-EOT
                                                    echo 'foo bar'
                                                    EOT
                                                    vpc_security_group_ids = [
                                                      aws_security_group.node_group_one.id
                                                    ]
                                                  },
                                            two = {
                                                    name = "node-group-2"
                                                    labels = {
                                                                "node-type" = "frontend"
                                                              }
                                                    instance_types = ["t3.micro"]
                                                    
                                                    min_size     = 4
                                                    max_size     = 8
                                                    desired_size = 4
                                                    subnet_ids   = slice(module.vpc.public_subnets, 0, 3 )
                                                    pre_bootstrap_user_data = <<-EOT
                                                    echo 'foo bar'
                                                    EOT
                                                    vpc_security_group_ids = [
                                                      aws_security_group.node_group_two.id
                                                    ]
                                                  }
                                          }
              }
