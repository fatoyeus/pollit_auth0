output "cluster_id" {
  description = "EKS cluster ID"
  value       = module.eks.cluster_id
}

output "cluster_endpoint" {
  description = "Endpoint for EKS control plane"
  value       = module.eks.cluster_endpoint
}
output "cluster_primary_security_group_id" {
    description = "Cluster security group that was created by Amazon EKS for the cluster."
  value       = module.eks.cluster_primary_security_group_id
}
output "cluster_security_group_id" {
  description = "Security group ids attached to the cluster control plane"
  value       = module.eks.cluster_security_group_id
}
output "oidc_arn" {
  description = "The OIDC Identity issuer ARN for the cluster that can be used to associate IAM roles with a service account."
  value = module.eks.oidc_provider_arn
}
output "oidc_issuer_url" {
  value =  module.eks.cluster_oidc_issuer_url
}
output "region" {
  description = "AWS region"
  value       = var.region
}

output "cluster_name" {
  description = "Kubernetes Cluster Name"
  value       = local.cluster_name
}
output "vpc_id" {
  description = "VPC ID"
  value       = module.vpc.vpc_id
}

output "vpc_private_subnet_ids" {
  description = "private subnets in the vpc"
  value = module.vpc.private_subnets
}
output "vpc_public_subnet_ids" {
  description = "public subnets in the vpc"
  value = module.vpc.public_subnets
}
output "node_group_one_sg" {
  description = "security group for node group two"
  value = aws_security_group.node_group_one.id
}
output "node_group_two_sg" {
  description = "security group for node group two"
  value = aws_security_group.node_group_two.id
}
