import cardGame from "../../images/cardgame.PNG"
import calculator from "../../images/calculator.PNG";
import punkApi from "../../images/punkapi.PNG";
import coursology from "../../images/coursology.PNG"



const projectInfo = [
    {
        title: "Full Stack Project",
        subHeadings: ["SQL", "Java", "React", "Spring Boot"],
        overview: "This is a project that works off a SQL workbench local instance of a database. Using java and Spring Boot retrieve and send information that is then used in a react UI.",
        image: coursology,
        linkCode: "https://github.com/sPridmore96/full-stack-project",
        linkLiveSite: ""
    },
    {
        title: "Karma Card Game",
        subHeadings: ["JavaScript", "HTML", "SCSS"],
        overview: "This is a version of a card game called Karma. It's been built in javascript and has a multitude of rules that it abides by as well as a computer opponent.",
        image: cardGame,
        linkCode: "https://github.com/sPridmore96/Karma-card-game",
        linkLiveSite: "https://spridmore96.github.io/Karma-card-game/"
    }, 
    {
        title: "Punk API",
        subHeadings: ["react"],
        overview: "The Punk Api project uses the Punk Api to display cards of information for individual beers that can also be filtered.",
        image: punkApi,
        linkCode: "https://github.com/sPridmore96/punk-api",
        linkLiveSite: ""
    },
    {
        title: "Calculator",
        subHeadings: ["Javascript", "HTML", "SCSS"],
        overview: "This is a calculator project that has been made in Javascript. It can perform multiple calculations in one line abiding by the BODMAS rules of calculation. Its styling was based on a android phone calculator.",
        image: calculator,
        linkCode: "https://github.com/sPridmore96/calculator",
        linkLiveSite: "https://spridmore96.github.io/calculator/"
    },
]

export default projectInfo;