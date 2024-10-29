import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'f8zohmep5h',
  apiKey: process.env.API_KEY,
});
