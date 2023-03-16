CREATE TABLE IF NOT EXISTS creator (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    photo TEXT,
    email VARCHAR(255) NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS video(
    id SERIAL NOT NULL PRIMARY KEY,
    url TEXT NOT NULL,
    published BOOLEAN NOT NULL,
    title VARCHAR(255),
    creator_id INT REFERENCES creator(id)
);

CREATE TABLE IF NOT EXISTS follow(
    id SERIAL NOT NULL PRIMARY KEY,
    follower_creator_id INT REFERENCES creator(id),
    followed_creator_id INT REFERENCES creator(id)
);

CREATE TABLE IF NOT EXISTS interaction(
    id SERIAL NOT NULL PRIMARY KEY,
    creator_id INT REFERENCES creator(id),
    video_id INT REFERENCES video(id)
);

insert into creator (name, photo, email, password) values ('Laney', 'http://dummyimage.com/244x100.png/5fa2dd/ffffff', 'lkorf0@desdev.cn', 'c7d3188a3954d449edf67793e754336126048a26764751fe5d096ede3800aee8');
insert into creator (name, photo, email, password) values ('Robinia', 'http://dummyimage.com/169x100.png/ff4444/ffffff', 'rjurick1@timesonline.co.uk', '4bb2cb659ecc1594fea3e40800071274d62f5650bbaf99d85d4a42ee0a809a41');
insert into creator (name, photo, email, password) values ('Darda', 'http://dummyimage.com/245x100.png/5fa2dd/ffffff', 'dharryman2@furl.net', '23b2b4ab91cda1a8fa7559c5c8966850a2b88c567b6011c420da2bd86ae2b638');
insert into creator (name, photo, email, password) values ('Bert', 'http://dummyimage.com/227x100.png/cc0000/ffffff', 'bendrighi3@microsoft.com', '9f96dba9a49dc3bb04acf0b85db9a8d6bc361608d0e1164156b647d106575c02');
insert into creator (name, photo, email, password) values ('Deborah', 'http://dummyimage.com/115x100.png/dddddd/000000', 'dcustance4@bravesites.com', 'c1afa2656a945837817f37fb86da7d6137c22c35dbea93ed7f90bfbad46b29a7');

insert into video (url, published, title, creator_id) values ('https://www.youtube.com/embed/v=QJP_U33ELL4', true, 'Nobody Wants the Night', 1);
insert into video (url, published, title, creator_id) values ('https://www.youtube.com/embed/v=5r3B7yz6J68', true, 'Judgement Day', 5);
insert into video (url, published, title, creator_id) values ('https://www.youtube.com/embed/v=slIG7Aes7DM', true, 'Arthur', 1);
insert into video (url, published, title, creator_id) values ('https://www.youtube.com/embed/v=3kBIxmjun1U', true, 'Hitch Hike (Autostop rosso sangue) (Naked Prey, The)', 2);
insert into video (url, published, title, creator_id) values ('https://www.youtube.com/embed/v=IUMTaAQ43lY', true, 'Robinson Crusoe on Mars', 2);