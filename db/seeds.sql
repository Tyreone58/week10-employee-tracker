INSERT INTO department (name)
VALUES ('sales'),
       ('engineering'),
       ('finance'),
       ('legal');


INSERT INTO role (title, salary, department)
values ('sales lead', 120000, 1),
       ('software engineer', 150000, 1),
       ('account manager', 100000, 2),
       ('accountant', 75000, 2),
       ('salesperson', 95000, 3),


INSERT INTO employee (first_name, last_name, department, role_id)
values ('David', 'Thompson', 1, NULL),
       ('Ashley', 'Black', 2, 1),
       ('Tyler', 'Jackson', 3, NULL),
       ('John', 'Davis', 4, 3),
       ('Emily', 'Brown', 5, NULL),