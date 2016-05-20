CREATE table zooanimals
(
animalid    serial primary key,
species varchar(255),
quantity int
);

-- used this to show an animal on dom
INSERT INTO zooanimals (species, quantity)
VALUES ('Cardinal', 12);
