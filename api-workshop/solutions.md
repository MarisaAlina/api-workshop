## Morning Challenge
Get the current weather via Openweathermap & Postman!

### Openweather API
- checkout [the examples documentation here](https://openweathermap.org/current)
- Get Started by [creating an account)[https://openweathermap.org/appid]
- Use the [default API key](https://home.openweathermap.org/api_keys) on the front page

### Postman
- Go to postman, click **_New_** in the top left and create a new collection. Call it API workshop.
- Paste the example GET request into the **_request URL field_**: api.openweathermap.org/data/2.5/weather?q={city name}
- Click the **_Params_** field and add
1. **q** left for query and a city to the right (e.g. **London,uk**)
2. **APPID** left for and the default key to the right.
Voila - see the current weather in London!
_Can you see the JSON format of key value pairs? Can you identify nested objects and arrays?_

Now check the documentation and try a few different ways to get the current weather (e.g. by city ID, by geographic coordinates, Zip codes etc). _How does the JSON format change?_
