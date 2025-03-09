CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text,
	`last_name` text,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `email_idx` ON `users` (`email`);