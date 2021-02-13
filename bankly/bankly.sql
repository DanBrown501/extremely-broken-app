\echo 'Delete and recreate bankly db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE bankly;
CREATE DATABASE bankly;
\connect bankly;


\echo 'Delete and recreate bankly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE bankly_test;
CREATE DATABASE bankly_test;
\connect bankly_test
