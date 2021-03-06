import React from 'react';
import { render, screen,fireEvent,waitFor } from '../utils/test-utils';
import user from "@testing-library/user-event";
import RepoModal from "../containers/Header/Modal";
import App from "../App";

describe("repo modal component",()=>{
    it('should render the modal component',async()=>{

        const data = {
            owner:"octocat",
            repo:"Hello-World",
            first:20,
            last:20
        }
        render(<App />,{initialState:{open:false}});
        expect(await screen.findByPlaceholderText("enter repo name")).toBeInTheDocument();
        expect(await screen.findByPlaceholderText("enter repo owner")).toBeInTheDocument();
        expect(await screen.findByPlaceholderText("enter first filter value")).toBeInTheDocument();
        expect(await screen.findByPlaceholderText("enter second filter value")).toBeInTheDocument();
        
    });
});