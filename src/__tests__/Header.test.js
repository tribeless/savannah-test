import React from 'react';
import { render, screen,fireEvent,waitFor } from '../utils/test-utils';
import user from "@testing-library/user-event";
import {AppHeader} from "../containers/Header/Header";
 
describe("Header component",()=>{
    it("should render AppHeader component",async()=>{
        const btn = jest.fn();
        render(<AppHeader />,{initialState:{open:false}});
        expect(screen.getByText("Track Repo")).toBeInTheDocument();

    });
});
