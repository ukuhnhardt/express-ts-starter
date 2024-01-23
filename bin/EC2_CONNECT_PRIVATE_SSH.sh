ssh-add /Users/ukuhnhardt/Downloads/aws-wzc.pem
export BASTION_IP=54.201.169.111
export NODE_IP=172.31.92.2
export SSH_OPTS='-o ServerAliveInterval=60 -o ServerAliveCountMax=30'
ssh ${SSH_OPTS} -o "proxycommand ssh -W %h:%p ${SSH_OPTS} ec2-user@${BASTION_IP}" ec2-user@${NODE_IP}
