// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTabComponent(passedTopic){

    const tab = document.createElement('div');

    tab.textContent = passedTopic;

    tab.classList.add('tab');

    

    return tab

}//createTabComponent

const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response =>{
    console.log(response);
    response.data.topics.forEach(element => {
        topics.append(createTabComponent(element));
    });
}).catch(error => {
    console.log("the data was not returned", error)
  });
