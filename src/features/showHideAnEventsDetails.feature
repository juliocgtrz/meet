Feature: Show/Hide Event Details

    Scenario: An event element is collapsed by default.
        Given the user has not clicked on an event to show details
        When the user views a list of upcoming events
        Then the details should remain hidden

    Scenario: User can expand an event to see details.
        Given the event details are hidden
        When the user clicks show details for a specific event
        Then the event details should be shown

    Scenario: User can collapse an event to hide details.
        Given the event details are shown
        When the user clicks hide details for an event that is open
        Then the event details should be hidden