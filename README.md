# Interns Journey

### Home
![Home](https://i.imgur.com/QTUC61V.png)

### Task Details
![Tasks](https://i.imgur.com/DgYdDH3.png)

### Instructions Details
![Instructions](https://i.imgur.com/nTbONJ9.png)

### Not Found Screen
![Notfound](https://i.imgur.com/X7o38Bs.png)


# Instructions

##### 1. Clone the project from GitHub: Interns can clone the project from the current repository. This will download the entire project to their local machine.

`git clone https://github.com/petrit-incodeks/interns-journey`

`cd interns-journey`

##### 2. Get changes from all branches ( in this case they will have staging, production and other branches they need in future ).

`git pull`

##### 3. Install dependencies listed in your project's package.json file.

`npm install`

##### 4. Create a branch with their name: Instructor or Intern will create a branch with their name, following the format of "name_lastname". This branch will serve as their personal branch where they will make all of their changes.

`git checkout -b name_lastname staging`

##### 5. Create a branch for each task: For each task, Interns will create a new branch using the command "git checkout -b task01". The branch name should be descriptive of the task they are working on, e.g "task01", "task02", etc.

`git checkout -b task01 name_lastname`

##### 6. Work on the specified file for each task: Interns will find the specified file for each task at "src > components > solutions > Solution{id of task}". They will make their changes to this file, and these changes will appear in the solution section of the task they are working on.

##### 7. Push changes to the created branch: After finishing the task, Interns will need to push their changes to the branch they created for the task. This will update the branch on GitHub with their changes.

##### - Check files that you changed:
`git status`
##### - Add changed files to commit ( Be carefull not to add other files that don't need to be commited )
`git add src/components/solutions/Solution1.js`
##### - Push the changes to the task branch
`git commit -m "your message (try to give few informations of changes you made)"`
##### - Push the changes to the task branch
`git push origin task01`
##### Note: It's a good practice to make regular commits during the task and to ensure that the branch is up to date before opening a Pull Request.

##### 8. Open a Pull Request: Interns will open a Pull Request to request the Instructor of the project to review their code. The Pull Request will show the changes they made and allow the Instructor to approve or request changes.

##### 9. Merge the code: If the Instructor approves the changes, the code will be merged into the Interns' personal branch, "name_lastname". This will update their branch on GitHub with the completed task.




## Available Scripts

In the project directory, you can run:

### `npm install` : This script installs all the dependencies listed in your project's package.json file.

### `npm start` : This script starts a development server and opens the project in the browser.

### `npm test` : This script runs your project's tests and outputs the results.

### `npm run build` : This script creates a production-ready build of your React project. The output is stored in the build directory.

### `npm run eject` : This script is used in Create React App projects to "eject" the project from the default setup and give you full control over the project's configuration.





