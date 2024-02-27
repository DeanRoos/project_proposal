CREATE TABLE IF NOT EXISTS city_data (
  city_id INTEGER primary key,
  city_name TEXT,
  city_coordinate INTEGER
);
INSERT INTO city_data VALUES (1, 'Philadelphia', 0),
  (2, 'Boston', 50),
  (3, 'Chicago', 100);