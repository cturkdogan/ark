create table AciOrder (id int8 not null, enddate timestamp, startdate timestamp, text varchar(255), resource_id int8, primary key (id))


CREATE TABLE public."AciOrder"
(
    id int8range NOT NULL,
    enddate timestamp without time zone,
    startdate timestamp without time zone,
    acitext character varying(255),
    resource_id int8range,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."AciOrder"
    OWNER to postgres;