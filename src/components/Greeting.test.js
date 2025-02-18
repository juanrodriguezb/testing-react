import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('Renders Hello World as a text', () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing in this case

        // Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('Renders good to see you if the button was NOT clicked', () => {
        render(<Greeting />);

        const paragraphElement = screen.getByText('good to see you', { exact: false });
        expect(paragraphElement).toBeInTheDocument();
    })

    test('Render "Changed" if the button was clicked', async () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument();

    })

    test('Does not render "good to see you" if the button was clicked', async () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement)

        // Assert
        const outputElement = screen.queryByText('good to see you', { exact: false });
        expect(outputElement).toBeNull();

    })
})

