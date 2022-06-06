const links = [
  {
    label: "Week 1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week 2 notes",
    url: "week2/index.html"
  },
  {
    label: "Week 3 notes",
    url: "week3/index.html"
  },
  {
    label: "Week 4 notes",
    url: "week4/index.html"
  },
  {
    label: "Week 5 notes",
    url: "week5/index.html"
  },
  {
    label: "Week 6 (midterm check todo challenge)",
    url: "week6/index.html"
  },
  {
    label: "Week 7 notes",
    url: "week7/index.html"
  }
]

function loadIndex(){
  const ol  = document.querySelector("#linksList");
  links.forEach(link =>{
    const item = document.createElement("li");
    const href = document.createElement("a");
    href.setAttribute("href", link.url);
    href.innerHTML= link.label;
    item.appendChild(href);
    ol.appendChild(item);
  })
}
