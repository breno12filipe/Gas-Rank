#!/bin/bash

RED='\033[0;31m'
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'


# ->install steps...
#   º First check if node is installed, if is not then install it
#   º Second check if mysql is installed, if is not then install it
#   º Create mysql scheme and configure at the right port
#   º Third open directory and run npm install 


NPM_OK=$(dpkg-query -W --showformat='${Status}\n' npm|grep "install ok installed")
printf "${BLUE}Checking if Node is installed...${NC}\n"
if [ "" = "$NPM_OK" ]; 
  then
    printf "${RED}Node not installed!. ${YELLOW}Setting up Node...\n"
    sudo apt-get --y install npm
  else
    printf "${GREEN}Node Already installed!${NC}\n\n"
fi

printf "${BLUE}Checking if Mysql is installed...${NC}\n"
MYSQL_OK=$(which mysql|grep "/mysql")
if [ "" = MYSQL_OK ];
  then
    printf "${RED}MySQL not installed! ${YELLOW}Setting up MySQL...\n"
    sudo apt install mysql-server
  else
    printf "${GREEN}MySQL Already installed!${NC}\n\n"
fi


database_connection(){
    echo -e "${BLUE}TRYING TO CONNECT TO DATABASE...${NC}"
    psw = root
    mysql -u root -p gasRank
    if [ $? -eq 1 ];
        then        
            echo -e "${RED}UNABLE TO CONNECT TO DATABASE :c";    
    fi  
}

expo_init(){
    # NOTE: Maybe I should instance another terminal and execute it?
    cd gasRank
    echo -e "${BLUE}TRYING TO CONNECT TO EXPO...${NC}"
    expo start
}

express_init(){
    # NOTE: Maybe I should instance another terminal and execute it?
    cd gasRankServer
    echo -e "${BLUE}TRYING TO CONNECT TO EXPRESS...${NC}"
    npm start    
}

# gnome-terminal -x sh -c "cd gasRankServer && npm start"
# sleep 10
# gnome-terminal -x sh -c "cd gasRank && expo start"
# sleep 10
# gnome-terminal -x sh -c "mysql -u root -p gasRank"
# database_connection
# express_init
# expo_init







