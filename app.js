const itemslist = document.querySelector(".plates-list")
const addItems = document.querySelector(".add-items")
// const itemmm = document.getElementById('itemm').value
// console.log(itemmm)
const items =JSON.parse(localStorage.getItem('items')) || []
const addItem = function (e) {
    e.preventDefault()
    // console.log('hello')
    const text = (this.querySelector('[name= item]')).value
    const item = {
        text,
        done:false
    }
    // console.log(item)
    items.push(item)
    populateList(items , itemslist);
    localStorage.setItem('items',JSON.stringify(items))
    // this.reset() 
    // console.log(items)
}
function populateList(plates = [] , platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ' '} />
            <label for="item${i}">${plate.text}</label>
          </li>
        `;
      }).join('');
}
function toggleDone(e){
  // console.log(e)
  if(!e.target.matches('imput'))
  return;
  const el = e.target;
  // console.log(el.dataset.index);
  const index = el.dataset.index;
  items[index].done =!items[index].done;
  localStorage.setItem('items',JSON.stringify(items))
  populateList(items , itemslist);
}
addItems.addEventListener('submit', addItem)
itemslist.addEventListener('click',toggleDone)
populateList(items , itemslist);