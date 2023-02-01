import request from "supertest";
import app from "../index";

const baseUrl = "/api/images";
const testFileName = "fjord";
const testWidth = "200";
const testHeight = "300";

const errorFileName = "hans";
const errorWidth = "";
const errorHeight = "";

describe("API endpoint testing", () => {
  it("Should return 200 endpoint /api/images with given testparameters", async () => {
    const res = await request(app).get(
      `${baseUrl}?filename=${testFileName}&width=${testWidth}&height=${testHeight}`
    );
    expect(res.statusCode).toBe(200);
  });
  it("Should return 400 when file can not be found", async () => {
    const res = await request(app).get(
      `${baseUrl}?filename=${errorFileName}&width=${testWidth}&height=${testHeight}`
    );
    expect(res.status).toBe(400);
  });
  it("Should return 400 when width is missing", async () => {
    const res = await request(app).get(
      `${baseUrl}?filename=${errorFileName}&width=${errorWidth}&height=${testHeight}`
    );
    expect(res.status).toBe(400);
  });
  it("Should return 400 when height is missing", async () => {
    const res = await request(app).get(
      `${baseUrl}?filename=${errorFileName}&width=${testWidth}&height=${errorHeight}`
    );
    expect(res.status).toBe(400);
  });
});
