## Morning Challenge Solution
Get the current weather via Openweathermap & Postman!

### Openweather API
- checkout [the examples documentation here](https://openweathermap.org/current)
- Get Started by [creating an account)[https://openweathermap.org/appid]
- Use the [default API key](https://home.openweathermap.org/api_keys) on the front page

### Postman
- Paste the example GET request into the **_request URL field_**: api.openweathermap.org/data/2.5/weather?q={city name}
![get](get.png)
- Click the **_Params_** field and add
1. **q** left for query and a city to the right (e.g. **London,uk**)
2. **APPID** left for and the default key to the right.
![get](params.png)
Voila - see the current weather in London!
_Can you see the JSON format of key value pairs? Can you identify json objects and arrays?_
- object `weather` gives the values in an array, indicated by the square brackets `[]`

```
object =  "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ]
```
