import { selectColorOnActiveRow } from ".";
import { Color } from "../typing";

describe("Utils", () => {
  it("changes colors on active row if the new color is before the existing one", () => {
    const activeRow = [Color.B, Color.G, Color.X, Color.X, Color.X];
    const newColor = Color.G;
    const position = 0;
    const expectedNewActiveRow = selectColorOnActiveRow(
      activeRow,
      newColor,
      position
    );
    expect(expectedNewActiveRow).toEqual([
      Color.G,
      Color.X,
      Color.X,
      Color.X,
      Color.X,
    ]);
  });
  it("changes colors on active row if the new color is after the existing one", () => {
    const activeRow = [Color.B, Color.G, Color.X, Color.X, Color.X];
    const newColor = Color.G;
    const position = 3;
    const expectedNewActiveRow = selectColorOnActiveRow(
      activeRow,
      newColor,
      position
    );
    expect(expectedNewActiveRow).toEqual([
      Color.B,
      Color.X,
      Color.X,
      Color.G,
      Color.X,
    ]);
  });
  it("appends the new color on the active row", () => {
    const activeRow = [Color.X, Color.X, Color.X, Color.X, Color.X];
    const newColor = Color.G;
    const position = 1;
    const expectedNewActiveRow = selectColorOnActiveRow(
      activeRow,
      newColor,
      position
    );
    expect(expectedNewActiveRow).toEqual([
      Color.X,
      Color.G,
      Color.X,
      Color.X,
      Color.X,
    ]);
  });
});
