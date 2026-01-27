import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/savedData.json");

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return Response.json(
        { success: false, message: "ID is required" },
        { status: 400 }
      );
    }

    if (!fs.existsSync(filePath)) {
      return Response.json(
        { success: false, message: "No data file found" },
        { status: 404 }
      );
    }

    const file = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(file);

    const filteredData = data.filter((item) => item.id !== id);

    // If nothing was deleted
    if (filteredData.length === data.length) {
      return Response.json(
        { success: false, message: "ID not found" },
        { status: 404 }
      );
    }

    fs.writeFileSync(filePath, JSON.stringify(filteredData, null, 2));

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
