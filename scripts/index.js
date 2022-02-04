var last_index = 0;
var selected_person = 0;

const quotes_bill = [
    "“Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself.”",
    "“Your most unhappy customers are your greatest source of learning.”",
    "“It’s fine to celebrate success, but it is more important to heed the lessons of failure.”",
    "“We all need people who will give us feedback. That’s how we improve.”",
    "“Success is a lousy teacher. It seduces smart people into thinking they can’t lose.”",
];

const quotes_linus = [
    "“Talk is cheap. Show me the code.”",
    "“Given enough eyeballs, all bugs are shallow.”",
    "“Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.”",
    "“Intelligence is the ability to avoid doing work, yet getting the work done.”",
    "“Theory and practice sometimes clash. And when that happens, theory loses.Every single time.”",
];

const quotes_arthur = [
    "“It has yet to be proven that intelligence has any survival value.”",
    "“A faith that cannot survive collision with the truth is not worth many regrets.”",
    "“The future is not to be forecast, but created.”",
    "“I will not be afraid because I understand...And understanding is happiness.”",
    "“A well-stocked mind is safe from boredom.”",
];

const quotes_steve = [
    "“Stay hungry. Stay foolish.”",
    "“I'm convinced that about half of what separates the successful entrepreneurs from the nonsuccessful ones is pure perseverance.”",
    "“Don’t let the noise of others’ opinions drown out your own inner voice.”",
    "“Your time is limited, so don’t waste it living someone else’s life.”",
    "“We’re here to put a dent in the universe. Otherwise why else even be here?”",
];

const quotes_tim = [
    "“Data is a precious thing and will last longer than the systems themselves.”",
    "“I found myself answering the same questions asked frequently of me by different people. It would be so much easier if everyone could just read my database.”",
    "“I would have to create a system with common rules that would be acceptable to everyone. That meant as close as possible to no rules at all.”",
    "“E-mail allowed messages to be sent from one person to another, but did not form a space in which information could permanently exists and be referred to.”",
    "“Half-formed ideas, they float around. They come from different places, and the mind has got this wonderful way of somehow just shoveling them around until one day they fit. They may fit not so well, and then we go for a bike ride or something, and it’s better.”",
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomQuote(){
    
    let index = getRandomInt(0, quotes.length - 1);
    quotes[index];
}

function setQuote(quote){
    let element = document.getElementById("txt_quote");
    if (element != null){
        element.innerHTML = quote;         
    }
}

function setImgAndName(index){
    let name = document.getElementById("txt_name");
    let img = document.getElementById("img_person");
    if (name !== null && img !== null){
        switch(index){
            case 1:
                name.innerHTML = "Bill Gates";
                img.src = "assets/bill.jfif";
            break;
            case 2:
                name.innerHTML = "Steve Jobs";
                img.src = "assets/steve.jpg";
            break;
            case 3:
                name.innerHTML = "Linus Torvalds";
                img.src = "assets/linus.jpg";
            break;
            case 4:
                name.innerHTML = "Arthur Clarke";
                img.src = "assets/arthur.jfif";
            break;
            case 5:
                name.innerHTML = "Tim Berners-Lee";
                img.src = "assets/tim.jpg";
            break;         
        }
    }
}

function onClickPersonButton(i){
    if (i !== selected_person){
        selected_person = i;

        setImgAndName(i);
        setQuote("");

        var element = document.getElementById("card_quote");
        if (element !== null)
        element.classList.remove("hidden");
    }
}

const onClickGetQuote = () => {
    let r_index = getRandomInt(0, 4);

    while(r_index === last_index){
        r_index = getRandomInt(0, 4); 
    }

    switch(selected_person){
        case 1:
            setQuote(quotes_bill[r_index]);
        break;
        case 2:
            setQuote(quotes_steve[r_index]);
        break;
        case 3:
            setQuote(quotes_linus[r_index]);
        break;
        case 4:
            setQuote(quotes_arthur[r_index]);
        break;
        case 5:
            setQuote(quotes_tim[r_index]);
        break;
   }

   last_index = r_index;
}