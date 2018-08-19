## Afternoon Challenge
You are going to build a mood playlist with Spotify.

The workshop will use:
* [Bulma CSS Framework](https://bulma.io/documentation/)
* [jQuery](https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery)
* [Chrome Console](https://developers.google.com/web/tools/chrome-devtools/console/)

### Chrome Logs
* Open the Chrome console by right-clicking anywhere on a page and choose `inspect`
* Go to `Console` and click on `Default levels`
* Choose `Verbose`. `Default levels` should now have changed to `All levels`.
This will allow us to see any log output and help you during the challenge
* Test the console by typing `console.log("hello")`. You should see a `hello` in the next line popping up.

*JSON function with JavaScript - Console test*
```JavaScript
function log_them() { // function definition
  var p = {
    'fname' : 'Foo',
    'lname' : 'Bar'
  };
  console.log(p);
}

log_them(); // function call
```

### Adding Behaviour: defining scripts
The link tag in `<head>` loads the Bulma CSS framework from a content delivery network (CDN) so that you don’t have to download it and place it in your project.
The `<script>` tag below loads icon/ emoji library from fontawesome.
> The javascript code has to be added similarly so that it can be linked from the application's folder.

*Note script with jQuery tag*
Why do we have to add this script tag before our script?
If you have our JavaScript script running before the page is fully loaded, and as such, before jQuery is fully loaded, the framework has no time to load our script and will not be able to find it

### What is jQuery
jQuery is a Javascript library, which is technically not a programming language but a tool that makes writing common JavaScript tasks more concise. Additionally, it has the advantage of being cross-browser compatible.
> Learn more about [jQuery here](https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery)

**jQuery & HTML**
jQuery is tailor-made for selecting HTML elements and performing actions on those. Hence the basic syntax for a function that triggers this action is
`$(selector).action()`

* `$` defines or accesses jQuery
* `(selector)` finds or queries for the HTML element
* `action()` performs the event on the element(s)

In our HTML, we will use a button to trigger an event/ action. Therefore, you need to add the `id=` selector tag to the button element as reference for jQuery to find it.
>Learn more [here](https://www.w3schools.com/jquery/jquery_selectors.asp).

**[Example](https://jsfiddle.net/MarisaAlina/8ues69tr/)**

**[jQuery AJAX](https://learn.jquery.com/ajax/)**
AJAX (Asynchronous JavaScript And XML) is a way for clients (browsers) and server to communicate in the background.
The jQuery function `$.ajax()` exchanges data with the server and updates HTML element without reloading the whole page.
* _How so?_
Normally, HTML pages are static and have to be reloaded when an event (e.g. the click of a button) happens.
jQuery's `$.ajax()` function however instructs the browser to send GET or POST request via an asynchronous HTTP API call to the server and receive it's response - all in the background! The function updates the HTML element it references with the received data.
* _Have you noticed the response format?_
Despite its name, the function doesn't use XML anymore but transport the data in JSON format.
* _What's with the asynchronous?_
The asynchronous in `$.ajax()` handles the response in a callback function. This simply means that the response is not immediately available, e.g. in a variable but that we need to call another function (["callback function"](https://learn.jquery.com/ajax/key-concepts/)), which handles the response and data it returned. This is actually what allows us to continue to use the website without it needing to reload.

_Will not work_
```javascript
var response;

$.get("foo.php", function( r ) {
  response = r;
});

console.log( response );
```
_Callback example where_ `response` _is the callback function_
```javascript
$.get( "foo.php", function( response ) {
  console.log( response ); // server response
});
```
[Ajax Spotify call](https://medium.com/@charlie.spencer/making-a-simple-ajax-request-d0c0f9f896fe)
> Using jQuery's `$.ajax()` function, we’ll be making a GET request to the Spotify API.

*Note*
The `class=` attributes help jQuery to reference the HTML elements and update the text with the values from the properties of the JSON object received from the API call.

*What just happened?*
When calling the API, it is serviced to your browser from Spotify's web server, meaning the HTTP verb, URL & params used by us tell Spotify, which service from their API menu we are calling to get back the playlist data in a JSON object.
As soon as our jQuery script has executed the function, i.e. did the API call, it receives the response in the *X* variable. The received data is in JSON format and the function updates the HTML element with the referenced class attribute to show the content of the returned JSON object.


### Test with [Python Simple HTTP server](https://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)
* Install python (most Macs have it installed already, check `python -V`)
* `cd` into folder with `index.html`
* run `python -m SimpleHTTPServer 8080`
* go to your browser and access `http://localhost:8080/index.html`
