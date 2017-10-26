
* # git

  ​

  - 状态查看		git status	
  -  变化比较        git diff           
  - 查看提交记录   git log            
    - git log --pretty=oneline(同样)
  - git reset --hard HEAD(版本号)
  - 查看每一次记录            git reflog  
  -  从暂存库恢复到工作区          git-checkout  --file(没有--就是创建分支)         
  - ​
  - ​
  - git branch -a        查看分支
  - git branch name 创建分支
  - git checkout name 切换分支
  - git checkout -b name 创建并切换分支
  - git merge name   合并某分支到当前分支
  - git branch -d name 删除分支

  ​

  - 冲突合并、快速合并、有记录合并

  ​

  - git remote     查看远程仓库分支
  - git push origin master    本地分支推送到远程
  - git branch --set-upstream branch-name origin/branch-name    建立本地和远程分支的关系(git pull提示“no tracking information”)
  - git pull    从服务端拉取