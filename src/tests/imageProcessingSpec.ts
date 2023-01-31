import routes from "../routes/api/images";

it("gets the filename, the height and the width from url parameters", () => {
  routes.get("/", async (req, res) => {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    expect(filename).toBe(typeof String);
    expect(width).toBe(typeof Number);
    expect(height).toBe(typeof Number);
  });
});