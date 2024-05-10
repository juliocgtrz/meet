Feature: Specify Number of Events

    Scenario: When user hasn’t specified a number, 32 events are shown by default.
        Given the user has not specified a number of events to show
        When viewing the list of events
        Then 32 events will be shown by default

    Scenario: User can change the number of events displayed.
        Given a number of events are specified
        When the user views the list of events
        Then that number of events will be shown