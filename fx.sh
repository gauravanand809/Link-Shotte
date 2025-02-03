#!/bin/bash

# Initialize a new Git repository
git init

# Add the README.md file (or create it if it doesn't exist)
if [ ! -f "README.md" ]; then
  echo "# Link-Shotte" > README.md  # Creates a basic README if one doesn't exist
fi
git add README.md

# Commit the initial changes
git commit -m "first commit"

# Rename the default branch to main (good practice)
git branch -M main

# Add the remote repository (replace with your actual URL)
git remote add origin https://github.com/gauravanand809/Link-Shotte.git

# Push the changes to the remote repository
git push -u origin main

echo "Git repository initialized, README added, initial commit made, remote added, and pushed to main."