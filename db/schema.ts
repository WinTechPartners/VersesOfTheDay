import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const editions=sqliteTable('editions',{key:text('key').primaryKey(),reference:text('reference').notNull(),payload:text('payload'),status:text('status').notNull(),leaseUntil:integer('lease_until').notNull().default(0),createdAt:text('created_at').notNull()});
export const dailySelections=sqliteTable('daily_selections',{key:text('key').primaryKey(),provider:text('provider').notNull(),date:text('date').notNull(),reference:text('reference').notNull(),sourceUrl:text('source_url').notNull(),checkedAt:text('checked_at').notNull(),theme:text('theme').notNull().default('')});

export const reminders=sqliteTable('reminders',{key:text('key').primaryKey(),subscription:text('subscription').notNull(),time:text('time').notNull(),timezone:text('timezone').notNull(),lastSent:text('last_sent')});
