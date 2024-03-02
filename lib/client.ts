
import { createClient } from "microcms-js-sdk";

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("Please define MICROCMS_SERVICE_DOMAIN in .env.local")
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("Please define MICROCMS_API_KEY in .env.local")
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY
})
