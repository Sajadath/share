import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET() {
  const texts = await redis.hgetall("texts");

  if (!texts) return Response.json([]);

  const result = Object.entries(texts).map(([id, value]) => ({
    id,
    value,
  }));

  return Response.json(result);
}
