// import { Client } from "@planetscale/database";
// import { drizzle } from "drizzle-orm/planetscale-serverless";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// import { connectionStr } from "./config";
import { envVariables } from "./config";
import * as auth from "./schema/auth";
import * as post from "./schema/post";

export * from "drizzle-orm/sql";
export { alias } from "drizzle-orm/sqlite-core";

export const schema = { ...auth, ...post };

// const psClient = new Client({ url: connectionStr.href });
// export const db = drizzle(psClient, { schema });
const client = createClient(envVariables);
export const db = drizzle(client, { schema });
