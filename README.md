# temployFront
Front End Repo

Instructions for running in cloud9 (make sure that you've git cloned the files)

1. curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

2. echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

3. curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -

4. sudo apt-get install -y nodejs

5. sudo apt-get update && sudo apt-get install yarn

6. yarn (just run this from within your repo directory

7. npm start

8. You should be able to connect to https://workspacename-username.c9users.io:8080/

For running in Docker
1. Install Docker CE
  - Go to https://store.docker.com/search?type=edition&offering=community and find your distribution
  - Follow the steps and install Docker CE

2. Install docker-compose
  - Go to https://docs.docker.com/compose/install/ and follow the instructions for your distribution/operating system

3. git clone the temployFront repo into a folder (doesn't really matter where)

4. With sudo permissions, run docker-compose build from within the folder

5. After it's done building, run docker-compose up -d from within the folder

6. Connect to temploy.localhost to view the API

If you are having trouble connecting add temploy.localhost to your hosts file, in linux you can do this by editing your /etc/hosts file and adding 127.0.0.1 (press tab) temploy.localhost, and another line with 127.0.0.1 (press tab) temploy-back.localhost
