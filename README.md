<h1>Meet App</h1>

<h2>Description</h2>
A progressive web app with the ability to work offline and a serverless backend developed using a TDD technique. Users of this app will be able to use it whenever they want to view upcoming events for a specific city.

<h2>Features</h2>
<ol>
  <li>Filter events by city</li>
  <li>Show/Hide event details/li>
  <li>Specify number of events</li>
  <li>Use the app when offline</li>
  <li>Add an app shortcut to the home screen</li>
  <li>Display charts visualizing event details</li>
</ol>

<h2>User Stories & Scenarios</h2>
<h3>User Stories</h3>
<ul>
  <li>Feature 1: As a user, I should be able to filter events by city so that I can see a list of events taking place in that city.</li>
  <li>Feature 2: As a user, I should be able to show/hide event details so that I can find out more about a specific event.</li>
  <li>Feature 3: As a user, I should be able to specify the number of events so that I can display a manageable amount of events for my screen.</li>
  <li>Feature 4: As a user, I should be able to use the app when offline so that I can see events even when I have no internet connection.</li>
  <li>Feature 5: As a user, I should be able to add an app shortcut to the home screen so that I can quickly find and access the app.</li>
  <li>Feature 6: As a user, I should be able to display charts visualizing event details so that I can decide which event to attend based on different parameters.</li>
</ul>
<h3>Scenarios</h3>
<ul>
  <li>Feature 1, Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.</li>
  <li>Feature 1, Scenario 1 (Gherkin Syntax): Given user hasn't searched for any city; When the user opens the app; Then the user should see a list of upcoming events.</li>
  <li>Feature 1, Scenario 2: User should see a list of suggestions when they search for a city.</li>
  <li>Feature 1, Scenario 2 (Gherkin Syntax): Given the main page is open; When user starts typing in the city textbox; Then the user should receive a list of cities (suggestions) that match what they’ve typed.</li>
  <li>Feature 1, Scenario 3: User can select a city from the suggested list.</li>
  <li>Feature 1, Scenario 3 (Gherkin Syntax): Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing; When the user selects a city (e.g., “Berlin, Germany”) from the list; Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.</li>
  <li>Feature 2, Scenario 1: An event element is collapsed by default.</li>
  <li>Feature 2, Scenario 1 (Gherkin Syntax): Given the user has not clicked on an event to show details; When the user views a list of upcoming events; Then the details should remain hidden.</li>
  <li>Feature 2, Scenario 2: User can expand an event to see details.</li>
  <li>Feature 2, Scenario 2 (Gherkin Syntax): Given the event details are hidden; When the user clicks show details for a specific event; Then the event details should be shown.</li>
  <li>Feature 2, Scenario 3: User can collapse an event to hide details.</li>
  <li>Feature 2, Scenario 3 (Gherkin Syntax): Given the event details are shown; When the user clicks hide details for an event that is open; Then the event details should be hidden.</li>
  <li>Feature 3, Scenario 1: When user hasn't specified a number, 32 events are shown by default.</li>
  <li>Feature 3, Scenario 1 (Gherkin Syntax): Given the user has not specified a number of events to show; When viewing the list of events; Then 32 events will be shown by default.</li>
  <li>Feature 3, Scenario 2: User can change the number of events displayed.</li>
  <li>Feature 3, Scenario 2 (Gherkin Syntax): Given a number of events are specified; When the user views the list of events; Then that number of events will be shown.</li>
  <li>Feature 4, Scenario 1: Show cached data when there's no internet connection.</li>
  <li>Feature 4, Scenario 1 (Gherkin Syntax): Given the user wants to use the app offline; When they are not connected to the internet; Then the app will show event data from the cache.</li>
  <li>Feature 4, Scenario 2: Show error when user changes search settings (city, number of events).</li>
  <li>Feature 4, Scenario 2 (Gherkin Syntax): Given the user inputs an incorrect city name; When searching for events in a specific city; Then an error message modal will show asking them to provide the correct city.</li>
  <li>Feature 5, Scenario 1: User can install the meet app as a shortcut on their device home screen.</li>
  <li>Feature 5, Scenario 1 (Gherkin Syntax): Given the user's device home screen is open; When the user starts their device; Then the user can install a shortcut to the app.</li>
  <li>Feature 6, Scenario 1: Show a chart with the number of upcoming events in each city.</li>
  <li>Feature 6, Scenario 1 (Gherkin Syntax): Given the app has data visualization; When the user selects to view the data charts; Then they will see charts depicting the number of upcoming events in each city.</li>
</ul>

<h2>How Serverless Functions will be Used</h2>
Serverless functions will manage user access and maintain secure interactions between the app and the Google Calendar API. Using serverless allows for dynamic scalability based on user demand and efficient use of resources.
