import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LessonNotes from "../../components/LessonNotes";

describe("LessonNotes", () => {
  it("renders note titles and bodies", () => {
    render(
      <LessonNotes
        notes={[
          {
            title: "Test title",
            body: "Readable lesson body",
          },
        ]}
      />,
    );

    expect(screen.getByText("Test title")).toBeTruthy();
    expect(screen.getByText("Readable lesson body")).toBeTruthy();
  });
});
