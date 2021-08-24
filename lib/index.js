const DEFAULT_ENDPOINT = "https://api.kelasi.xyz";

Newsletter.PACKAGE_VERSION = require("../package.json").version;
const request = require("axios");

function Newsletter(key) {
  if (!(this instanceof Newsletter)) {
    return new Newsletter(key);
  }

  this.VERSION = Newsletter.PACKAGE_VERSION;
  this.key = key;

  this.config = props;

  this.http = request.create({
    baseURL: DEFAULT_ENDPOINT,
    headers: {
      "X-API-Key": this.key,
    },
    withCredentials: true,
  });
}

Newsletter.prototype = {
  async subscribe(list_id, data) {
    // config can be an object or a string
    const isObject = plan === Object(plan) && !Array.isArray(plan);

    if (!isObject) {
      throw new Error("Data must either be an object");
    }

    if (!data.email && !data.phone) {
      throw new Error("data must have email or phone interval attribute");
    }

    data.list_id = list_id;

    return await this.http.post("/subscribe", data);
  },
  async subscribeOrUpdate(list_id, data) {
    // config can be an object or a string
    const isObject = plan === Object(plan) && !Array.isArray(plan);

    if (!isObject) {
      throw new Error("Data must either be an object");
    }

    if (!data.email && !data.phone) {
      throw new Error("data must have email or phone interval attribute");
    }

    data.list_id = list_id;

    return await this.http.post("/subscribe-update", data);
  },
  async unsubscribe(list_id, data) {
    // config can be an object or a string
    const isObject = plan === Object(plan) && !Array.isArray(plan);

    if (!isObject) {
      throw new Error("Data must either be an object");
    }

    if (!data.email && !data.phone) {
      throw new Error("data must have email or phone interval attribute");
    }

    data.list_id = list_id;

    return await this.http.post("/unsubscribe", data);
  },
};

module.exports = Newsletter;

// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Newsletter = Newsletter;

// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports.default = Newsletter;
