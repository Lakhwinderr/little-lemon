import { render, screen, fireEvent} from "@testing-library/react";
import  ReserveTable from "./ReserveTable";



describe("Reserve Table form", () => {
    test('Renders the DinerCount heading', () => {
        render(<ReserveTable/>);
        const dinerCountElement = screen.getByText("Diner Count:");
        expect(dinerCountElement).toBeInTheDocument();
    });

    test("submit is active on selecting the valid date", ()=>{

        const dateInput = screen.queryByTestId("datePicker");
        fireEvent.change(dateInput,{target:   {value: "2025-07-22"}})
        const submitButton = screen.queryByTestId("button1")
    fireEvent.click(submitButton);
     expect(submitButton).toBeEnabled();

    })
})