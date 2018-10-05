# Afternoon Challenge
We are going to check the air quality by using TFL's open API and embedding its response into an HTML template.

We'll use:
* [Chrome Console](https://developers.google.com/web/tools/chrome-devtools/console/)
* [jQuery](https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery)
* [Python Simple HTTP server](https://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)

We've created a HTML template for you. It's the `index.html` file. For the styling, we've used [Bulma CSS Framework](https://bulma.io/documentation/).

## Setup: HTML + CSS Template & Chrome Console Logs

### Running the template website locally with [Python Simple HTTP server](https://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)
* Install python by opening a new terminal window and check `python -V`(most Macs have it already)
* `cd` into the folder *afternoon-challenge* where the `index.html` template is located
* Run `python -m SimpleHTTPServer 8080`
* Go to your browser and access `http://localhost:8080/index.html`

_What does this do?_

We just instructed Python to setup a server running locally (on your computer/machine), which serves the website through localhost. You've seen this as Client-Server Architecture in the presentation: the client is your browser, your own computer is the server and you are requesting the resource `index`.
> Read more about `localhost` [here](https://techterms.com/definition/localhost).

### Chrome Logs
Reading logs is a developer's bread and butter. Thus, we'll use the Google Chrome browser's built-in console.
* Open the Chrome console by right-clicking anywhere on the index page and choose `inspect`
* Go to `Console` and click on `Default levels`
* Choose `Verbose`. `Default levels` should now have changed to `All levels`.
This will allow you to see any log output and help debugging during the challenge.
* Test the console by typing `console.log("hello")`. You should see a `hello` in the next line popping up.


## Adding Behaviour: defining scripts and using jQuery

__Now it's your turn__

Open the afternoon folder in Atom.

### Preparing our template
You might already know that the `link` tag in `<head>` loads the Bulma CSS framework from a content delivery network (CDN). By that, you don’t have to download it or place it in your project. This is another example of an API: everytime the page loads, a request is made to load Bulma's external stylesheet.
> Read more about this [here](https://css-tricks.com/adding-a-cdn-to-your-website/)

The `<script>` tag below loads the icon/ emoji library from _fontawesome_.

_Why do we have to add this script tag before our script?_

If you have our JavaScript script running before the page is fully loaded, the framework has no time to load our script and will not be able to find it.

__Now it's your turn__

We want to use the `my-functions.js` script. Add it to the appropriate place in the `index.html` template. The javascript code has to be added similarly to Bulma's external stylesheet so that it can be linked from the application's folder.

### Making API calls with jQuery

#### What is jQuery?
jQuery is a Javascript library that provides functions to make writing common JavaScript tasks easier and more concise. Additionally, it has the advantage of being cross-browser compatible.
> Learn more about jQuery [here](https://www.digitalocean.com/community/tutorials/an-introduction-to-jquery)

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
When you've finished preparing the template, let's dive into one of the most used jQuery functions: `$.ajax()`.

First things first: AJAX (Asynchronous JavaScript And XML) is a way for clients (browsers) and server to communicate in the background. The jQuery function `$.ajax()` exchanges data with the server and updates HTML elements without reloading the whole page.
* _How so?_

Normally, HTML pages are static and have to be reloaded when an event (e.g. the click of a button) happens.
jQuery's `$.ajax()` function however instructs the browser to send a GET or POST request via an asynchronous HTTP API call to the server and receive its response - all in the background! The function updates the HTML element it references with the received data.
* _"And XML"?_

Despite its name, the function doesn't use XML anymore to communicate but JSON.
* _What's with the asynchronous?_

The "asynchronousness" in `$.ajax()` handles the response in a callback function. This simply means that the response is not immediately returned. When it is available after the API call is made, it will call another function (["callback function"](https://learn.jquery.com/ajax/key-concepts/)), which handles the response and data it returned. This is actually what allows us to continue to use the website. Without it the page would wait until the response is returned before responding to page interaction. Test it yourself:

_`$.ajax()` example where in the `success` parameter, we define the callback function_
```javascript
// ajax() function use
$("#demo").click(function(){ // ajax function definition that will be executed on the button's selector
  $.ajax({
    url: "demo.txt", // making a call to a static resource in the same folder
    success: function(result){ // here we define the callback function in the success case
      $("#textbox").html(result); // `.html()` puts the success result into the HTML element via div selector
      console.log("demo has been loaded");
    }
  });
});
```

#### Demo time!
Check the _demo_ folder: go to your terminal and run the `demo.html` template in localhost (`cd` into _afternoon-challenge_, then do `python -m SimpleHTTPServer 8080` and access `http://localhost:8080/demo/demo.html` in your browser).

The `trigger me` button is a simple alert, it'll show an alert message. It demonstrates a function definition and function call, using the selector on the HTML element "trigger" and the `.click()` function. Note also how you can print something in the console log with   `console.log("ready");`.

Examine the use of the `$.ajax()`. We simply return text that we saved in `demo.txt` document by using the `.html()` function in the callback.
Note that `$.ajax()` has a handy parameter called `success`, which allows us to define the callback function at once.
> Find out more about `$.ajax()` [here](https://learn.jquery.com/ajax/jquery-ajax-methods/)

### Challenge time!
__Now it's your turn__

Using jQuery's `$.ajax()` function, we’ll be making a GET request to the [TFL API documentation](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/AirQuality/).
The URL you want to call to get the air pollution is: https://api.tfl.gov.uk/AirQuality

You've seen that the `id=` attributes are used by jQuery to select the HTML elements. Add them to the HTML template.  

When calling the API, it is serviced to your browser from TFL's web server, meaning the HTTP verb `GET`, URL & params used by us tell TFL, which service from their API menu we are calling to get back the Air Quality data in a JSON object. jQuery then uses the HTML attributes to update the text in div elements with the values from the properties of the JSON object received from the API call.
You'll reuse the same "skeleton" of the `$.ajax()` and improve it step by step. Remember to comment out the previous function as soon as you've made it work before going to the next.

Open `my-functions.js`.
1. Check the [documentation](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/AirQuality/) and add the correct URL to call
2. Add the correct method type of the call and the URL to use (hint: the documentation will specify which HTTP method to use).
3. Tell the console to print the response in the log

Now you should see the response of the API call in the console. But we want to embed it into our HTML template.

4. We want to use the response immediately and therefore set it as parameter `success` in our callback function. Define a function for this and update the div element and selector with the response object (hint: you can use the `.html()` method).

You should see the JSON response now on your HTML page when you hit the button. But who wants to see this blurb? We can improve that!

5. jQuery "understands" JSON, google for the use of the `stringify()` method
6. Make it even prettier! Use HTML `<pre>` tags

Still, anyone visiting our page would simply want a single line telling them the actual air quality.

7. Extract the JSON property `forecastSummary` from the returned JSON object

_Hints:_
As soon as our jQuery script has executed the function, i.e. did the API call, it receives the response in the `data` variable. The received data is in JSON format, we print it with the function `JSON.stringify()`. `.html()` updates the HTML element with the referenced selector tag to show the content of the returned JSON object on our page.

#### Troubleshooting
_Beware of caching_
Yo have a better experience, your browser saves the script to reload it faster. This however means that it might be executing an older version of your script. Try accessing `localhost:8080` in an incognito window and frequently stop and restart your Python server.

Have you finished? Get some more practice!

# Extension challenges
- Try to make the OpenWeatherMap API call from the morning challenge. Check the folder ![current-weather](current-weather)
- Use the free version of the Twitter Search API to find latest for tweets from Nasa with Postman. Check [the documentation](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html)
- (Advanced) Take a look at Backend API development with [jQuery](https://spring.io/guides/gs/consuming-rest-jquery/) and the [Spring framework](building the corresponding [`hello world` web service](https://spring.io/guides/gs/rest-service/).
