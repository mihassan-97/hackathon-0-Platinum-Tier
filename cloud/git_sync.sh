#!/bin/bash
while true
do
git pull
git add .
git commit -m "cloud sync" || true
git push
sleep 30
done
