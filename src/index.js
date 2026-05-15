

export default {
  async fetch(request, env) {
    console.log("Worker started");
    console.log("Method:", request.method);
    console.log("URL:", request.url);
    console.log("ENV:", env.ENV);

    return new Response(`ENV = ${env.ENV || "unknown"}`);
  }
};
