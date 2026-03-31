#!/bin/bash

echo "===== PLATINUM DEPLOY START ====="

# stop on error
set -e

echo "Fixing git..."
git init || true
git branch -M main || true
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/mihassan-97/hackathon-0-Platinum-Tier.git

echo "Removing nested repos..."
git rm --cached "gold tier" -r 2>/dev/null || true

echo "Fix package.json build..."
cat << 'JSON' > vercel.json
{
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/.next",
  "framework": "nextjs"
}
JSON

echo "Git add..."
git add .

echo "Git commit..."
git commit -m "platinum final deploy" || true

echo "Set upstream..."
git push -u origin main

echo "Deploying to Vercel..."
npx vercel --prod --yes

echo "===== DEPLOY COMPLETE ====="
