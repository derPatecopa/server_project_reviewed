import request from "supertest";
import app from "../index";

const baseUrl = "/api/images";
const testFileName = "fjord";
const testWidth = "200";
const testHeight = "300";

describe("API endpoint testing", () => {
  it("Should return 200 and correct response for endpoint /api/images with given testparameters", async () => {
    const res = await request(app).get(`${baseUrl}?filename=${testFileName}&width=${testWidth}&height=${testHeight}`);
    expect(res.statusCode).toBe(200);
  });
});
