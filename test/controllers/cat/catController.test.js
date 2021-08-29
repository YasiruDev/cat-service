const CatService = require("../../../src/services/cat/catService");
const catController = require("../../../src/controllers/cat/catController");

const httpMocks = require("node-mocks-http");

beforeEach(() => {   
    next = jest.fn();
    jest.resetAllMocks();
});

afterEach(() => {
    jest.resetAllMocks();
  });


  const getWinnerSuccessResponse = {
    'id' : 1,
    'name' : 'winner',
    'score' : 10,
    'drawNumber' : '0001',
    'status' : 1
  }

describe("Test WinnerController", () => {

    it("Test getWinnerList for success", async () => {
        jest.spyOn(CatService.prototype, "getCats").mockReturnValue(getWinnerSuccessResponse);
        await catController.getCats();
        expect(res.statusCode).toBe(200);
    }); 

});
