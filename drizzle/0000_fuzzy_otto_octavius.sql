CREATE TABLE `daily_selections` (
	`key` text PRIMARY KEY NOT NULL,
	`provider` text NOT NULL,
	`date` text NOT NULL,
	`reference` text NOT NULL,
	`source_url` text NOT NULL,
	`checked_at` text NOT NULL,
	`theme` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `editions` (
	`key` text PRIMARY KEY NOT NULL,
	`reference` text NOT NULL,
	`payload` text,
	`status` text NOT NULL,
	`lease_until` integer DEFAULT 0 NOT NULL,
	`created_at` text NOT NULL
);
