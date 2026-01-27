import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return Response.json(
        { success: false, message: "ID is required" },
        { status: 400 },
      );
    }

    const exists = await redis.hexists("texts", id);

    if (!exists) {
      return Response.json(
        { success: false, message: "ID not found" },
        { status: 404 },
      );
    }

    await redis.hdel("texts", id);

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
