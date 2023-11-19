CREATE TABLE users
(
        user_id int4 FOREIGN KEY(user_id) REFERENCES notes user_id ,
        login VARCHAR(255) ,
        email VARCHAR(255) ,
        password VARCHAR(255) ,
        phone_num CHAR ,
        name VARCHAR (255) ,
        date_of_birth DATE,
        type_account VARCHAR

);

CREATE TABLE notes
(
        user_id int4 FOREIGN KEY(user_id) REFERENCES users user_id ,
        note_id int4 FOREIGN KEY(note_id) REFERENCES collections note_id ,
        collection_id int4  ,
        img_note VARCHAR(255) ,
        note_title VARCHAR(255) ,
        coordinate POINT ,
        note_text TEXT , 
        date_created DATE

);
CREATE TABLE collections
(
        user_id int4 FOREIGN KEY(user_id) REFERENCES users user_id,
        collection_id int4 FOREIGN KEY(note_id) REFERENCES collection_list collection_id, 
        note_id int4 ,
        collecrion_name VARCHAR(255),
        date_created DATE,
        img_collection VARCHAR(255)

);

CREATE TABLE collection_list 
(
        user_id int4 FOREIGN KEY(user_id) REFERENCES users user_id,
        collection_id int4 FOREIGN KEY(note_id) REFERENCES collection_list collection_id, 
        collecrion_name VARCHAR(255),
);

CREATE TABLE map_tags
(
        user_id int4 FOREIGN KEY(user_id) REFERENCES users user_id,
        maptags_id int4 ,
        note_id int4 ,
        coordinate POINT 
);

CREATE TABLE subscription
(
        subscription_id int4 FOREIGN KEY(user_id) REFERENCES users user_id ,
        subsccriber_id int4 FOREIGN KEY(user_id) REFERENCES users user_id ,
        login VARCHAR(255) 
);

CREATE TABLE contacts
(
        user_id int4 FOREIGN KEY(user_id) REFERENCES users user_id,
        login VARCHAR(255) ,
        phone_num CHAR 
);

CREATE TABLE messages
(
        sender_id int4 FOREIGN KEY(user_id) REFERENCES users user_id,
        receiver_id int4 FOREIGN KEY(user_id) REFERENCES users user_id,
        messages_id int4 ,
        messages_text TEXT , 
        message_date DATE,
        is_read BOOLEAN
);
