set -u # or set -o nounset
: "$AWS_SECRET_ACCESS_KEY"
: "$AWS_ACCESS_KEY_ID"

cd ./cluster_eks
export KUBERNETES_SERVICE_HOST="" # Workaround for https://github.com/terraform-providers/terraform-provider-kubernetes/issues/679
terraform init 
terraform apply -auto-approve -var "client_id=$AWS_ACCESS_KEY_ID" -var "client_secret=$AWS_SECRET_ACCESS_KEY"