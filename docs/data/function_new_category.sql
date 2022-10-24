BEGIN;

-- create a new card
CREATE OR REPLACE FUNCTION new_category(data json) RETURNS INT AS $$
  INSERT INTO category (name,description)
    VALUES (
      data->>'name',
      data->>'description'
    ) RETURNING id
$$ LANGUAGE SQL STRICT;

COMMIT;