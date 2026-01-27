import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function POST(req) {
  try {
    const { value } = await req.json();

    if (!value) {
      return Response.json(
        { success: false, message: "Value is required" },
        { status: 400 },
      );
    }

    const id = Date.now().toString();

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
