ssh-add /Users/ukuhnhardt/Downloads/DC-TEST.pem
export BASTION_IP=54.201.169.111
export NFS_SERVER=10.0.13.136
export SSH_OPTS='-o ServerAliveInterval=60 -o ServerAliveCountMax=30'
ssh ${SSH_OPTS} ec2-user@${BASTION_IP}