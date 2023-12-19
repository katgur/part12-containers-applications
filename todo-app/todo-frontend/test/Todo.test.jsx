/**
 * @jest-environment jsdom
 */

import React from "react";
import Todo from "../src/Todos/Todo";
import "@testing-library/jest-dom/extend-expect";

const { render, screen } = require("@testing-library/react");

const mock = {
    notDoneTodo: { id: 1, text: "Foo", done: false },
    doneTodo: { id: 2, text: "Bar", done: true },
}

describe("Todo shows data correctly", () => {
    const onClickDelete = jest.fn();
    const onClickComplete = jest.fn();

    it("should show todo is not done", async () => {
        render(<Todo todo={mock.notDoneTodo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />);

        expect(screen.getByText("Foo")).toBeVisible();
        expect(screen.getByText("This todo is not done")).toBeVisible();
    });

    it("should show todo is done", async () => {
        render(<Todo todo={mock.doneTodo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />);

        expect(screen.getByText("Bar")).toBeVisible();
        expect(screen.getByText("This todo is done")).toBeVisible();
    });
});