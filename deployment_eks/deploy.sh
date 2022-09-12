set -u # or set -o nounset
: "$VERSION"
: "$AWS_SECRET_ACCESS_KEY"
: "$AWS_ACCESS_KEY_ID"
: "$REGION"

cd ./deployment_eks
export KUBERNETES_SERVICE_HOST="" # Workaround for https://github.com/terraform-providers/terraform-provider-kubernetes/issues/679
terraform init 
terraform destroy -auto-approve -var "app_version=$VERSION" -var "client_id=$AWS_ACCESS_KEY_ID" -var "client_secret=$AWS_SECRET_ACCESS_KEY"