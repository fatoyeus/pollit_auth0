
locals {
             node_env           =   "development"
             pollitdb           =   "MongoDB-Server"
             region             =   data.terraform_remote_state.eks.outputs.region
             server_uri         =   split("/", "${aws_ecr_repository.registry.repository_url}")[0]
             server_url         =   "${aws_ecr_repository.registry.repository_url}"
             dbhost1            =   "${data.aws_instances.mongodb_instances.private_ips[0]}:27017"
             dbhost2            =   "${data.aws_instances.mongodb_instances.private_ips[1]}:27017"
             dbhost3            =   "${data.aws_instances.mongodb_instances.private_ips[2]}:27017"
             rabbit             =   "amqp://guest:guest@rabbit:5672"
             accounts_micros    =   "http://accounts-micros"
             blogs_micros       =   "http://blogs-micros"
             demography_micros  =   "http://demography-micros"
             polls_micros       =   "http://polls-micros"
             pollit_reporting   =   "http://pollit-reporting"
             jwksuri            =   "https://dev-xu6xg5to.us.auth0.com/.well-known/jwks.json"
             pollitadminaud     =   "https://pollitAdmin25804-backend"
             pollitaud          =   "https://pollit62339-backend"
             issuer             =   "https://auth.pollitng.com/"
             port               =   80
             private_node       =   {
                                        "node-type" = "backend"
                                    }
             public_node        =   {
                                        "node-type" = "frontend"
                                    }
        }   

module "pollit-admin-backend-microservice" {
                                    source = "./modules/microservices"
                                    region = local.region
                                    app_version =   "${var.app_version}"
                                    token       =   data.aws_ecr_authorization_token.token.authorization_token
                                    server_url  =   local.server_url 
                                    server_uri  =   local.server_uri
                                    service_name = "pollit-admin-backend"
                                    service_type = "ClusterIP"
                                    node_selector = local.public_node
                                    container_port = local.port
                                    docker_credentials = kubernetes_secret.docker_credentials.metadata[0].name
                                    env = {
                                                RABBIT              =   local.rabbit
                                                ACCOUNTS_MICROS     =   local.accounts_micros
                                                BLOGS_MICROS        =   local.blogs_micros
                                                DEMOGRAPHY_MICROS   =   local.demography_micros
                                                POLLS_MICROS        =   local.polls_micros
                                                JWKSURI             =   local.jwksuri
                                                AUDIENCE            =   local.pollitadminaud
                                                CORSORIGIN          =   "https://admin.pollitng.com"
                                                ISSUER              =   local.issuer
                                                PORT                =   local.port
                                    }
                                }
module "pollit-backend-microservice" {
                                    source = "./modules/microservices"
                                    region = local.region
                                    app_version =   "${var.app_version}"
                                    token       =   data.aws_ecr_authorization_token.token.authorization_token
                                    server_url  =   local.server_url
                                    server_uri  =   local.server_uri
                                    service_name = "pollit-backend"
                                    service_type = "ClusterIP"
                                    node_selector = local.public_node
                                    container_port = local.port
                                    docker_credentials = kubernetes_secret.docker_credentials.metadata[0].name
                                    env = {
                                                RABBIT                  =   local.rabbit
                                                AWS_ACCESS_KEY_ID       =   "AKIAT37BHWD3NKDPCBV4"
                                                AWS_SECRET_ACCESS_KEY   =   "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"
                                                ACCOUNTS_MICROS         =   local.accounts_micros
                                                BLOGS_MICROS            =   local.blogs_micros
                                                DEMOGRAPHY_MICROS       =   local.demography_micros
                                                POLLS_MICROS            =   local.polls_micros
                                                JWKSURI                 =   local.jwksuri
                                                AUDIENCE                =   local.pollitaud
                                                CORSORIGIN              =   "https://www.pollitng.com"
                                                ISSUER                  =   local.issuer
                                                PORT                    =   local.port
                                                
                                    }
                                }
module "pollit-frontend-microservice" {
                                    source = "./modules/microservices"
                                    region = local.region
                                    app_version =   "${var.app_version}"
                                    token       =   data.aws_ecr_authorization_token.token.authorization_token
                                    server_url  =   local.server_url
                                    server_uri  =   local.server_uri
                                    service_name = "pollit-frontend"
                                    service_type = "ClusterIP"
                                    node_selector = local.public_node
                                    container_port = local.port
                                    docker_credentials = kubernetes_secret.docker_credentials.metadata[0].name
                                    env = {
                                                RABBIT              =   local.rabbit
                                                ACCOUNTS_MICROS     =   local.accounts_micros
                                                BLOGS_MICROS        =   local.blogs_micros
                                                DEMOGRAPHY_MICROS   =   local.demography_micros
                                                POLLS_MICROS        =   local.polls_micros
                                                JWKSURI             =   local.jwksuri
                                                AUDIENCE            =   local.pollitaud
                                                ISSUER              =   local.issuer  
                                                ServerURL           =   "https://api.pollitng.com"
                                                PORT                =   local.port
                                                CLIENTID            =   "pxXXwLvYMbtfGxYwIEpZzN0cpfcX1RyZ"
                                                OKTADOMAIN          =   "auth.pollitng.com"
                                    }
                                }
module "pollit-admin-frontend-microservice" {
                                    source = "./modules/microservices"
                                    region = local.region
                                    app_version =   "${var.app_version}"
                                    token       =   data.aws_ecr_authorization_token.token.authorization_token
                                    server_url  =   local.server_url
                                    server_uri  =   local.server_uri
                                    service_name = "pollit-admin-frontend"
                                    service_type = "ClusterIP"
                                    node_selector = local.public_node
                                    container_port = local.port
                                    docker_credentials = kubernetes_secret.docker_credentials.metadata[0].name
                                    env = {
                                                RABBIT              =   local.rabbit
                                                ACCOUNTS_MICROS     =   local.accounts_micros
                                                DEMOGRAPHY_MICROS   =   local.demography_micros
                                                POLLS_MICROS        =   local.polls_micros
                                                BLOGS_MICROS        =   local.blogs_micros
                                                JWKSURI             =   local.jwksuri
                                                AUDIENCE            =   local.pollitadminaud
                                                ISSUER              =   local.issuer
                                                ServerURL           =   "https://adminapi.pollitng.com"
                                                PORT                =   local.port
                                                CLIENTID            =   "Ox7dS34fE2paZ1nLwVfMNt9bnenBVfSN"
                                                OKTADOMAIN          =   "auth.pollitng.com"
                                    }
                                }
module "polls-microservice" {
                                    source = "./modules/microservices"
                                    region = local.region
                                    app_version =   "${var.app_version}"
                                    token       =   data.aws_ecr_authorization_token.token.authorization_token
                                    server_url  =   local.server_url
                                    server_uri  =   local.server_uri
                                    service_name = "polls-micros"  
                                    service_type = "ClusterIP"                    
                                    node_selector = local.private_node
                                    container_port = local.port
                                    docker_credentials = kubernetes_secret.docker_credentials.metadata[0].name
                                    env = {
                                                RABBIT              =   local.rabbit
                                                ACCOUNTS_MICROS     =   local.accounts_micros
                                                BLOGS_MICROS        =   local.blogs_micros
                                                DEMOGRAPHY_MICROS   =   local.demography_micros
                                                POLLS_MICROS        =   local.polls_micros
                                                PORT                =   local.port
                                                DB                  =   "mongodb://polls:pollspass1@${local.dbhost1},${local.dbhost2},${local.dbhost3}/polls"
                                    }
                                }
module "accounts-microservice" {
                                    source = "./modules/microservices"
                                    region = local.region
                                    app_version =   "${var.app_version}"
                                    token       =   data.aws_ecr_authorization_token.token.authorization_token
                                    server_url  =   local.server_url
                                    server_uri  =   local.server_uri
                                    service_name = "accounts-micros"
                                    service_type = "ClusterIP"
                                    node_selector = local.private_node
                                    container_port = local.port
                                    docker_credentials = kubernetes_secret.docker_credentials.metadata[0].name
                                    env = {
                                                RABBIT              =   local.rabbit
                                                ACCOUNTS_MICROS     =   local.accounts_micros
                                                BLOGS_MICROS        =   local.blogs_micros
                                                DEMOGRAPHY_MICROS   =   local.demography_micros
                                                POLLS_MICROS        =   local.polls_micros
                                                PORT                =   local.port
                                                DB                  =   "mongodb://accounts:accountspass1@${local.dbhost1},${local.dbhost2},${local.dbhost3}/accounts"
                                    }
                                }
module "blogs-microservice" {
                                    source = "./modules/microservices"
                                    region = local.region
                                    app_version =   "${var.app_version}"
                                    token       =   data.aws_ecr_authorization_token.token.authorization_token
                                    server_url  =   local.server_url
                                    server_uri  =   local.server_uri
                                    service_name = "blogs-micros"
                                    service_type = "ClusterIP"
                                    node_selector = local.private_node
                                    container_port = local.port
                                    docker_credentials = kubernetes_secret.docker_credentials.metadata[0].name
                                    env = {
                                                RABBIT              =   local.rabbit
                                                ACCOUNTS_MICROS     =   local.accounts_micros
                                                BLOGS_MICROS        =   local.blogs_micros
                                                DEMOGRAPHY_MICROS   =   local.demography_micros
                                                POLLS_MICROS        =   local.polls_micros
                                                PORT                =   local.port
                                                DB                  =   "mongodb://blogs:blogspass1@${local.dbhost1},${local.dbhost2},${local.dbhost3}/blogs"
                                    }
                                }
module "demography-microservice" {
                                    source = "./modules/microservices"
                                    region = local.region
                                    app_version =   "${var.app_version}"
                                    token       =   data.aws_ecr_authorization_token.token.authorization_token
                                    server_url  =   local.server_url
                                    server_uri  =   local.server_uri
                                    service_name = "demography-micros"
                                    service_type = "ClusterIP"
                                    node_selector = local.private_node
                                    container_port = local.port
                                    docker_credentials = kubernetes_secret.docker_credentials.metadata[0].name
                                    env = {
                                                RABBIT              =   local.rabbit
                                                ACCOUNTS_MICROS     =   local.accounts_micros
                                                BLOGS_MICROS        =   local.blogs_micros
                                                DEMOGRAPHY_MICROS   =   local.demography_micros
                                                POLLS_MICROS        =   local.polls_micros
                                                PORT                =   local.port
                                                DB                  =   "mongodb://demography:demographypass1@${local.dbhost1},${local.dbhost2},${local.dbhost3}/demography"
                                    }
                                } 
module "pollitreporting-microservice" {
                                    source = "./modules/microservices"
                                    region = local.region
                                    app_version =   "${var.app_version}"
                                    token       =   data.aws_ecr_authorization_token.token.authorization_token
                                    server_url  =   local.server_url
                                    server_uri  =   local.server_uri
                                    service_name = "pollit-reporting"
                                    service_type = "ClusterIP"
                                    node_selector = local.private_node
                                    container_port = local.port
                                    docker_credentials = kubernetes_secret.docker_credentials.metadata[0].name
                                    env = {
                                                RABBIT              =   local.rabbit
                                                ACCOUNTS_MICROS     =   local.accounts_micros
                                                BLOGS_MICROS        =   local.blogs_micros
                                                DEMOGRAPHY_MICROS   =   local.demography_micros
                                                POLLS_MICROS        =   local.polls_micros
                                                PORT                =   local.port
                                                DB                  =   "mongodb://reporting:reportingpass1@${local.dbhost1},${local.dbhost2},${local.dbhost3}/?authSource=admin&replicaSet=rs1"
                                                DBNAME              =   "reports"
                                    }
                                }