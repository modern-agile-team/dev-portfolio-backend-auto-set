CREATE DATABASE IF NOT EXISTS readonly_dev_portfolio_for_public;
USE readonly_dev_portfolio_for_public;

CREATE TABLE IF NOT EXISTS tech_stacks (
  name VARCHAR(20) NOT NULL,
  
  PRIMARY KEY (name)
);

CREATE TABLE IF NOT EXISTS tech_stack_images (
  no INT NOT NULL AUTO_INCREMENT,
  tech_stack_name VARCHAR(20) NOT NULL,
  url VARCHAR(255) NOT NULL,
  background_color VARCHAR(9) NULL,
  
  PRIMARY KEY (no),
  FOREIGN KEY (tech_stack_name)
  REFERENCES tech_stacks (name) ON UPDATE CASCADE ON DELETE CASCADE
);