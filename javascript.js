
// Button
var btn = document.getElementById("make_it_rain"); 
btn.addEventListener("click", rainCat);

// Arrays for cat images, number of cats, position, rotation
var catImages = [];
var catLeftPositions = [];
var catTopPositions = [];
var catRotations = [];
var nbCats;

// Animation starts
function rainCat()
{ 
  setTimeout(animationEnd,10000);

  // Background properties 
    var background = document.getElementById("container");
        background.style.display = "block";
        document.body.appendChild(background);
    var pos_background = 0;
    setInterval(frameBackground, 100);

  // Background moves
    function frameBackground()
    {
    if (pos_background == -100) {
      pos_background = 0;
    } else {
      pos_background--;
      background.style.top = pos_background + "%"; 
      background.style.left = pos_background + "%"; 
      }
    }

 // Create bunch of cats
function manyCats() {
  nbCats = Math.floor(Math.random() * 20);
  for (i = 0; i < nbCats; i ++)
  {
    oneCat();
  }
  setInterval(frameCat, 5);
}

  // Create one cat
  function oneCat()
  {
    var nyanCat = document.createElement("img");
        nyanCat.src = "img/cat.png";
        nyanCat.style.position = "absolute";
        nyanCat.style.display = "none";
        nyanCat.style.transform = "rotate(45deg)";
        nyanCat.style.width = "150px";
        nyanCat.style.height = "100px";
        document.body.appendChild(nyanCat);
    catImages.push(nyanCat);
    catLeftPositions.push(100);
    catTopPositions.push(0);
    catRotations.push(0);
  }

  // Cats moves
    function frameCat()
    { 
      for (i = 0; i < nbCats; i ++)
      {
        if (catLeftPositions[i] == 100) 
        {
          catLeftPositions[i] = Math.floor(Math.random() * 50);
          catTopPositions[i] = 0;
          catRotations[i] = Math.floor(Math.random() * 360);
        } 
        else
        {
          catImages[i].style.display = "block";
          catTopPositions[i] = catTopPositions[i] + 0.5; 
          catLeftPositions[i] = catLeftPositions[i] + 0.5;
          catImages[i].style.top = catTopPositions[i] + "%"; 
          catImages[i].style.left = catLeftPositions[i] + "%"; 
          catImages[i].style.transform = 'rotate(' + catRotations[i] + 'deg)';
        }
      }
    }

  // Call cat images
  manyCats();

  // Music plays
    document.getElementById('myAudio').play();
    function playAudio() { audio.play(); }
}
  // Animation stops
    function animationEnd() {
      location.reload(); 
    }
