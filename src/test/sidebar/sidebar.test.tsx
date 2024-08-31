import { fireEvent, render, screen } from "@testing-library/react";

import Nav from "@/app/_components/Nav";

describe("sidebar component", () => {
  it("renders Settings header initially visible", () => {
    expect.hasAssertions(), render(<Nav />);

    const settingsHeader = screen.getByText("Settings");
    expect(settingsHeader).toBeInTheDocument();
  });

  it("toggles hidden state on click", () => {
    expect.hasAssertions(), render(<Nav />);

    const settingsHeader = screen.getByText("Settings");
    fireEvent.click(settingsHeader);

    const profileHeader = screen.getByText("Profile");
    expect(profileHeader).toBeInTheDocument();

    fireEvent.click(settingsHeader);

    expect(profileHeader).not.toBeInTheDocument();
  });
});
