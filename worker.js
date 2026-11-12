
export default {
  async fetch(request) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    const url = new URL(request.url);
    let targetUrl;
    let route = "other-model";

    const prefix = "/v1/publishers/google/models/";

    if (url.pathname.startsWith(prefix)) {
      const modelAndAction = url.pathname.slice(prefix.length);

      const isGemini4 =
        /^gemini-4-(argon|carbon)(?=:|$)/.test(modelAndAction);

      if (isGemini4) {
        const modelName = modelAndAction.split(":")[0];

        const newPath =
          "/v1/projects/340792070144/locations/global/" +
          "publishers/google/models/" + modelAndAction;

        targetUrl =
          "https://aiplatform.googleapis.com" +
          newPath + url.search;

        route = modelName + "-global";

      } else {
        targetUrl =
          "https://asia-south1-aiplatform.googleapis.com" +
          url.pathname + url.search;
      }

    } else {
      targetUrl =
        "https://asia-south1-aiplatform.googleapis.com" +
        url.pathname + url.search;
    }

    const response = await fetch(
      new Request(targetUrl, request)
    );

    const headers = new Headers(response.headers);

    Object.entries(cors).forEach(([key, value]) => {
      headers.set(key, value);
    });

    headers.set("X-Proxy-Route", route);
    headers.set("X-Upstream-URL", targetUrl);

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
