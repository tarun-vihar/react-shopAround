#!/bin/bash

# wait for PSQL to server to start
sleep 5
echo "Django Configuration"

# prepare init migration
echo "prepare init migration"

python manage.py makemigrations

# migrate db, so we have the latest db schema
echo "migrate db"
python manage.py migrate

# start development server on public ip interface, on port 8000
python manage.py runserver 0.0.0.0:8000