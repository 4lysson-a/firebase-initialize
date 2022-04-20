#!/bin/bash

FILE=.env

copy_env(){
  if test -f ".env.dist"; then
    echo "Criando arquivo .env" 
    sudo cp .env.dist .env
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
  yarn start
}

clear
verify_env
initialize_proj
