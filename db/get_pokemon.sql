-- Select specific pokemon from pokemon table
-- $1 represents a placeholder for the  1st argument passed into sql statement
-- $2, $3, $4, etc for other arguments
SELECT * FROM pokemon WHERE id = $1;