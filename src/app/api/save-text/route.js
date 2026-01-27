import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/savedData.json");

export async function POST(req) {
  try {
    const body = await req.json();

    const newEntry = {
      id: Date.now() + "",
      value: body.value,
    };

    let existingData = [];

    // If file exists → read it
    if (fs.existsSync(filePath)) {
      const file = fs.readFileSync(filePath, "utf-8");
      existingData = JSON.parse(file);
    }

    // Append new data (do NOT overwrite)
    existingData.push(newEntry);

    // Ensure directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Write updated data
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    return Response.json({ success: true, data: newEntry });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
