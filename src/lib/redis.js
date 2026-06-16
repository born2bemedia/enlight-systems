function getRedisConfig() {
  const url = (
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL || ""
  ).trim();
  const token = (
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN || ""
  ).trim();

  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

export function useRedis() {
  return Boolean(getRedisConfig());
}

export async function redisRequest(pathSuffix, options = {}) {
  const config = getRedisConfig();
  if (!config) return null;

  const response = await fetch(`${config.url}${pathSuffix}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${config.token}`,
      ...options.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Redis request failed: ${response.status}`);
  }

  const data = await response.json();
  return data.result;
}

export async function redisGet(key) {
  return redisRequest(`/get/${encodeURIComponent(key)}`);
}

export async function redisSet(key, value) {
  return redisRequest(`/set/${encodeURIComponent(key)}/${encodeURIComponent(value)}`);
}

export async function redisSadd(key, member) {
  return redisRequest(
    `/sadd/${encodeURIComponent(key)}/${encodeURIComponent(member)}`
  );
}

export async function redisSmembers(key) {
  const result = await redisRequest(`/smembers/${encodeURIComponent(key)}`);
  return Array.isArray(result) ? result : [];
}
