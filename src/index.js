

export default {
  async fetch(request, env) {
    return new Response(`ENV = ${env.ENV || "unknown"}`);
  }
};
