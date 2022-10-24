BEGIN;

DROP FUNCTION update_tag;

CREATE OR REPLACE FUNCTION update_tag(data json) RETURNS TABLE (name TEXT, color TEXT, updatedat TIMESTAMPTZ) 
AS $$
	UPDATE tag SET 
        name=COALESCE(data->>'name', name),
        color=COALESCE(data->>'color', color),
        updatedat=(now())::TIMESTAMPTZ
    WHERE id=(data->>'id')::INT
	RETURNING name, color, updatedat
$$ LANGUAGE SQL STRICT;

COMMIT;