### Hexlet tests and linter status:

[![Actions Status](https://github.com/ElisabethFox/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/ElisabethFox/frontend-project-lvl1/actions)

<a href="https://codeclimate.com/github/ElisabethFox/frontend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/9adab8822057a74866b9/maintainability" /></a>

**"Brain Games" is a collection of five console games for brain-pumping. Each game asks questions that need to be answered correctly. After three correct answers, the game is considered completed. Incorrect answers end the game and offer to go through it again.**

**How to use it?**

> 1.  Install node.js of the latest version on the system globally
> 2.  Clone the repository locally: https://github.com/ElisabethFox/frontend-project-lvl1
> 3.  Initialize the npm package inside the root directory of the project
> 4.  Start every game with command: brain-even, brain-calc, brain-gcd, brain-progression, brain-prime

First game: brain-even. The user is shown a random number, he should answer 'yes' if the number is even, or 'no' if it is odd. 
<html>
<head>
  <link rel="stylesheet" type="text/css" href="asciinema-player.css" />
</head>
<body>
  <div id="player"></div>
  <script src="asciinema-player.min.js"></script>
  <script>
    AsciinemaPlayer.create(
      '524324.cast',
      document.getElementById('player'),
      { cols: 80, rows: 24 }
    );
  </script>
</body>
</html>

Second game: brain-calc. The user is shown a mathematical expression, he should give the correct answer. https://<html>
<head>
  <link rel="stylesheet" type="text/css" href="asciinema-player.css" />
</head>
<body>
  <div id="player"></div>
  <script src="asciinema-player.min.js"></script>
  <script>
    AsciinemaPlayer.create(
      '524996.cast',
      document.getElementById('player'),
      { cols: 80, rows: 24 }
    );
  </script>
</body>
</html>

Third game: brain-gcd. The user is shown two random numbers, he should calculate and enter the greatest common divisor of these numbers.
<html>
<head>
  <link rel="stylesheet" type="text/css" href="asciinema-player.css" />
</head>
<body>
  <div id="player"></div>
  <script src="asciinema-player.min.js"></script>
  <script>
    AsciinemaPlayer.create(
      '525087.cast',
      document.getElementById('player'),
      { cols: 80, rows: 24 }
    );
  </script>
</body>
</html>

Fourth game: brain-progression. The user is shown a series of numbers that form an arithmetic progression, but one element. He should calculate this element. 
<html>
<head>
  <link rel="stylesheet" type="text/css" href="asciinema-player.css" />
</head>
<body>
  <div id="player"></div>
  <script src="asciinema-player.min.js"></script>
  <script>
    AsciinemaPlayer.create(
      '525179.cast',
      document.getElementById('player'),
      { cols: 80, rows: 24 }
    );
  </script>
</body>
</html>

Fifth game: brain-prime. The user is shown a random number, he should answer 'yes' if the number is prime, or 'no' if it is complex. 
<html>
<head>
  <link rel="stylesheet" type="text/css" href="asciinema-player.css" />
</head>
<body>
  <div id="player"></div>
  <script src="asciinema-player.min.js"></script>
  <script>
    AsciinemaPlayer.create(
      '525879.cast',
      document.getElementById('player'),
      { cols: 80, rows: 24 }
    );
  </script>
</body>
</html>

**Minimum system requirements:**

> • MacOS/Linux
> • Windows + WSL
> • node.js v16.0.0.
