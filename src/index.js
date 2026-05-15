

export default {
  async fetch(request, env) {
    return Response.json({
      message: "ENV loaded",
      env: env.ENV || "unknown",
      method: request.method,
      url: request.url
    });
  }
};
