create database nomer4dumbways;

create table users_tb(
    id int primary key not null,
    name varchar(25) not null,
    photo varchar(50) not null,
    email varchar(25) not null,
    password varchar(50) not null
);

create table post_tb(
    id int not null,
    content text,
    image varchar(100),
    id_user int,
    foreign key (id_user) references users_tb(id)
);

-- Insert seluruh data dengan table yang terkait users_tb dan post_tb
insert into users_tb values(5, "slyther", "/img/10.jpg", "blindingdarkness0.com", "apaajaboleh");
insert into post_tb values(5 "i can do it", "img/isi10.jpg", 2);

-- Tampilkan seluruh data dari table user beserta Contentnya 
select users_tb.id, post_tb.content, post_tb.image, post_tb.id_user from users_tb, post_tb;


-- Tampilkan seluruh data content berdasarkan user tertentu
select users_tb.id, post_tb.content, post_tb.image, post_tb.id_user from users_tb, post_tb where users_tb.id = "5";

-- Ubah salah satu data user
update post_tb set content="coba dulu" where id = "5";
