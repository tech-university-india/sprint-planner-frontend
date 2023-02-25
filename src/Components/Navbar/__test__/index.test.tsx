import React from "react";
import { render } from "@testing-library/react";

import Navbar from "..";

describe("Navbar", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<Navbar />);
        expect(baseElement).toBeTruthy();
    });

    it('should have a h1 with text React JSX TEMPLATE', () => {
        const { getByText } = render(<Navbar />);
        expect(getByText('React JSX TEMPLATE')).toBeTruthy();
    })
});