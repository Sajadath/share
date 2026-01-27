import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/savedData.json");

export async function GET() {
  if (!fs.existsSync(filePath)) {
    return Response.json([]);
  }

  const file = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(file);

  return Response.json(data);
}
