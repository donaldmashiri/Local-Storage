// variables
const tweeList = document.getElementById('tweet-list');




// Event Listeners
eventListeners();

function eventListeners(){
//    form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

//    remove tweet from list
    tweeList.addEventListener('click', removeTweet);

//    Document
    document.addEventListener('DOMContentLoaded', LocalStorageOnLoad)

}


// Functions
function  newTweet(e){
    // prevent from submitting
    e.preventDefault();

    //Read the textarea value
    const tweet = document.getElementById("tweet").value;

    // create remove btn
    const removeBtn = document.createElement('a', );
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    //create an <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    tweeList.appendChild(li);

    //add remove btn to each tweet
    li.appendChild(removeBtn);

    // add to LS
    addTweetLocalStorage(tweet);

//    print alert
    alert("Tweet added");

    this.reset();
    
}

function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        //remove tweet
        e.target.parentElement.remove();
    }

    // console.log();

    //    remove from storage
    removeTweetLocalStrorage(e.target.parentElement.textContent);
}

//add tweet into Local Strorage
function  addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStrage();

    //add tweet into the array
    tweets.push(tweet);

    // covert tweet array into a string
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

function getTweetsFromStrage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
//    get the values, id null is returned then we create empty array
    if(tweetsLS === null){
        tweets = [];
    }else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

//prints from LS
function LocalStorageOnLoad(){
    let tweets = getTweetsFromStrage();

    //loop through storage and the print the values
    tweets.forEach(function (tweet){
        // create remove btn
        const removeBtn = document.createElement('a', );
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';

        //create an <li> element
        const li = document.createElement('li');
        li.textContent = tweet;
        tweeList.appendChild(li);

        //add remove btn to each tweet
        li.appendChild(removeBtn);
    });
}

function removeTweetLocalStrorage(tweet){
    //get tweet from LS
    let tweets = getTweetsFromStrage();


    // remove X from the tweet
    const tweeDelete = tweet.substring(0, tweet.length -1);

    //loop throught tweets and remove tweet that equal
    tweets.forEach(function (tweetLS, index){
        if(tweeDelete === tweetLS){
            tweets.splice(index, 1);

        }
    });

    //save the data
    localStorage.setItem('tweets', JSON.stringify(tweets));

    // console.log(tweets);

}