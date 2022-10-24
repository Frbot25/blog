BEGIN;

-- create a new card
CREATE OR REPLACE FUNCTION new_tag(data json) RETURNS INT AS $$
  INSERT INTO tag ("name","color")
    VALUES (
      data->>'name',
      data->>'color' 
    ) RETURNING id
$$ LANGUAGE SQL STRICT;


COMMIT;