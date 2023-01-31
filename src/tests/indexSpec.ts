import request from "supertest";
import app from "../index";

describe("API endpoint testing", () => {
  it("Should return 200 and correct response for endpoint /api", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(200);
  });
});
