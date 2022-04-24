const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
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
         ol.appendChild(li);

     })
  }