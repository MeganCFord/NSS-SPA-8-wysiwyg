
//DOM getter variables.
var container = document.getElementById("container");
var inputText = document.getElementById("inputText");

// Create an array of objects that represents famous people (see structure below).
var famousPeople = [
  {
    title: "Mrs.", 
    name: "Kelly Frost",
    bio: "my mom. RV's 6 months out of the year.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Frost_patterns_2.jpg",
    lifespan: {
      birth: "1960",
      death: "n/a"
    }
  }, 
  {
    title: "Mr.",
    name: "Scott Frost",
    bio: "my stepdad. acts a little like an old person but is very handy.",
    image:"http://vignette4.wikia.nocookie.net/trollpasta/images/1/18/Happy-old-man.jpg/revision/latest?cb=20150224154055",
    lifespan: {
      birth: "unsure",
      death: "n/a"
    }
  },
  {
    title: "Mr.", 
    name: "Steve Ford", 
    bio: "my dad. President of a record label. Bad taste in books.", 
    image:"http://i.dailymail.co.uk/i/pix/2015/11/09/20/2DFE99E700000578-3310861-image-m-58_1447100715441.jpg",
    lifespan: {
      birth: "1960",
      death: "n/a"
    }
  }, 
  {
    title: "Ms.",
    name: "Emily Ford", 
    bio: "my sister. Works in LA at dreamworks.",
    image: "http://www.thewrap.com/wp-content/uploads/2014/07/dreamworks.jpg",
    lifespan: {
      birth: "1989", 
      death: "n/a"
    }
  }, 
  {
    title: "Mr.", 
    name: "Evan Ford", 
    bio: "my brother. is a self-taught developer and a musician. Bad at texting.",
    image: "http://www.brittneywillifordblog.com/wp-content/uploads/2012/12/CereusBright_3-1024x681.jpg",
    lifespan: {
      birth: "1993", 
      death: "n/a"
    }
  }, 
  {
    title: "Mrs.", 
    name: "CherylAnn Stephens", 
    bio: "my stepmom. owns a really successful modeling agency.",
    image: "https://pbs.twimg.com/profile_images/502499544496476161/xfBie3Bh.jpeg",
    lifespan: {
      birth: "unsure", 
      death: "n/a"
    }
  }
];

//This function allows an event listener to be attached to each card instead of just the last one.
var createPersonCard = function() {
  let card = document.createElement("div");
  container.appendChild(card);
  return card;
}


//MAIN CARD CREATOR loop.
var createPerson = function() {
  for(counter = 0; counter < famousPeople.length; counter++) {

    //background color loop.
    var theClasses = "";
    if ((counter+1) % 2 === 0) {
      // For every odd numbered element, have a light blue background.
      theClasses = "bluebg";
    } else {
      // For every even numbered element, have a light yellow background.
      theClasses = "yellowbg";
    };

    //Create a DOM element for each of the objects inside the container.
    let card = createPersonCard();  
    card.innerHTML += 
      `<div class = "person col-xs-3 ${theClasses}" id = "card${counter + 1}">
        <h4 class = "">${famousPeople[counter].title} ${famousPeople[counter].name}</h4>
        <section class = ""><p class = "bio">${famousPeople[counter].bio}</p></section>
        <div class = ""><img src = "${famousPeople[counter].image}"></div>
        <footer class = ""><p class = ""> ${famousPeople[counter].lifespan.birth} - ${famousPeople[counter].lifespan.death}</p></footer>
      </div>`  
  }  
}
createPerson();



// When you click on one of the person elements, a dotted border should appear around it.
var highlighting = function(event) {
  var currentperson = event.currentTarget;
  event.preventDefault();
  currentperson.classList.toggle("dottedborder");
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
  inputText.focus();

  var editBio = function(event) {
    if (event.keyCode === 13) {
      // When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
      inputText.value = "";
    } else {
      // When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
      // note, this was Ryan's solution. jquery will make this less tightly bound to HTML.
      currentperson.getElementsByClassName("bio")[0].innerHTML = inputText.value;
    }

  }
  inputText.addEventListener("keyup", editBio);
}

//event listener added to each card in a loop. AFTER the main loop is run since you can't attach an event listener to something until it exists.
var personDivs = document.getElementsByClassName("person");
for (i=0; i<personDivs.length; i++) {
  personDivs[i].addEventListener("click", highlighting);
}



