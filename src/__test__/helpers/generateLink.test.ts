import { generateLink } from "../../helpers";

describe("generateLink", () => {
  it("should turn domains into clickable links", () => {
    const input = "The official website is example.com";
    const expected =
      'The official website is <a href="http://example.com" target="_blank">example.com</a>';
    expect(generateLink(input)).toBe(expected);
  });

  it("should not change text without URLs or domains", () => {
    const input = "Hello, world!";
    expect(generateLink(input)).toBe(input);
  });
});
