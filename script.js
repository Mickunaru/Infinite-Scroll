const contentContainer = document.getElementById('content-container');
const loader = document.getElementById('loader');
const PORT = 3000;

let isReady = false;
let contentsLoaded = 0;
let totalContents = 0;
let contentArray = [];

function contentLoaded() {
  contentsLoaded++;
  if (contentsLoaded === totalContents) {
    isReady = true;
    loader.hidden = true;
  }
}

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function displayContent() {
  totalContents += contentArray.length;
  contentArray.forEach((content) => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'item-container';

    const item = document.createElement('a');
    setAttributes(item, {
      href: content.links.html,
      target: '_blank'
    })

    const img = document.createElement('img');
    setAttributes(img, {
      src: content.urls.regular,
      alt: content.alt_description,
      title: content.alt_description
    })

    const authorName = document.createElement('p');
    authorName.className = 'img-author-name';
    authorName.textContent = content.user.name || 'Anonymous';
    
    img.addEventListener('load', contentLoaded)
    item.appendChild(img);
    itemContainer.append(item, authorName)
    contentContainer.appendChild(itemContainer);
  })
}

async function getContent() {
  try {
    const res = await fetch(`http://localhost:${PORT}/api/content`);
    contentArray = Array.from(await res.json());
    displayContent();
  } catch (error) {
    alert("YOU'VE REACHED THE MAX NUMBER OF REQUEST...");
  }
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && isReady) {
    getContent();
    isReady = false;
  }
})

getContent();