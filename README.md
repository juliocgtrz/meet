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
  <li>Feature 1: As a _user_, I should be able to _filter events by city_ so that _I can see a list of events taking place in that city._</li>
  <li>Feature 2: As a _user_, I should be able to _show/hide event details_ so that _I can find out more about a specific event._</li>
  <li>Feature 3: As a _user_, I should be able to _specify the number of events_ so that _I can display a manageable amount of events for my screen._</li>
  <li>Feature 4: As a _user_, I should be able to _use the app when offline_ so that _I can see events even when I have no internet connection._</li>
  <li>Feature 5: As a _user_, I should be able to _add an app shortcut to the home screen_ so that _I can quickly find and access the app._</li>
  <li>Feature 6: As a _user_, I should be able to _display charts visualizing event details_ so that _I can decide which event to attend based on different parameters._</li>
</ul>
<h3>Scenarios</h3>
<ul>
  <li>Feature 1, Scenario 1: When user hasn't searched for a city, show upcoming events from all cities.</li>
  <li>Feature 1, Scenario 1 (Gherkin Syntax): Given _user hasn't searched for any city;_ When _the user opens the app;_ Then _the user should see a list of upcoming events._</li>
  <li>Feature 1, Scenario 2: User should see a list of suggestions when they search for a city.</li>
  <li>Feature 1, Scenario 2 (Gherkin Syntax): Given _the main page is open;_ When _user starts typing in the city textbox;_ Then _the user should receive a list of cities (suggestions) that match what they’ve typed._</li>
  <li>Feature 1, Scenario 3: User can select a city from the suggested list.</li>
  <li>Feature 1, Scenario 3 (Gherkin Syntax): Given _user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;_ When _the user selects a city (e.g., “Berlin, Germany”) from the list;_ Then _their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city._</li>
  <li>Feature 2, Scenario 1: An event element is collapsed by default.</li>
  <li>Feature 2, Scenario 1 (Gherkin Syntax): Given _the user has not clicked on an event to show details;_ When _the user views a list of upcoming events;_ Then _the details should remain hidden._</li>
  <li>Feature 2, Scenario 2: User can expand an event to see details.</li>
  <li>Feature 2, Scenario 2 (Gherkin Syntax): Given _the event details have been expanded;_ When _the user clicks show details for a specific event;_ Then _the event details should be shown._</li>
  <li>Feature 2, Scenario 3: User can collapse an event to hide details.</li>
  <li>Feature 2, Scenario 3 (Gherkin Syntax): Given _the event details have been hidden;_ When _the user clicks hide details for an event that is open;_ Then _the event details should be hidden._</li>
  <li>Feature 3, Scenario 1: When user hasn't specified a number, 32 events are shown by default.</li>
  <li>Feature 3, Scenario 1 (Gherkin Syntax): Given _the user has not specified a number of events to show;_ When _searching for events;_ Then _32 events will be shown by default._</li>
  <li>Feature 3, Scenario 2: User can change the number of events displayed.</li>
  <li>Feature 3, Scenario 2 (Gherkin Syntax): Given _less than 32 events are shown in the list of events;_ When _the user specifies how many events should be shown;_ Then _that number of events will be shown._</li>
  <li>Feature 4, Scenario 1: Show cached data when there's no internet connection.</li>
  <li>Feature 4, Scenario 1 (Gherkin Syntax): Given _the user wants to use the app offline;_ When _they are not connected to the internet;_ Then _the app will show event data from the cache._</li>
  <li>Feature 4, Scenario 2: Show error when user changes search settings (city, number of events).</li>
  <li>Feature 4, Scenario 2 (Gherkin Syntax): Given _the user inputs an incorrect city name;_ When _searching for events in a specific city;_ Then _an error message modal will show asking them to provide the correct city._</li>
  <li>Feature 5, Scenario 1: User can install the meet app as a shortcut on their device home screen.</li>
  <li>Feature 5, Scenario 1 (Gherkin Syntax): Given _the user's device home screen is open;_ When _the user starts their device;_ Then _the user can install a shortcut to the app._</li>
  <li>Feature 6, Scenario 1: Show a chart with the number of upcoming events in each city.</li>
  <li>Feature 6, Scenario 1 (Gherkin Syntax): Given _the app has data visualization;_ When _the user selects to view the data charts;_ Then _they will see charts depicting the number of upcoming events in each city._</li>
</ul>
