BEGIN;

DROP FUNCTION update_category;

CREATE OR REPLACE FUNCTION update_category(data json) RETURNS TABLE (name TEXT, description TEXT, updatedat TIMESTAMPTZ) 
AS $$
	UPDATE category SET 
        name =COALESCE(data->>'name', name ),
        description=COALESCE(data->>'description', description),
        updatedat=(now())::TIMESTAMPTZ
    WHERE id=(data->>'id')::INT
	RETURNING name , description, updatedat
$$ LANGUAGE SQL STRICT;

COMMIT;