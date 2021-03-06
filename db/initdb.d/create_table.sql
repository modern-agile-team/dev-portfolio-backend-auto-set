CREATE DATABASE IF NOT EXISTS dev_portfolio;
USE dev_portfolio;

CREATE TABLE IF NOT EXISTS `admins` (
	`email`	VARCHAR(60)	NOT NULL,
	`password`	CHAR(64)	NOT NULL	COMMENT 'SHA-256 알고리즘, 길이 고정 64자',
	`salt`	CHAR(10)	NOT NULL	COMMENT '길이 고정 10자',
	`createdAt`	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP(),

	PRIMARY KEY (`email`)
);

CREATE TABLE IF NOT EXISTS `headers` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`title`	VARCHAR(30)	NOT NULL,
	`logoUrl`	VARCHAR(255)	NOT NULL,

	PRIMARY KEY (`no`)
);

CREATE TABLE IF NOT EXISTS `channels_in_header` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`headerNo`	INT UNSIGNED	NOT NULL,
	`name`	VARCHAR(20)	NOT NULL,
	`url`	VARCHAR(255)	NOT NULL,

	PRIMARY KEY (`no`),
  FOREIGN KEY (`headerNo`)
  REFERENCES `headers` (`no`) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `techStacks` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`name`	VARCHAR(20)	NOT NULL,
	`gauge`	INT	NOT NULL,

	PRIMARY KEY (`no`)
);

CREATE TABLE IF NOT EXISTS `contacts` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`title`	VARCHAR(20)	NOT NULL,
	`subTitle`	VARCHAR(50)	NOT NULL,
	`buttonText`	VARCHAR(20)	NOT NULL,

	PRIMARY KEY (`no`)
);

CREATE TABLE IF NOT EXISTS `contactChannels` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`contactNo`	INT UNSIGNED	NOT NULL,
	`name`	VARCHAR(20)	NOT NULL,
	`url`	VARCHAR(255)	NOT NULL,

	PRIMARY KEY (`no`),
  FOREIGN KEY (`contactNo`)
  REFERENCES `contacts` (`no`) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `user_infos` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`contactNo`	INT UNSIGNED	NOT NULL,
	`title`	VARCHAR(40)	NOT NULL,
	`description`	VARCHAR(100)	NOT NULL,

	PRIMARY KEY (`no`),
  FOREIGN KEY (`contactNo`)
  REFERENCES `contacts` (`no`) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `projects` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`title`	VARCHAR(30)	NOT NULL,
	`subTitle`	VARCHAR(100)	NULL,
	`description`	TEXT	NULL	COMMENT '65535자 이하',

	PRIMARY KEY (`no`)
);

CREATE TABLE IF NOT EXISTS `short_introductions` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`title`	VARCHAR(30)	NOT NULL,
	`description`	VARCHAR(300)	NOT NULL,

	PRIMARY KEY (`no`)
);

CREATE TABLE IF NOT EXISTS `histories` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`startDate`	DATE	NOT NULL,
	`endDate`	DATE	NULL,
	`description`	VARCHAR(100)	NOT NULL,
	`progressFlag`	TINYINT(1)	NOT NULL	COMMENT '0: 끝남 1: 진행중',

	PRIMARY KEY (`no`)
);

CREATE TABLE IF NOT EXISTS `careers` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`startDate`	DATE	NOT NULL,
	`endDate`	DATE	NULL,
	`description`	VARCHAR(100)	NOT NULL,
	`progressFlag`	TINYINT(1)	NOT NULL	COMMENT '0: 끝남 1: 진행중',

	PRIMARY KEY (`no`)
);

CREATE TABLE IF NOT EXISTS `visitor_comments` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`visitorNickname`	VARCHAR(20)	NULL	DEFAULT "익명",
	`password`	VARCHAR(30)	NOT NULL,
	`description`	VARCHAR(500)	NOT NULL,
	`createdAt`	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP()	COMMENT '현재 시간',
	`updatedAt`	TIMESTAMP	NOT NULL	DEFAULT CURRENT_TIMESTAMP()	COMMENT '현재 시간, 처음 데이터는 생성일과 같다.',

	PRIMARY KEY (`no`)
);

CREATE TABLE IF NOT EXISTS `visitor_countors` (
	`no`	INT UNSIGNED	NOT NULL	AUTO_INCREMENT	COMMENT '일련 번호',
	`count`	INT UNSIGNED	NULL	DEFAULT 0,

	PRIMARY KEY (`no`)
);
