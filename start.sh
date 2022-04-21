#!/bin/bash

FILE=.env
ENVD_DIST_URL=https://gist.githubusercontent.com/4lysson-a/368e0f9e7a9bf49213c9d905956f141d/raw/16d839a14ae0797d512e42934e98a3520678b561/.env.dist

copy_env(){
  if test -f ".env.dist"; then
    echo "Criando arquivo .env" 
    echo
    sudo cp .env.dist .env
    rm .env.dist
    curl "$ENVD_DIST_URL" --output .env.dist
  fi 
}

verify_env(){
  if [ -e "$FILE" ] ; then
    echo ".env ja existe" 
  else
    copy_env
  fi
}

initialize_proj(){
  echo "iniciando projeto"
  npx install -g yarn
  yarn && yarn start
}

clear
verify_env
initialize_proj
