import { render, fireEvent, screen } from '@testing-library/react';
import Header from "./header";
import { Actions } from '../../../contexts/actions.context';
import '@testing-library/jest-dom';

const RenderWithProvider = (props) => {
    const { addCard, sortCard, sorted, clear } = props;

    return (
        <Actions.Provider value={{ addCard, sortCard, sorted, clear }}>
            <Header />
        </Actions.Provider>
    )
};

describe("unit testing Header component", () => {
    it("renders correctly", () => {
        const addCard = jest.fn();
        const sortCard = jest.fn();
        const clear = jest.fn();

        const { container } = render(
            <RenderWithProvider
                addCard={addCard}
                sorted={false}
                sortCard={sortCard}
                clear={clear}
            />
        )

        expect(container).toMatchSnapshot();
    });

    it("check the addCard action click call", () => {
        const addCard = jest.fn();
        const sortCard = jest.fn();
        const clear = jest.fn();

        render(
            <RenderWithProvider
                addCard={addCard}
                sorted={false}
                sortCard={sortCard}
                clear={clear}
            />
        );
        fireEvent.click(screen.getByText("add card"));
        expect(addCard).toHaveBeenCalled();
        expect(sortCard).not.toHaveBeenCalled();
        expect(clear).not.toHaveBeenCalled();
    });

    it("check the sortCard action click call", () => {
        const addCard = jest.fn();
        const sortCard = jest.fn();
        const clear = jest.fn();

        render(
            <RenderWithProvider
                addCard={addCard}
                sorted={false}
                sortCard={sortCard}
                clear={clear}
            />
        );
        fireEvent.click(screen.getByText("sort cards"));
        expect(addCard).not.toHaveBeenCalled();
        expect(sortCard).toHaveBeenCalled();
        expect(clear).not.toHaveBeenCalled();
    });

    it("check the clear action click call", () => {
        const addCard = jest.fn();
        const sortCard = jest.fn();
        const clear = jest.fn();

        render(
            <RenderWithProvider
                addCard={addCard}
                sorted={false}
                sortCard={sortCard}
                clear={clear}
            />
        );
        fireEvent.click(screen.getByText("clear all"));
        expect(addCard).not.toHaveBeenCalled();
        expect(sortCard).not.toHaveBeenCalled();
        expect(clear).toHaveBeenCalled();
    });
})