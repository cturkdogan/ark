#global user settings
git config --global user.name "FIRST_NAME LAST_NAME"
git config --global user.email "MY_NAME@example.com"
#git proxy setup
git config --global http.proxy http://proxy-sen.noc.sony.co.jp:10080
git config --global http.https://github.com/cturkdogan/inzd.git.sslVerify false
#check config
git config --global --get-regexp http.*
#at the project directory
git init
#create a working copy of local repository
git clone C:\workspace\inzossapp
#if it is at the remote site
git clone cturkdogan@github.com/cturkdogan/inzd.git:C:\workspace\inzossapp
#add changes to the Index
git add <filename>
git add *
#clean repository
git rm -r --cached .
#commit these changes to the Head
git commit -m "Commit message"
#add remote repository 
git remote add origin https://github.com/cturkdogan/inzd.git
#push the changes to remote repository
git push origin master https://github.com/cturkdogan/inzd.git
#push the changes to remote repository --changes will be lost on remote!!
git push --force origin master https://github.com/cturkdogan/inzd.git
#create a new branch named "feature_x" and switch to it using
git checkout -b feature_x
#switch back to master
git checkout master
#delete the branch
git branch -d feature_x
#push the branch to your remote repository
git push origin <branch>
#update your local repo to the newest commit
git pull
#merge another branch to your master
git merge <branch>
#if there are conflicts during merge correct them and
git add <filename>
#before merging preview
git diff <source_branch> <target_branch>
#tagging
git tag 1.0.0 <commit id>
#check commit id on log
git log
#only the commits of a certain author
git log --author=cturkdogan
#compressed log
git log --pretty=oneline
git log --graph --oneline --decorate --all
#files changed
git log --name-status
#help
git log --help
#replace local changes
git checkout -- <filename>
#drop all changes commit back to latest master
git fetch origin
git reset --hard origin/master
#built-in git GUI
gitk
