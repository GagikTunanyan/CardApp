import { render, fireEvent } from '@testing-library/react';
import Card from "./card";
import '@testing-library/jest-dom';


describe("Card Unit tests", () => {
    it("renders correctly", () => {
        const { container } = render(<Card value={5} />);
        expect(container).toMatchSnapshot();
    });

    it("check onRemove click event", () => {
        const onRemove = jest.fn();
        const { container } = render(<Card value={5} onRemove={onRemove} />);
        const onRemoveBtn = container.querySelector(".removeBTN");
        expect(!!onRemoveBtn).toBeTruthy();
        fireEvent.click(onRemoveBtn);
        expect(onRemove).toHaveBeenCalled();
    });

    it("check content value", () => {
        const onRemove = jest.fn();
        const { container } = render(<Card value={5} onRemove={onRemove} />);
        const content = container.querySelector("p");
        expect(content.innerHTML).toEqual("5");
    })
})