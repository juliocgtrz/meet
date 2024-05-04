// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe('<Event /> component', () => {
    let EventComponent;
    let allEvents;

    beforeEach(async () => {
        allEvents = await getEvents();
        EventComponent = render(<Event event={allEvents[0]} />);
    })

    test('renders event title', () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    });
    test('renders event location', () => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    });
    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });
    test('event details section is hidden by default', () => {
        expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
    });
    test("shows event details when user clicks 'show details' button", async () => {
        const user = userEvent.setup();
        await user.click(EventComponent.queryByText('Show Details'));
        expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
        expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
        expect(EventComponent.queryByText('Show Details')).not.toBeInTheDocument();
    });
    test("hides event details when user clicks 'hide details' button", async () => {
        const user = userEvent.setup();
        await user.click(EventComponent.queryByText('Show Details'));
        expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
        expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
        expect(EventComponent.queryByText('Show Details')).not.toBeInTheDocument();

        await user.click(EventComponent.queryByText('Hide Details'));
        expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        expect(EventComponent.queryByText('Hide Details')).not.toBeInTheDocument();
        expect(EventComponent.queryByText('Show Details')).toBeInTheDocument();
    });
});