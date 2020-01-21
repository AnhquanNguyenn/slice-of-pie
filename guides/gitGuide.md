# A Useful Guide to Git: A More Proper Approach, So You Won't Be Overwhelmed Like Eyad :p

![Image](images/Git-Icon-1788C.png)

* This guide will include an explanation of what git is, of what useful commands you can use for git, and some example scenarios of how the whole process would take place.

# What is Git and What is it Used For?
* Git is a version-control software system used for tracking changes in source code during the software development lifecycle. It is designed for coordinated non-linear work among programmers. 
* It more simple terms, it is a way for people to incorporate changes within their local code so that it is up to date with everyone elses code. 
    * This is done by having a master branch, which stands for the baseline for an acceptable source code. This would be the minimum at which everyone would be working off from. But keep in mind that changes to master occur while you work sometimes, so you have to always be up to date with master if you want to incorporate your changes with other people's changes. 
    * In other words master is the only branch people care about. You can do whatever you want to in your branches. The only time people care about your branch is when you submit a merge request to master, which would mean you would be affecting the code that they are using. 
* It can also be used to track versioning of your code. Let's say you release an update to your code base, and then a bug in the code occurs. With versioning you can help narrow down the problem to see the exact changes you made to the code base, but at the same time you can revert your changes of the release so that people using your code in production can still have a service to use.

# What Happens From Local Machine to Remote Repository
* All the changes start with you, from your local machine or local repository. This repository resembles what is representative in the remote repository. That link is created from local to remote repository with the `git clone` command. Essentially this just creates a master branch identical to what is seen in the remote repository.
* When you create a branch locally, that doesn't mean that branch is seen remotely. You'll have to create the link to your local repository and remote repository and save the changes in the local repository to the remote repository. This is done through an upstream. 
* Locally when you add changes and commit those changes to a identifable tag system, that happens in your local repository. You will still need to push those changes up to the remote repository. 
* Master branch is a baseline branch. If your code in your branch doesn't match the master branch code, there will be merge conflicts. This means your local master branch isn't in sync with the remote master branch. You will need to pull from master and merge those changes to your branch, then create the merge to the remote repository again.
* Remember this is just a way for you to keep in sync with what other people are changing.  

# How to Properly Use Git
* First thing, you can create a local git repository from scratch with the command `git init`, but since you'll be using the visual interface, might as well just use it. So create your repositories in Github, and then clone that repo to make changes. This will create the necessary git streams for you to use git locally. 
* The next thing is in terms of branching. Keep it simple, and try not to make too many branches of branches kind of things. Keep your one change a merge request away from master, don't have like 55284234 merge requests necessary before you can merge to master. Just don't. 
* People make mistakes, that's fine. Git has accomodated for you. So if you make a mistake, have no fear. Using the right git commands will help. 
* Make your commits small and reasonable so people can track what you are doing. You should be able to describe your changes in less than 10 words.
* At the end of the day when you're ready to shut the computer off, just push your code to your branch in the remote repository, it helps with keeping track of your changes as well as saving your code in a safe place. 
* Never push directly to master, even if there are no restrictions. This has a high chance of breaking the code, so don't.


# To Clone A Repository
* Assuming you have no directory related to the project you're working on. You can download the master branch of a repo with the clone command. Simply do:
```
git clone [url to Repo]

For Example the slice-of-pie repository:

git clone https://github.com/AnhquanNguyenn/slice-of-pie.git
```

* ***Note*** a master branch will automatically be created, and is the only branch currently. **Remember** to create a branch so you can start making your changes.

# To Create A Branch
* Multiple ways to do this. The standard, most basic, lame, useless way:
```
git branch <branch_name> 
```
* This will create a branch, but it won't switch to that branch for you. If you're making a branch you're gonna wanna switch anyway, so the more efficient kool cid way:
```
git checkout -b <branch_name>
```
* The checkout command will switch to the specified branch, but since that branch doesn't exist it won't do anything/fail. Adding the -b argument will create branch and also switch to that branch for you. Now you're ready to go to work and make changes on your branch. 

# To Switch To A Specified Branch
* To simply switch to another branch and accept the code base within that branch use:\
```
git checkout <branch_name>
```

# To Show Branches in Your Repository
* This represents locally and remotely. To see all branches locally:
```
git branch
```

* To see all branches in your local and remote repository
```
git branch -a
```
