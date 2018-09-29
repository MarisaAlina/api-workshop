# Afternoon Challenge
We are going to check the air quality by using TFLs API and embedding it's response into an HTML template.

We'll use:
* [Chrome Console](https://developers.google.com/web/tools/chrome-devtools/console/)
* [jQuery](https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery)
* [Python Simple HTTP server](https://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)

We've created a HTML template for you. It's the `index.html` file. For this, we've used the [Bulma CSS Framework](https://bulma.io/documentation/), check it out.

## Setup: HTML & CSS Template & Chrome Console Logs

### Running the template website locally with [Python Simple HTTP server](https://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)
* Install python (most Macs have it installed already): open a new terminal window and check `python -V`
* `cd` into the folder *afternoon-challenge* where the `index.html` template is located
* Run `python -m SimpleHTTPServer 8080`
* Go to your browser and access `http://localhost:8080/index.html`

_What does this do?_
We just instructed Python to setup a server running locally (on your computer/machine), which serves the website through localhost. You've seen this as Client-Server Architecture in the presentation: the client is your browser, your own computer is the server and you are requesting the resource `index`.
> Read more about `localhost` [here](https://techterms.com/definition/localhost).

### Chrome Logs
Reading logs is a developers bread and butter. It's good to learn using the Google Chrome browser built-in console.
* Open the Chrome console by right-clicking anywhere on a page and choose `inspect`
* Go to `Console` and click on `Default levels`
* Choose `Verbose`. `Default levels` should now have changed to `All levels`.
This will allow you to see any log output and help debugging during the challenge.
* Test the console by typing `console.log("hello")`. You should see a `hello` in the next line popping up.


## Adding Behaviour: defining scripts and using jQuery

### Preparing our template
You might know already that the `link` tag in `<head>` loads the Bulma CSS framework from a content delivery network (CDN). By that, you don’t have to download it or place it in your project. This is another example of an API: everytime the page loads, a request is made to load Bulma's external stylesheet.
> Read more about this [here](https://css-tricks.com/adding-a-cdn-to-your-website/)

The `<script>` tag below loads icon/ emoji library from fontawesome.
_Why do we have to add this script tag before our script?_
If you have our JavaScript script running before the page is fully loaded, the framework has no time to load our script and will not be able to find it.

__Now it's your turn__
 We want to use the `my-functions.js` The javascript code has to be added similarly to Bulma's external stylesheet so that it can be linked from the application's folder.

### Making API calls with jQuery

#### What is jQuery?
jQuery is a Javascript library that provides functions to make writing common JavaScript tasks easier and more concise. Additionally, it has the advantage of being cross-browser compatible.
> Learn more about [jQuery here](https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery)

#### HTML & jQuery
jQuery has an easy to use API for selecting HTML elements and performing actions on those. The basic syntax for a function that triggers this action is
`$(selector).action()`

* `$` defines or accesses jQuery
* `(selector)` finds the HTML element
* `action()` performs an action on the selected element(s)

__Now it's your turn__
In our HTML template, we will use a button to trigger an event/ perform an action. Therefore, you need to add the `id=` selector tag to the button element for jQuery to find it.
>Learn more [here](https://www.w3schools.com/jquery/jquery_selectors.asp).

#### [jQuery AJAX](https://learn.jquery.com/ajax/)
Now, let's dive into one of the most used jQuery functions: `$.ajax()`
First things first: AJAX (Asynchronous JavaScript And XML) is a way for clients (browsers) and server to communicate in the background. The jQuery function `$.ajax()` exchanges data with the server and updates HTML element without reloading the whole page.
* _How so?_
Normally, HTML pages are static and have to be reloaded when an event (e.g. the click of a button) happens.
jQuery's `$.ajax()` function however instructs the browser to send a GET or POST request via an asynchronous HTTP API call to the server and receive it's response - all in the background! The function updates the HTML element it references with the received data.
* _"And XML"?_
Despite its name, the function doesn't use XML anymore to communicate but JSON.
* _What's with the asynchronous?_
The "asynchronousness" in `$.ajax()` handles the response in a callback function. This simply means that the response is not immediately returned. When it is available it will call another function (["callback function"](https://learn.jquery.com/ajax/key-concepts/)), which handles the response and data it returned. This is actually what allows us to continue to use the website. Without it the page would wait until the response is returned before responding to page interaction. Test it yourself:

_Callback example where_ `response` _is the callback function_
```javascript
$.get( "foo.php", function( response ) {
  console.log( response ); // server response
});
```

_Will not work - why?_
```javascript
var response;

$.get("foo.php", function( r ) { // We cannot assign a variable to in the definition and use it later. We
  response = r;
});

console.log( response );
```

#### Demo time!
Check the demo folder: go to your terminal and run the `demo.html` template in localhost (`cd` into afternoon-challenge, then `python -m SimpleHTTPServer 8080`, then access `http://localhost:8080/demo/demo.html` in your browser).

The `trigger me` button is a simple alert. It'll show an alert message. It demonstrates a function definition and function call, using the selector on the HTML element "trigger" and .click() jQuery function. Note also how you can print something in the console log.

Examine the use of the `$.ajax()`. We simply return text that we saved in `demo.txt` document by using the `.html()` function in the callback.
Note that `$.ajax()` has a handy parameter called `success`, which allows us to define the callback function at once.
> Find out more about `$.ajax()` [here](https://learn.jquery.com/ajax/jquery-ajax-methods/)

#### Challenge time!
__Now it's your turn__
Using jQuery's `$.ajax()` function, we’ll be making a GET request to the [TFL API documentation](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/AirQuality/).

You've seen that the `id=` attributes are used by jQuery to select the HTML elements.
- Add them to the HTML template  

jQuery also uses the HTML attributes to update the text in div elements with the values from the properties of the JSON object received from the API call. When calling the API, it is serviced to your browser from TFL's web server, meaning the HTTP verb `GET`, URL & params used by us tell TFL, which service from their API menu we are calling to get back the Air Quality data in a JSON object.
You'll reuse the same "skeleton" of the `$.ajax()` and improve it step by step. Remember to comment out the previous function as soon as you've mastered it before going to the next.

1. Add the method type of the call and the URL to use
2. Tell the console to print the response in the log
3. We want to use it immediately and therefore set it as parameter for the callback success function. Define a function for this and put the success result into the div selector element (hint: you can use the .html() method).
4. jQuery "understands" JSON, google for the `stringify()` method use
5. Make it pretty! Use HTML `<pre>` tags
6. Extract the JSON property `forecastSummary` from the returned JSON object

_Hints:_
As soon as our jQuery script has executed the function, i.e. did the API call, it receives the response in the `data` variable. The received data is in JSON format, we print it with the function `JSON.stringify()`. `.html()` updates the HTML element with the referenced selector tag to show the content of the returned JSON object on our page.

#### Troubleshooting
_Beware of caching_
Yo have a better experience, your browser saves the script to reload it faster. This however means that it might be executing an older version of your script. Try accessing `localhost:8080` in an incognito window and frequently stop and restart your Python server.

# Extension challenges
- Try to make the OpenWeatherMap API call from the morning challenge. Check the folder ![current-weather](current-weather)
- Use the free version of the Twitter Search API to find latest for tweets from Nasa with Postman. Check [the documentation](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html)
- (Advanced) Take a look at Backend API development with [Java & Spring](https://spring.io/guides/gs/consuming-rest-jquery/)
