## create a EB environment, docker node instances run in private subnets

* NAT: runs in public subnet
* ELB: runs in public subnets

`$ eb create -v --debug express-ts-starter-docker-shared  --elb-type application --shared-lb shared-load-balancer  --keyname aws-wzc --vpc.id vpc-df3effa7 --vpc.elbsubnets subnet-4ffcd115,subnet-934715ea --vpc.ec2subnets subnet-0ae3a151f5ee36821,subnet-02c7f8301c74aa007`