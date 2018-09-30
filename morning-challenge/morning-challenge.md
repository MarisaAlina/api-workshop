## Morning Challenge
[OpenWeatherMap](https://openweathermap.org/city) shows the current weather for a particular city.
In this first challenge, we'll examine how this works with Postman. The goal of this challenge is to make the API call to OpenWeatherMap in Postman and get back the result.

### OpenWeatherMap API
- Checkout [the examples](https://openweathermap.org/current) in the documentation
- Get started by [creating an account](https://openweathermap.org/appid)
- Use the [default API key](https://home.openweathermap.org/api_keys) on the front page

### Postman
Postman is a tool for developers to test API requests and responses. It helps to manage "environment variables" (e.g. authentication and keys) and has become indispensable when working with APIs. Due to it's popularity, it's good to know how to use it.

First, create a new collection for the morning challenge. This will help you when you checking back on the challenges.
- Go to postman, click **_New_** in the top left, create the new collection and call it API workshop - morning challenge.

Try to figure out how to operate requests in Postman. Here are a few guiding questions:
- What type of request (HTTP method) do you have to make?
- Where does the URL go?
- Where can you add parameters?

As we've learned, the API documentation is the menu which tells us developers what we can do with an API. What does the documentation say about the URL structure?
- Read the documentation. What type of request you need to make for the current weather?
- How can you get the current weather for London? (*Hint: think of parameters*)
- What else do you have to include in your call to make a valid request? (*Hint: think of API security*)

Once finished, examine the response:
- Can you see the key-value pairs in the JSON format? Can you identify `json` objects and arrays?

Check the documentation and try a few different ways to get the current weather (e.g. by city ID, by geographic coordinates, Zip codes etc).
- How does the JSON format change?
