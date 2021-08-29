const WinnerService = require("../../../src/services/winner/winnerService");
const winnerService = new WinnerService();

beforeEach(() => {
    next = jest.fn();
    jest.resetAllMocks();
});

jest.mock('../../../src/models');
const data = { page: 1, drawNumber: '001', programId: 1 };
const winnersCount = {};
describe("Test Winner service", () => {
	it("Test getWinners for success", async () => {
         await winnerService.getWinners(data);
	});
});
