// import { sql } from "drizzle-orm";
// import { serial, timestamp, varchar } from "drizzle-orm/mysql-core";

// import { mySqlTable } from "./_table";

// export const post = mySqlTable("post", {
//   id: serial("id").primaryKey(),
//   title: varchar("name", { length: 256 }).notNull(),
//   content: varchar("content", { length: 256 }).notNull(),
//   createdAt: timestamp("created_at")
//     .default(sql`CURRENT_TIMESTAMP`)
//     .notNull(),
//   updatedAt: timestamp("updatedAt").onUpdateNow(),
// });

import { sql } from "drizzle-orm";
import { text } from "drizzle-orm/sqlite-core";

import { sqliteTable } from "./_table";

export const post = sqliteTable("post", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("name", { length: 256 }).notNull(),
  content: text("content", { length: 256 }).notNull(),
  createdAt: text("createdAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updatedAt")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
