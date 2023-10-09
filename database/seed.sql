-- Active: 1696784798147@@database-1.cx1cyrefruio.us-east-2.rds.amazonaws.com@3306@dreamy_gardens
DELETE FROM `tag`;
DELETE FROM `inspo`;
DELETE FROM `plant`;
DELETE FROM `user`;

# Backticks escape the SQL keywords, typically used for table and column names.
INSERT INTO
    `user` (
        `username`,
        `password`,
        `first_name`,
        `last_name`,
        `email`,
        `base_zone`
    )
VALUES (
        'lbouti@example.com',
        'password',
        'Laura',
        'Leboutillier',
        'lbouti@example.com',
        '6a'
    ), (
        'lvater@example.com',
        'password',
        'Linda',
        'Vater',
        'lvater@example.com',
        '7a'
    ), (
        'jputnam@example.com',
        'password',
        'Jim',
        'Putnam',
        'jputnam@example.com',
        '7b'
    );

INSERT INTO
    `inspo` (
        `user_id`,
        `description`,
        `image_url`,
        `submit_date`,
        `image_date`,
        `zone`,
        `country`,
        `state`,
        `sun_exposure`,
        `soil_type`,
        `fertilizer_schedule`,
        `additional_notes`,
        `featured`
    )
VALUES (
        1,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.',
        'https://i.pinimg.com/1200x/8a/1d/a3/8a1da3eaa79ba290da5bac6f76b69048.jpg',
        '2023-09-28T07:56:15Z',
        '2023-09-28T07:56:15Z',
        '6b',
        'US',
        'Oregon',
        null,
        null,
        null,
        null,
        true
    ), (
        2,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.',
        'https://static.wixstatic.com/media/202305_baa05835051b420a87caae545e08e012~mv2.jpg/v1/fill/w_640,h_382,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/202305_baa05835051b420a87caae545e08e012~mv2.jpg',
        '2023-09-28T07:56:15Z',
        '2023-09-28T07:56:15Z',
        '7a',
        'US',
        'Oklahoma',
        null,
        null,
        null,
        null,
        true
    ), (
        3,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.',
        'https://images.squarespace-cdn.com/content/v1/5ad65e9525bf0201d1256639/97b155a5-838e-4c40-bf79-26b1fc1df673/7P6A5769-DESKTOP-HG1ULRK.jpg',
        '2023-09-28T07:56:15Z',
        '2023-09-28T07:56:15Z',
        '7a',
        'US',
        'North Carolina',
        null,
        null,
        null,
        null,
        true
    ), (
        1,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.',
        'https://i.pinimg.com/1200x/76/d0/f2/76d0f26b710fb9de57fafb4c96881309.jpg',
        '2023-09-28T07:56:15Z',
        '2023-09-28T07:56:15Z',
        '6b',
        'US',
        'Oregon',
        null,
        null,
        null,
        null,
        false
    ), (
        2,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.',
        'https://images.405magazine.com/wp-content/uploads/2022/02/07-July-Feature-Outdoor-Focus-2.jpg',
        '2023-09-28T07:56:15Z',
        '2023-09-28T07:56:15Z',
        '7a',
        'US',
        'Oklahoma',
        null,
        null,
        null,
        null,
        false
    ), (
        3,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.',
        'https://images.squarespace-cdn.com/content/v1/5ad65e9525bf0201d1256639/1ad2969f-8b6b-4b05-86fa-17ad83550ea8/7P6A9454.jpg?format=2500w',
        '2023-09-28T07:56:15Z',
        '2023-09-28T07:56:15Z',
        '7a',
        'US',
        'North Carolina',
        null,
        null,
        null,
        null,
        false
    ), (
        1,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.',
        'https://i.ytimg.com/vi/-AQLz4YtML0/maxresdefault.jpg',
        '2023-09-28T07:56:15Z',
        '2023-09-28T07:56:15Z',
        '6b',
        'US',
        'Oregon',
        null,
        null,
        null,
        null,
        false
    ), (
        2,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.',
        'https://cdn.shopify.com/s/files/1/1308/4845/files/Screen-Shot-2021-10-25-at-4.06.57-PM.jpg?v=1635192739',        
        '2023-09-28T07:56:15Z',
        '2023-09-28T07:56:15Z',
        '7a',
        'US',
        'Oklahoma',
        null,
        null,
        null,
        null,
        false
    ), (
        3,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vitae quam eu egestas. Nunc sodales tellus nisi, sed iaculis lacus eleifend sit amet. Nunc vitae odio sem. Sed tellus orci, pellentesque nec orci facilisis, varius blandit orci.',
        'https://images.squarespace-cdn.com/content/v1/5ad65e9525bf0201d1256639/e6293c55-c833-4e7d-a48a-f7de76763088/7P6A6679.jpg',
        '2023-09-28T07:56:15Z',
        '2023-09-28T07:56:15Z',
        '7a',
        'US',
        'North Carolina',
        null,
        null,
        null,
        null,
        false
    );