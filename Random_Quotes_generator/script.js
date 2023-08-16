const quotetext = document.querySelector(".quote"),
quotebtn = document.querySelector("button");
const author = document.querySelector(".author .name");
const soundbtn =document.querySelector(".sound");
const copybtn =document.querySelector(".copy");
const twitterbtn =document.querySelector(".twitter");
const whatsappbtn =document.querySelector(".whatsapp");


//random quotes function
function randomquote()
{
    quotebtn.classList.add("loading");
    quotebtn.innerText = "Loading Quote..."
    // console.log("clicked");
    //faching the random quotes / data from the API and parsing it into javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        quotetext.innerText = result.content;
        author.innerText = result.author;
        quotebtn.innerText = "New Quote";
        quotebtn.classList.remove("loading");
    });

}
soundbtn.addEventListener("click",()=>{
    //the SpeechSynthesisUtterance is a web speech API that represent a speech request
        let utterence = new SpeechSynthesisUtterance(`${quotetext.innerText} by author ${author.innerText}`);
        speechSynthesis.speak(utterence);   //speak method of speechsynthesis speaks the utterence
});

copybtn.addEventListener("click",()=>{
   navigator.clipboard.writeText(quotetext.innerText);
});

twitterbtn.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quotetext.innerText}`;
    window.open(tweetUrl,"_blank"); // opening a new twitter tab with passing quote in the url
 });

whatsappbtn.addEventListener('click',() =>{
    let wtpUrl = `https://web.whatsapp.com/intent/tweet?url=${quotetext.innerText}`
    window.open(wtpUrl,"_blank")
 })
quotebtn.addEventListener("click",randomquote);

//jokes
let jokeEl = document.getElementById("jokes");
const btn = document.getElementById("jbtn");


      btn.addEventListener('click',() =>{

        const config = {
            headers: { Accept: "application/json" },
          };

        fetch("https://icanhazdadjoke.com/",config)
        .then((res) => res.json())
        .then((data) => (jokeEl.innerHTML = data.joke));
      })
      fetch('https://icanhazdadjoke.com/').then(res => res.json()).then(data => console.log(data.joke))