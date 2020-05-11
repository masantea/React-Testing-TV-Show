import React from "react"
import {render, fireEvent} from "@testing-library/react";
import {fetchShow as mockFetchShow} from "/Users/mercansy/lambda/React-Testing-TV-Show/src/api/fetchShow";
import App from "/Users/mercansy/lambda/React-Testing-TV-Show/src/App";

jest.mock("./api/fetchShow");