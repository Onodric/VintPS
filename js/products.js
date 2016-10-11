// class="card" ------------> Article Styling
// class="card-container" --> Card Styling
// class="gameTitle" -------> h1 Title Insertion point
// class="img-anchor" ------> Anchor insertion point
// class="game-img" --------> img insertion point, img styling
// class="desc-text" -------> description insertion point, description styling
// class="pricing" ---------> Price insertion point

var productCardGenericTitle = '<article class="card"><div class="card-container"><header><h3 class="gameTitle">';
var productCardGenericAnchorURL = '</h3></header><section><a href="';
var productCardGenericImageURL = '" class="img-anchor"><img src="';
var productCardGenericDescText = '" alt="product" class="game-img"></a><p class="desc-text">';
var productCardGenericPricing = '</p></section><section class="pricing"><header><h4>Pricing</h4></header><p>';
var productCardGenericEnd = '</p></section></div></article>';

var insertIntoDOM = '';
var insertionPoints = document.getElementsByClassName("content");

var gameArray = [
  {name: "Final Fantasy 7",
  description: "Long recognized as role-playing games par excellence, the Final Fantasy series gets a technological makeover in this installment (and series debut on the PlayStation).",
  price: "$99",
  link: "images/FF7cover.jpg"},

  {name: "NCAA Football 99",
  description: "Desire + Pride = Victory! Guide your favorite college team on the road to the National Championship!",
  price: "$15.99",
  link: "http://www.theoldcomputer.com/game-box-art-covers/Sony/Playstation-PS1/N/NCAA%20Football%20'99%20%5BU%5D%20%5BSLUS-00688%5D-front.jpg"},

  {name: "Tekken",
  description: "This is the one that's got the press salivating. The one that's got gamers hyperventilating. This is Tekken. Eight deadly fighters engaged in the ultimate battle for supremacy. Winner goes home filthy rich. Loser goes home in a pine box.",
  price: "$9.98",
  link: "https://hgaming91.files.wordpress.com/2013/04/tekken.jpg"},

  {name: "Vagrant Story",
  description: "Vagrant Story is an isometric action-RPG by Squaresoft, set in the Ivalice universe established by Final Fantasy Tactics. First released in February 2000 for the PlayStation, it was highly praised by critics, and still has a devoted cult following.",
  price: "$149",
  link: "images/vagrantstorycover.jpg"},

  {name: "Xenogears",
  description: "Xenogears follows protagonist Fei Fong Wong and several others as they journey to uncover the truth behind mysterious, cabalistic entities operating in their world.",
  price: "$125",
  link: "https://i.ytimg.com/vi/fbX1HxKc-eU/maxresdefault.jpg"},

  {name: "Metal Gear Solid",
  description: "Players slip into the role of Konami hero Solid Snake and set out on a government mission to regain control of a secret nuclear weapons base from terrorists' hands.",
  price: "$45",
  link: "http://s.emuparadise.org/fup/up/52374-Metal_Gear_Solid_(G)_(Disc_1)-1.jpg"},

  {name: "Magical Mall Adventure",
  description: "MAGIC!! MYSTERY!! MALLS!! M&K!! WHAT MORE COULD YOU WANT?!?",
  price: "$2499.99",
  link: "https://images-na.ssl-images-amazon.com/images/I/61E9tXMgwxL.jpg"},

  {name: "TWISTED METAL",
  description: "Desire + Pride + METAL! Guide your favorite Hunk of metal on the road to Destruction",
  price: "$15.99",
  link: "http://0.tqn.com/d/vgstrategies/1/S/D/l/3/twistedmetal.jpg"}
  ];
            
for (var i = 0; i < gameArray.length; i += 1) {
  var title = productCardGenericTitle + gameArray[i].name;
  // console.log(title);
  var anchorURL = productCardGenericAnchorURL + gameArray[i].link;
  // console.log(anchorURL);
  var imageURL = productCardGenericImageURL + gameArray[i].link;
  // console.log(imageURL);
  var description = productCardGenericDescText + gameArray[i].description;
  // console.log(description);
  var pricing = productCardGenericPricing + gameArray[i].price;
  // console.log(pricing);
  insertIntoDOM += title + anchorURL + imageURL + description + pricing + productCardGenericEnd;
  // console.log(insertIntoDOM);
};

insertionPoints[0].innerHTML += insertIntoDOM;

