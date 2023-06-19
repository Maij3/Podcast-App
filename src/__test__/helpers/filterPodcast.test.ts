import { filterPodcast } from "../../helpers";



describe('filterPodcast function', () => {
  const mockPodcast = [
    {
      "im:name": {
        label: "Podcast A"
      }
    },
    {
      "im:name": {
        label: "Podcast B"
      }
    },
    {
      "im:name": {
        label: "Podcast C"
      }
    }
  ];

  it('should return an empty array if no matches are found', () => {
    const search = 'D';
    const expectedOutput: any[] = [];
    const actualOutput = filterPodcast(mockPodcast, search);
    expect(actualOutput).toEqual(expectedOutput);
  });
});
