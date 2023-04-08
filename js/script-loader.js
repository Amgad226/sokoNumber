// Define a function to cache the scripts
function cacheScripts() {
    // Array of script URLs
    var scriptUrls = [
      '../js/lib/queue.js',
      '../js/lib/pQueue.js',
      '../js/lib/lodash.js',
      "../js/structure.js",
      "../js/logic.js",
      '../js/draw/algoDrow.js',
      "../js/controlle.js",
    ];
    for (var i = 0; i < scriptUrls.length; i++) {
        var scriptEl = document.createElement('script');
        scriptEl.src = scriptUrls[i];
        document.head.appendChild(scriptEl);
        }
  
    // Loop through the script URLs and retrieve them using XMLHttpRequest or fetch
    var scripts = [];
    for (var i = 0; i < scriptUrls.length; i++) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', scriptUrls[i], false);
      xhr.send();
      scripts.push(xhr.responseText);
    }
  
    // Store the scripts as a string in localStorage
    localStorage.setItem('cachedScripts', JSON.stringify(scripts));
  }
  
  // Define a function to load the scripts
  function loadScripts() {
    // Check if the scripts are already cached in localStorage
    var cachedScripts = localStorage.getItem('cachedScripts');
    if (cachedScripts !== null) {
      // If they are, parse the cached scripts back into script elements and append them to the head of the document
      var scripts = JSON.parse(cachedScripts);
      for (var i = 0; i < scripts.length; i++) {
        var scriptEl = document.createElement('script');
        scriptEl.innerHTML = scripts[i];
        document.body.appendChild(scriptEl);
      }
    } else {
      // If they're not, call cacheScripts() to retrieve and store them
      cacheScripts();
    }
  }


  function cacheCSS() {
    // CSS file URL
    var cssUrl = '../css/css.css';
// alert()
    //   var styleEl = document.createElement('style');
    //   styleEl.src = cssUrl;
    //   document.head.appendChild(styleEl);
    // Retrieve the CSS file using XMLHttpRequest or fetch
    var xhr = new XMLHttpRequest();
    xhr.open('GET', cssUrl, false);
    xhr.send();
  
    // Store the CSS as a string in localStorage
    localStorage.setItem('cachedCSS', xhr.responseText);
    loadCSS()
  }
  
  // Define a function to load the CSS
  function loadCSS() {
    // Check if the CSS is already cached in localStorage
    var cachedCSS = localStorage.getItem('cachedCSS');
    // if (cachedCSS !== null&& false) {
        if (cachedCSS !== null) {
      // If it is, create a style element and append it to the head of the document
      var styleEl = document.createElement('style');
      styleEl.innerHTML = cachedCSS;
      document.head.appendChild(styleEl);
    } else {
      // If it's not, call cacheCSS() to retrieve and store it
      cacheCSS();
    }
  }