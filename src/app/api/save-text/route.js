import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function POST(req) {
  try {
    let { value } = await req.json();

    if (!value) {
      return Response.json(
        { success: false, message: "Value is required" },
        { status: 400 },
      );
    }

    const id = Date.now().toString();

    if (typeof value !== "string") value = JSON.stringify(value);

    await redis.hset("texts", { [id]: value });

    return Response.json({
      success: true,
      data: { id, value },
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
