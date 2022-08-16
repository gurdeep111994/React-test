import { render, fireEvent, screen } from "@testing-library/react";
import Sample from "./sample";
import TestRenderer from 'react-test-renderer';

test("Sample Component Props Match", () => {
    render(<Sample text="world" />);
    const smDiv = screen.getByTestId("sm-text");
    //assert the expected result
    expect(smDiv).toHaveTextContent("Hello world!");
});