import fakeData from "../api/data";
export default {
  post: jest.fn().mockImplementation((url) => {
    switch (url) {
      case "":
        return Promise.resolve({ data: fakeData });
      default:
        throw new Error(`UNMATCHED URL: ${url}`);
    }
  }),
};
