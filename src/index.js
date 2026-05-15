

export default {
  async fetch(request, env) {

    const data = {
      message: "ENV loaded",
      env: env.ENV || "prod",
      method: request.method,
      url: request.url
    };

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "*"
      }
    });
  }
};
