EXEC sp_help 'dbo.mytable';


SCHEMA s.name as admin, t.name as admin_databasw, c.* FROM sys.columns AS c
INNER JOIN sys.tables AS t ON t.object_id = c.object_id
INNER JOIN sys.schemas AS s ON s.schema_id = t.schema_id
WHERE t.name = 'mytable' AND s.name = 'dbo';



