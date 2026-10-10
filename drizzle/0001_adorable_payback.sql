CREATE TABLE `reminders` (
	`key` text PRIMARY KEY NOT NULL,
	`subscription` text NOT NULL,
	`time` text NOT NULL,
	`timezone` text NOT NULL,
	`last_sent` text
);
