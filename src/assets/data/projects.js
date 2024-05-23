import { v4 as uuidv4 } from 'uuid';
import TamMusic from '../images/TamMusic.png';
import yoga from '../images/yoga.png';
import sunglasses from '../images/sunglasses.png';
import portfolio from '../images/portfolio.png';
import guessnumber from '../images/guessnumber.png';

const projects = [
  {
    id: uuidv4(),
    name: 'TamMusic',
    tech: 'React.js, Bootstrap, PHP, MySQL',
    desc:
      'A music platform for audience and artists, featuring user login and authentication, creating personal playlist, musicplayer, data management for admin.',
    img: TamMusic,
    github: 'https://github.com/EchoOuO/react-music-platform',
    demo:''
  },
  {
    id: uuidv4(),
    name: 'E-commerce for sunglasses',
    tech:'jQuery, HTML & CSS',
    desc:
      "A project adding a new product comparison feature in hypothetical client's website.",
    img: sunglasses,
    github: 'https://github.com/EchoOuO/E-commerce-Sunglass',
    demo:''
  },
  {
    id: uuidv4(),
    name: "My Portfolio",
    tech: 'JavaScript, HTML & CSS, Responsive design',
    desc:
      "A portfolio for myself, showcasing what I've learnt in 2 months.",
    img: portfolio,
    github: 'https://github.com/EchoOuO/Personal-Portfolio-Website',
    demo:'https://echoouo.github.io/Personal-Portfolio-Website/'
  },
  {
    id: uuidv4(),
    name: 'Yoga website',
    tech: 'JavaScript, HTML & CSS, Responsive design',
    desc:
      'A website for whom is interested in yoga and willing to find a personal trainer.',
    img: yoga,
    github: 'https://github.com/EchoOuO/yoga-studio-project',
    demo:'https://echoouo.github.io/yoga-studio-project/'
  },
  {
    id: uuidv4(),
    name: 'Guess Number Game',
    tech: 'JavaScript, HTML & CSS',
    desc:
      'A small project - guessing number game with old-fasioned styling.',
    img: guessnumber,
    github: 'https://github.com/EchoOuO/20240208-Guess-Number-Game',
    demo:'https://echoouo.github.io/20240208-Guess-Number-Game/'
  },
];

export default projects;
