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
                {name: "Final Fantasy VII",
                description: "<description>",
                price: "<price in dollars>",
                link: "<url to image>"},
                {name: "NCAA Football 99",
                description: "Desire + Pride = Victory! Guide your favorite college team on the road to the National Championship!",
                price: "$15.99",
                link: "http://www.theoldcomputer.com/game-box-art-covers/Sony/Playstation-PS1/N/NCAA%20Football%20'99%20%5BU%5D%20%5BSLUS-00688%5D-front.jpg"},
                {name: "<game-name>",
                description: "<description>",
                price: "<price in dollars>",
                link: "<url to image>"}
                ];
            
for (var i = 0; i < gameArray.length; i += 1) {
  var title = productCardGenericTitle + gameArray[i].name;
  console.log(title);
  var anchorURL = productCardGenericAnchorURL + gameArray[i].link;
  console.log(anchorURL);
  var imageURL = productCardGenericImageURL + gameArray[i].link;
  console.log(imageURL);
  var description = productCardGenericDescText + gameArray[i].description;
  console.log(description);
  var pricing = productCardGenericPricing + gameArray[i].price;
  console.log(pricing);
  insertIntoDOM += title + anchorURL + imageURL + description + pricing + productCardGenericEnd;
  console.log(insertIntoDOM);
};

insertionPoints[0].innerHTML += insertIntoDOM;
