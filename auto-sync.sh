#!/bin/bash
while true
do
git pull origin main
git add .
git commit -m "platinum auto sync" || true
git push origin main
sleep 20
done
