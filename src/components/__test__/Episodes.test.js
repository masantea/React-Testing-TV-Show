import React from "react";
import {render, queryByTestID} from "@testing-library/react";
import Episodes from "../Episodes";

test("component",() => {

  const {queryByTestID, getAllByText} = render(
    <Episodes episodes = {[]}/>
  )

expect(getAllByText(/episode/i)).toHaveLength(26);

expect (queryByTestID("episodes")).not.toHaveTextContent(
  "Chapter One: The Vanisishing of Will Byers"
)

});

