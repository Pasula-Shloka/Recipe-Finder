import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import SearchBar from "../components/SearchBar";

test("renders search input", () => {
  render(
    <SearchBar
      searchTerm=""
      setSearchTerm={vi.fn()}
    />
  );

  const input = screen.getByPlaceholderText(
    /search/i
  );

  expect(input).toBeInTheDocument();
});