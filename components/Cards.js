// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//

const { default: Axios } = require("axios");

// Use your function to create a card for each of the articles, and append each card to the DOM.
const articleMaker = (story) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  img.src = story.authorPhoto;

  headline.textContent = story.headline;
  span.textContent = story.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(span);

  card.addEventListener("click", (e) => {
    console.log(e.target.textContent);
  });
  return card;
};

axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    // res.data.articles.bootstrap.forEach((story) => {
    //   document
    //     .querySelector(".cards-container")
    //     .appendChild(articleMaker(story));
    // });

    // res.data.articles.javascript.forEach((story) => {
    //   document
    //     .querySelector(".cards-container")
    //     .appendChild(articleMaker(story));
    // });

    // res.data.articles.jquery.forEach((story) => {
    //   document
    //     .querySelector(".cards-container")
    //     .appendChild(articleMaker(story));
    // });

    // res.data.articles.node.forEach((story) => {
    //   document
    //     .querySelector(".cards-container")
    //     .appendChild(articleMaker(story));
    // });

    // res.data.articles.technology.forEach((story) => {
    //   document
    //     .querySelector(".cards-container")
    //     .appendChild(articleMaker(story));
    // });
    const topics = Object.keys(res.data.articles);
    topics.forEach((topic) => {
      res.data.articles[topic].forEach((story) => {
        document
          .querySelector(".cards-container")
          .appendChild(articleMaker(story));
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
