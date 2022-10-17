### Hexlet tests and linter status:

[![Actions Status](https://github.com/ElisabethFox/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/ElisabethFox/frontend-project-lvl1/actions)

<a href="https://codeclimate.com/github/ElisabethFox/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/9adab8822057a74866b9/maintainability" /></a>

**"Brain Games" is a collection of five console games for brain-pumping. Each game asks questions that need to be answered correctly. After three correct answers, the game is considered completed. Incorrect answers end the game and offer to go through it again.**

**How to use it?**

> 1.  Install node.js of the latest version on the system globally. Upgrade Node.js to the latest version
```
Ubuntu или Ubuntu on Windows:
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

macOS
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install nodejs
```
> 2.  Clone the repository locally: https://github.com/ElisabethFox/frontend-project-lvl1
> 3.  Initialize the npm package inside the root directory of the project
```
npm init
```
> 4.  Start every game, which you choose, with command:
 - brain-even 
 - brain-calc
 - brain-gcd
 - brain-progression
 - brain-prime

*Brain-even.* The user is shown a random number, he should answer 'yes' if the number is even, or 'no' if it is odd.
[![asciicast](https://asciinema.org/a/524324.svg)](https://asciinema.org/a/524324)

*Brain-calc.* The user is shown a mathematical expression, he should give the correct answer.
[![asciicast](https://asciinema.org/a/524996.svg)](https://asciinema.org/a/524996)

*Brain-gcd.* The user is shown two random numbers, he should calculate and enter the greatest common divisor of these numbers. 
[![asciicast](https://asciinema.org/a/525087.svg)](https://asciinema.org/a/525087)

*Brain-progression.* The user is shown a series of numbers that form an arithmetic progression, but one element. He should calculate this element.
[![asciicast](https://asciinema.org/a/525179.svg)](https://asciinema.org/a/525179)

*Brain-prime.* The user is shown a random number, he should answer 'yes' if the number is prime, or 'no' if it is complex. 
[![asciicast](https://asciinema.org/a/525879.svg)](https://asciinema.org/a/525879)

**Minimum system requirements:**

> • MacOS/Linux
> • Windows + WSL
> • node.js v16.0.0.
