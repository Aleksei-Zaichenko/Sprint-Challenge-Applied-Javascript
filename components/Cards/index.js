// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createArticleCard(passedEntry) {

    //console.log(passedEntry);

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imageOfAuthor = document.createElement('img');
    const authorsName = document.createElement('span');

    headline.textContent = passedEntry.headline;
    imageOfAuthor.src = passedEntry.authorPhoto;
    authorsName.textContent = passedEntry.authorName;

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(imageOfAuthor);
    author.append(authorsName);

    return card;

}//Header

const CardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    const entries = Object.values(response.data.articles);
    entries.forEach(item => {
        item.forEach( article =>{
            CardsContainer.append(createArticleCard(article));
        })
    })
}).catch(error => {
    console.log("the data was not returned", error)
  });