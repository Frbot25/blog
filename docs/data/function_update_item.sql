BEGIN;

DROP FUNCTION update_item;

CREATE OR REPLACE FUNCTION update_item(data json) RETURNS TABLE (title TEXT, description TEXT, url_image TEXT, url_video TEXT, user_id INT, category_id INT, updatedat TIMESTAMPTZ) 
AS $$
	UPDATE item SET 
        title=COALESCE(data->>'title', title),
        description=COALESCE(data->>'description', description),
        url_image=COALESCE(data->>'url_image', url_image),
        url_video=COALESCE(data->>'url_video', url_video),
        user_id=COALESCE((data->>'user_id')::INT, user_id),
        category_id=COALESCE((SELECT id FROM category WHERE name = (data->>'category')), category_id),
        updatedat=(now())::TIMESTAMPTZ
    WHERE id=(data->>'id')::INT
	RETURNING title, description, url_image, url_video, user_id, category_id, updatedat
$$ LANGUAGE SQL STRICT;

COMMIT;