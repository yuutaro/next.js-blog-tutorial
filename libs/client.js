import { error } from "console";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || error("MICROCMS_SERVICE_DOMAIN is not defined"),
  apiKey: process.env.MICROCMS_API_KEY || error("MICROCMS_API_KEY is not defined"),
})
