# [React Tic-Tac-Toe](https://sctlcd.github.io/react-tic-tac-toe/)

<img src="https://github.com/sctlcd/react-tic-tac-toe/blob/master/src/images/react-tic-tac-toe_multi_device_website_mockup-min.png" alt="React Tic-Tac-Toe" width="700">

[Let's play!](https://sctlcd.github.io/react-tic-tac-toe/)

---

# Table of Contents <a name="TableOfContents"></a>

1. [About](#About)

	- [How to play](#HowToPlay)

2. [Technologies Used](#TechnologiesUsed)

	- [Front-End Technologies](#Front-end-technologies)

3. [Deployment](#Deployment)

	- [Prerequisites](#Prerequisites)
	- [Deployment – Live website](#Deploymentlivewebsite)
	- [Deployment – Run locally](#Deploymentrunlocally)

4. [Credits](#Credits)

	- [Media](#Media)
	- [Code](#Code)

---

## About <a name="About"></a>

### How to play <a name="HowToPlay"></a>
1. The game is played on a grid that's 3 squares by 3 squares.

2. Player 1 is X, Player 2 is O. Players take turns putting their marks in empty squares.

3. The first player to get 3 of his marks in a row (up, down, across, or diagonally) is the winner.

4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

5. Travel Time option: Players can go back in time to the previous moves in the game by clicking on the buttons on the right side of the screen.

Back to [top](#TableOfContents)

 ---

## Technologies Used <a name="TechnologiesUsed"></a>

- [GitHub](https://github.com/) - Used as remote storage of my code online.
- [Atom](https://atom.io/) - Used as a local IDE.
- [Compressjpeg](https://compressjpeg.com/) - Used to compress images for loading faster
- [Techsini](https://techsini.com/multi-mockup/) - Used to generate multi-device website mockup

Back to [top](#TableOfContents)

 ---

##### Front-End Technologies <a name="Front-end-technologies"></a>

- [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used as the base for markup text.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Used as the base for cascading styles.
- [JavaScript](https://www.javascript.com/): Used for user interactions.
- [React](https://reactjs.org/): front end, JavaScript library used for building user interfaces or UI components. The main purpose of React is to be fast, scalable, and simple.

Back to [top](#TableOfContents)

 ---

## Deployment <a name="Deployment"></a>

### Prerequisites

1. An adequate version of [`Node.js`](https://nodejs.org/en/) is installed. Here's the adequate version I use:
		$ node --version
		v12.18.4

2. An adequate version of [`npm`](https://www.npmjs.com/) is installed. Here's the adequate version I use:
		$ npm --version
		v7.5.4

3. A [GitHub](https://github.com/) account

4. A command-line Git client [setup according to GitHub](https://docs.github.com/en/github/getting-started-with-github/set-up-git)

### Deployment – Live Website <a name="Deploymentlivewebsite"></a>

1.	Create an empty repository on GitHub and give it a relevant name. In my case the repo sitory is named `react-tic-tac-toe`
 - By empty, I mean without a `README.md` file, a `.gitignore` file, a `LICENSE` file, or any other files.

2. Create a new React app on your computer.
		$ npx create-react-app my-app
 - This is the app you will deploy to GitHub Pages in step 7.

3. Install the `gh-pages` package as a "dev-dependency" of the app.
		$ cd my-app
		$ npm install gh-pages --save-dev

4. Add some properties to the app's `package.json` file.
 - At the top level, add a `homepage` property. Define its value to be the string `http://{username}.github.io/{repo-name}`, where `{username}` is your GitHub username, and `{repo-name}` is the name of the GitHub repository you created in step 1. Since my GitHub username is `sctlcd` and the name of my GitHub repository is `react-tic-tac-toe`, I added the following property:
			//...
			"homepage": "http://sctlcd.github.io/react-tic-tac-toe",
			//...

 - In the existing `scripts` property, add a `predeploy` property and a `deploy` property, each having the values shown below:
			"scripts": {
				//...
				"predeploy": "npm run build",
				"deploy": "gh-pages -d build"
				//...
			}

5. Create a git repository in the app's folder.
		$ git init
		Initialized empty Git repository in C:/path/to/react-gh-pages/.git/

6. Add the GitHub repository as a "remote" in your local git repository.
		$ git remote add origin https://github.com/sctlcd/react-tic-tac-toe.git
 - This will make it so the gh-pages package knows where you want it to deploy your app in step 7.
 - It will also make it so git knows where you want it to push your source code (i.e. the commits on your master branch) in step 8.

7. Generate a production build of your app, and deploy it to GitHub Pages.
		$ npm run deploy
	- That's it! Your app is now accessible at the URL you specified in step 4.
	- In my case, my app is now accessible at: https://sctlcd.github.io/react-tic-tac-toe/
	- Check GitHub repository: `master` branch did not exist, a `gh-pages` branch did exist. `gh-pages` branch contained the built app code, as opposed to the app's source code.

8. Optionally, commit your source code to the "master" branch and push your commit to GitHub.
		$ git add .
		$ git commit -m "Create a React app and publish it to GitHub Pages"
		$ git push origin master
	- GitHub repository: `master` branch now existed, and it contained the app's source code.
	- So, the master branch held the source code, and the gh-pages branch held the built app code.

9. In Github click on your repository `react-tic-tac-toe` to open it.

10. Find the “settings” tab and click on it.

11. Scroll down until the “GitHub Pages” sections.

12. Under the “source” drop down menu, choose a branch. I chose “gh-pages” and select it.

13. You will then see a URL to your live webpage. In my case the URL is https://sctlcd.github.io/react-tic-tac-toe/

Back to [top](#TableOfContents)

 ---

### Deployment – Run Locally <a name="Deploymentrunlocally"></a>

1.	Again, click on the repository called [react-tic-tac-toe](https://github.com/sctlcd/react-tic-tac-toe)
2.	Along the top bar, find the “clone or download” button.
3.	Here you have the option to clone by HTTPS or SSH.
4.	Once you have chose your desired option, then click the copy icon next to the URL.
5.	Open Git Bash.
6.	Ensure you are in the correct directory which you want to copy the code into. If not, change the directory.
7.	In the terminal, write
			$ git clone https://github.com/sctlcd/react-tic-tac-toe.git
8.	Press the enter button and your clone will be created.

Back to [top](#TableOfContents)

---

## Credits <a name="Credits"></a>

### Media <a name="Media"></a>

Sources of the images used on this site:

- From public directory - [Github](https://github.com/sctlcd/react-tic-tac-toe/tree/master/assets/images)
	- [favicon.ico](https://www.flaticon.com/free-icon/tic-tac-toe-hand-drawn-game_57180?term=tic%20tac%20toe&page=1&position=1&page=1&position=1&related_id=57180&origin=search) | copyright [Freepik](https://www.freepik.com)

### Code <a name="Code"></a>

- React Tic-Tac-Toe tutorial - [React](https://reactjs.org/tutorial/tutorial.html)
- Deployment - [Create React App](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom)
- Deploying a React App* to GitHub Pages - [Github](https://github.com/gitname/react-gh-pages)

Back to [top](#TableOfContents)

---
