import cardGame from "../../images/cardgame.PNG"
import calculator from "../../images/calculator.PNG";
import punkApi from "../../images/punkapi.PNG";
import coursology from "../../images/coursology.PNG"
import HomePage from "../../images/Front-end-pa/home-page.PNG"
import mapsPage from "../../images/Front-end-pa/maps-page.PNG"
import splashPage from "../../images/Front-end-pa/splash-page.PNG"
import weatherPage from "../../images/Front-end-pa/weather-page.PNG"



const projectInfo = [
    {
        title: "Full Stack Project",
        subHeadings: ["SQL", "Java", "React", "Spring Boot"],
        overview: "This is a project that works off a SQL workbench local instance of a database. Using java and Spring Boot retrieve and send information that is then used in a react UI.",
        images: [coursology],
        linkCode: "https://github.com/sPridmore96/full-stack-project",
        linkLiveSite: "#"
    },
    {
        title: "Front-end Personal Assistant",
        subHeadings: ["React"],
        overview: "A Personal assistant front end based application built in react. The project was to show how the users IP could be collected and using GeoLocation to be able to collect relevant information like weather and a commute to work/ particular location. ",
        images: [splashPage, HomePage, weatherPage, mapsPage],
        linkCode: "https://github.com/sPridmore96/front-end-personal-assistant-app",
        linkLiveSite: "https://spridmore96.github.io/front-end-personal-assistant-app/"
    },
    {
        title: "Karma Card Game",
        subHeadings: ["JavaScript", "HTML", "SCSS"],
        overview: "This is a version of a card game called Karma. It's been built in javascript and has a multitude of rules that it abides by as well as a computer opponent.",
        images: [cardGame],
        linkCode: "https://github.com/sPridmore96/Karma-card-game",
        linkLiveSite: "https://spridmore96.github.io/Karma-card-game/"
    }, 
    {
        title: "Punk API",
        subHeadings: ["react"],
        overview: "The Punk Api project uses the Punk Api to display cards of information for individual beers that can also be filtered.",
        images: [punkApi],
        linkCode: "https://github.com/sPridmore96/punk-api",
        linkLiveSite: ""
    },
    {
        title: "Calculator",
        subHeadings: ["Javascript", "HTML", "SCSS"],
        overview: "This is a calculator project that has been made in Javascript. It can perform multiple calculations in one line abiding by the BODMAS rules of calculation. Its styling was based on a android phone calculator.",
        images: [calculator],
        linkCode: "https://github.com/sPridmore96/calculator",
        linkLiveSite: "https://spridmore96.github.io/calculator/"
    },
]

export default projectInfo;