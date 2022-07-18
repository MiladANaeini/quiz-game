import { render } from "@testing-library/react"
import HomePage from "components/pages/HomePage"
import { BrowserRouter } from "react-router-dom";

describe("Home page should have a start quiz button", () => {
    it("rendered HomePage", () => {
        const { getByTestId } = render(<BrowserRouter><HomePage /></BrowserRouter>);
        const Button = getByTestId("startQuizButton");
        expect(Button).toBeTruthy();
    })

})