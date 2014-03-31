;(function(window, document) {
document.body.style.display = 'none'; //hide the body

// head stuff
var linkEl = document.createElement('link');
linkEl.href = './css/reveal.min.css';
linkEl.rel = 'stylesheet';
document.head.appendChild(linkEl);

// parse slides

var markdownEl = document.getElementsByTagName('puma')[0];
var markdown = (markdownEl.textContent || markdownEl.innerText).split(/~+/).join("</section><section>");

var html = "<section>"+marked(markdown)+"</section>";

// create the divs to put the content in.
var content = document.createElement('div');
    content.className='reveal';
    content.id = 'content';

    document.body.replaceChild(content, markdownEl);
    
    document.getElementById('content').innerHTML = '<div class="slides">'+html+'</div>';

document.body.style.display = ''; //show the body

})(window, document);