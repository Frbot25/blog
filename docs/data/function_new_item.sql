BEGIN;

-- create a new card
CREATE OR REPLACE FUNCTION new_item(data json) RETURNS INT AS $$
  INSERT INTO item (title,description,url_image,url_video,user_id,category_id)
    VALUES (
      data->>'title',
      data->>'description',
      data->>'url_image',
      data->>'url_video',
      (data->>'user_id')::INT,
      (data->>'category_id')::INT    
    ) RETURNING id
$$ LANGUAGE SQL STRICT;

--pour les tables de liaison

CREATE OR REPLACE FUNCTION item_category(data json) RETURNS INT AS $$
INSERT INTO item_has_category (item_id, category_id)
	VALUES (
	  (data->>'id')::INT,
	  (data->>'category_id')::INT    
	)
RETURNING id
$$ LANGUAGE SQL STRICT;

COMMIT;