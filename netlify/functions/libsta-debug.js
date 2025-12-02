// netlify/functions/libsta-debug.js

export async function handler() {
  const url =
    "https://libsta.go.kr/nlstatapi/api/v1/libinfo" +
    "?region=%EC%84%9C%EC%9A%B8" +
    "&libCode=1010011001" +
    "&libGubun=LIBTYPE000001" +
    "&libName=%EA%B5%AD%EB%A6%BD%EC%A4%91%EC%95%99%EB%8F%84%EC%84%9C%EA%B4%80" +
    "&city=%EC%84%9C%EC%B4%88%EA%B5%AC" +
    "&page=1&size=1";

  try {
    const res = await fetch(url);
    const text = await res.text();

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          upstreamStatus: res.status,
          upstreamHeaders: Object.fromEntries(res.headers),
          bodySnippet: text.slice(0, 500), // 앞 500자만
        },
        null,
        2
      ),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    };
  } catch (e) {
    // 네트워크 레벨에서 아예 실패하면 여기로 옴 (타임아웃, TLS 에러 등)
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          error: e.toString(),
        },
        null,
        2
      ),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    };
  }
}
