#!/bin/bash
set -e

echo "Restoring package.json..."

cat << 'JSON' > package.json
{
  "name": "hackathon-0-platinum-tier",
  "private": true,
  "scripts": {
    "build": "cd frontend && npm install && npm run build"
  }
}
JSON

echo "Fix vercel config..."

cat << 'JSON' > vercel.json
{
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/.next",
  "framework": "nextjs"
}
JSON

echo "Remove nested repo..."
git rm --cached "gold tier" -r 2>/dev/null || true

echo "Commit..."
git add .
git commit -m "fix: restore package.json and deploy" || true

echo "Push..."
git push

echo "Deploy..."
npx vercel --prod --yes

echo "DONE"
