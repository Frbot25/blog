BEGIN;
DROP TABLE IF EXISTS 
    user_prefer_item, 
    item_has_category,
    item_has_tag, 
    "role", 
    "user", 
    "item", 
    "tag", 
    "category"
;

CREATE TABLE "role"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"role" TEXT NOT NULL UNIQUE DEFAULT 'utilisateur',
	createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updatedAt TIMESTAMPTZ
);
CREATE TABLE "user"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"user_name" TEXT NOT NULL UNIQUE,
	email TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"avatar" TEXT,
	createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMPTZ,
	role_id  INTEGER NOT NULL REFERENCES role(id)
);
CREATE TABLE "tag"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE,
	color TEXT NOT NULL,
	createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMPTZ
);

CREATE TABLE "category"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE,
	"description" TEXT NOT NULL,
	createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMPTZ
);

CREATE TABLE "item"(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"url_image" TEXT NOT NULL,
	"url_video" TEXT,
	createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMPTZ,
    "user_id" INT NOT NULL REFERENCES "user"(id),
	category_id INTEGER NOT NULL REFERENCES "category"(id)
);

CREATE TABLE item_has_tag(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"item_id" INTEGER NOT NULL REFERENCES "item"("id")  ON DELETE CASCADE,
	"tag_id" INTEGER NOT NULL REFERENCES "tag"("id")  ON DELETE CASCADE, 
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);   
CREATE TABLE item_has_category(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"item_id" INTEGER NOT NULL REFERENCES "item"("id")  ON DELETE CASCADE,
	"category_id" INTEGER NOT NULL REFERENCES "category"("id")  ON DELETE CASCADE, 
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
	
CREATE TABLE user_prefer_item(
	 id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     "user_id" INTEGER NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
	 "item_id" INTEGER NOT NULL REFERENCES "item"("id") ON DELETE CASCADE,
	 "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
 insert into role ("role") values 
    ('utilisateur');

insert into category (name, description) values 
    ('Jeux vidéo', 'découvrir les jeux vidéos'),--1
    ('Vidéo', 'lien vidéo'),--2
    ('Site', 'site internet')--3
;
COMMIT;