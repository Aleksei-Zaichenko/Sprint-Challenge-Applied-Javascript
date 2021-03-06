// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(passedDate, passedTitle, passedTemp) {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    date.textContent = passedDate;
    title.textContent = passedTitle;
    temp.textContent = passedTemp;

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    header.append(date);
    header.append(title);
    header.append(temp);

    return header;

}//Header

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header('SMARCH 28, 2019', 'Lambda Times', '98°'));
