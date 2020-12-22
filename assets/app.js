const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">books</span>, <span class="code">clear</span>' ,
  about: "Hello there 👋 <br>I'm a Software Engineer that loves photography, reading and travelling.<br> (^_^)",
  skills:
    '<span class="code">Languages:</span> Java 8, JavaScript, NodeJS, Python3, HTML, CSS <br><span class="code">Technologies:</span> Spring Boot, React JS, Cassandra, Redis, AWS Cloudformation, AWS SAM',
  education:
    '<strong class="header-name">Institute of Engineering and Technology - DAVV, Indore</strong><br>B.E. Information Technology (2015-2019)<br>GPA - 8.07/10<br><br><strong class="header-name">Campion School, Bhopal</strong><br>AISSCE - Higher Secondary (2014-2015)<br>Percentage - 92.60%',
  resume:
    "<a href='./Prateek_Jagan_resume.pdf' class='success link'>Prateek_Jagan.pdf</a>",
  experience:
    'July 2019 - Present<br> <i>Support Engineer II</i> <br><strong class="header-name">Evive Software Analytics Pvt. Ltd <br></strong><br>Jan. 2019 - June 2019<br><i>DevOps Engineer - Intern</i><br><strong class="header-name">Evive Software Analytics Pvt. Ltd</strong>',
  books:
    '<strong class="header-name">Ah! So you like reading.</strong><br> I plan to publish my book someday🤞 till then you can read some of my favorites.<br>1. 1984 by George Orwell <br>2. Why we sleep by Matthew Walker<br>3. Mindset by Carol Dweck',
  // corgi:
  //   "My top 3 favorite corgis (click to view):<br><a href='https://www.instagram.com/bearorcorgi/' class='success link'>Bear</a>, <a href='https://www.instagram.com/lychee_the_corgi/' class='success link'>Mochee</a>, <a href='https://www.instagram.com/thecorgijack/' class='success link'>Jack</a>",
  clear:
    "clearing the screen ---",
  };
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById('userInput');
  terminalOutput = document.getElementById('terminalOutput');
  document.getElementById('dummyKeyboard').focus();
  console.log('Application loaded');
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log('Oops! no such command');
  } if (input == 'clear') {
    window.location.reload()
  } 
  else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === 'Enter') {
    execute(input);
    userInput.innerHTML = '';
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener('keydown', backspace);
document.addEventListener('keypress', key);
document.addEventListener('DOMContentLoaded', app);
