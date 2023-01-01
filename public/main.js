const context = {
    title: 'Exec Committee',
    execMembers: [
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/squareRachel.jpg',
            name: 'Rachel Tsang',
            role: "President",
            course: 'Maths',
            year: 'Fourth Year',
            funFact: 'I can name all newcastle metro stations in order'
        },
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/Marcus.JPG',
            name: 'Marcus Tan',
            role: "Vice President",
            course: 'Law',
            year: 'Third Year',
            funFact: 'I love pickles!!'
        },
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/Tommy.JPG',
            name: 'Tommy Corteen',
            role: "Men's Captain",
            course: 'Mechanical Engineering',
            year: 'Fourth Year',
            funFact: "I've seen Drake live at concert"
        },
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/Melissa.jpg',
            name: 'Melissa Lin',
            role: "Women's Captain",
            course: 'Physics and Chemistry',
            year: 'Third Year',
            funFact: 'Give me 15 minutes, I can name every Taylor Swift song'
        },
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/Daisy.JPG',
            name: 'Daisy Parsons',
            role: "Treasurer",
            course: 'PPE',
            year: 'Second Year',
            funFact: 'I never miss friday night training ;)!'
        },
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/Meera.JPG',
            name: 'Meera Sharma-Singh',
            role: "Senior Social Sec",
            course: 'Maths',
            year: 'Third Year',
            funFact: 'Managed to get 12 drinks down at bottomless brunch and made it to the club 13 hours later'
        },
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/Kennice.JPG',
            name: 'Kennice Hui',
            role: "Junior Social Sec",
            course: 'Psychology',
            year: 'Third Year',
            funFact: 'I love double vodka and tomato juice'
        },
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/Abby.JPG',
            name: 'Abby Grogan',
            role: "College Officer",
            course: 'French and Theology',
            year: 'Second Year',
            funFact: 'I am virtually blind in my left eye, making it hard to see the shuttle!'
        },
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/Matt.JPG',
            name: 'Matt Lui',
            role: "Dev Squad Coordinator",
            course: 'Electrical Engineering',
            year: 'Third Year',
            funFact: 'I got eye surgery just to beat Nick Stoner in singles'
        },
        {
            image: 'resources/css/Photos/Badminton Photos/Exec/Nick.JPG',
            name: 'Nick Stoner',
            role: "Social Media Sec",
            course: 'Mechanical Engineering',
            year: 'Third Year',
            funFact: 'I have sung a solo live on BBC Radio 4!'
        }
    ]
}


const templateElement = document.getElementById("templateHB")

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource)

const compiledHtml = template(context)

document.getElementById('information').innerHTML = compiledHtml

//slideshow

 
  
 
  
 

