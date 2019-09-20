## Running

Install the packages via npm, and then run:

    npm start

to run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Task

First, visit this page: [CountryDetail GraphQL API](https://countries.trevorblades.com/). This API gives details about a country, if a two-letter code is supplied (e.g. `CA`). Paste in the following query into the left hand side:

    {
      country(code: "CA") {
        emoji
        name
        currency
        languages {
          name
        }
        phone
      }
    }

Click the play button, and you'll get back a bunch of JSON data about that country, such as:

		{
		  "data": {
		    "country": {
		      "emoji": "🇨🇦",
		      "name": "Canada",
		      "currency": "CAD",
		      "languages": [
		        {
		          "name": "English"
		        },
		        {
		          "name": "French"
		        }
		      ],
		      "phone": "1"
		    }
		  }
		}

**The task is this:** Update the React component within `CountryInfo.js`, so that it connects to the GraphQL API, makes the above query and displays the data returned in the manner below:

Example 1 - This code:

    <CountryInfo code="CA" />

Should render like:

<img src="/screenshots/Canada.png" width="692" />

While the code:

    <CountryInfo code="GB" />

Should render like:

<img src="/screenshots/UK.png" width="683" />

### Notes:

* The GraphQL endpoint URL is: https://countries.trevorblades.com/
* It is strongly encouraged to use React Hooks rather than a stateful class component.
* You may use whichever library for accessing GraphQL (e.g. Apollo, Relay). CSS can be done through a framework. Or you can hand-code either, it's up to you!
* It is up to you to decide what to show while the data is loading, if there is an API error, or if a country code cannot be found by the API (e.g. `XX`).

### Bonus tasks

If that was fun to do and you fancy doing more, try one or more of the below:

* Update the component so that it is written in TypeScript.
* Add a select/dropdown under the card, which allows the user to select different countries, and the card will update automatically
* Add unit tests using a test framework of your choice, mocking out the GraphQL API appropriately.
