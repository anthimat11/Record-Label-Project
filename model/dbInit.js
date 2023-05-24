'use strict';

const db = require('better-sqlite3');
const sql = new db('model/database.db', { fileMustExist: true });
const bcrypt = require('bcrypt');


var description1 = "The Northern Lights is a fictional indie-folk band that was formed in the early 2010s. The band's name was inspired by the \n\ \n\
                    natural phenomenon of the same name, which they found both awe-inspiring and mysterious. Their music is characterized by haunting \n\ \n\
                    melodies, ethereal harmonies, and introspective lyrics that explore themes of love, loss, and the beauty of the natural world.\n\ \n\
                    The band consists of four members: lead singer and guitarist, Emily White, cellist and backing vocalist, James Grey, drummer, Mark Reed, \n\ \n\
                    and bassist, Rachel Lee. Emily's soulful voice and poetic lyrics are the centerpiece of the band's sound, while James' cello adds a\n\ \n\
                    haunting and melancholic tone to their music. Mark and Rachel's tight rhythm section provides a solid foundation for the band's songs.\n\ \n\
                    Their unique sound has also earned them a loyal fan base and critical acclaim. Despite their success, the band has remained \n\ \n\
                    down-to-earth and committed to their craft, always striving to create music that is honest, authentic, and meaningful.";
var sm_description1 = description1.split(" ").slice(0, 20).join(" ") + "...";

var description2 = "Julian Knight is a pop singer known for his smooth vocals and catchy hooks. He gained a following in the mid-2010s with his debut album,\n\ \n\
                    Midnight Memories, which featured the hit single Dancing in the Dark. His music blends elements of pop, R&B, and funk, \n\n\
                    creating a sound that is both fresh and familiar. His lyrics often explore themes of love, heartbreak, and the ups and downs of modern relationships. \n\n\
                    His style is influenced by the classic pop icons of the past, but he puts his own contemporary spin on things, making him a hit with audiences of all ages." ;
var sm_description2 = description2.split(" ").slice(0, 20).join(" ") + "...";

var description3 = "Maxine Stone is a singer-songwriter known for her powerful vocals and soulful lyrics. Her music blends elements of blues, \n\n\
                    rock, and soul, creating a sound that is both raw and emotional. Maxine grew up in a small town in the American South, \n\n\
                    where she was exposed to the rich musical heritage of the region. \n\n\
                    She started singing in church as a child, and later formed her own band in high school. \n\n\
                    Maxine gained a following in the late 2010s with her debut album, Stone Cold, which featured the hit single Heartbreak Blues. \n\n\
                    Since then, she has released several more albums, including Soul on Fire and Blues Queen, which have cemented her status as one of the most authentic and powerful voices in contemporary blues music.";
var sm_description3 = description3.split(" ").slice(0, 20).join(" ") + "...";                   

var description4 = "The Neon Knights is a fictional synthwave band that was formed in the early 2010s. The band members, known for their \n\n\
                    neon-colored outfits and retro-futuristic sound, quickly gained a following and became one of the most popular bands of the genre.\n\n\
                    Their music blended elements of synthpop, new wave, and electronic, creating a sound that was both nostalgic and futuristic. \n\n\
                    The band's lead singer, Nova Starlight, became a style icon and a symbol of the neon-soaked aesthetics of the 80s. \n\n\
                    The Neon Knights' biggest hits include Midnight Drive, Electric Dreams, and Neon Nights.";
var sm_description4 = description4.split(" ").slice(0, 20).join(" ") + "...";

var description5 = "The Velvet Undergrounders is a fictional rock band that was formed in the late 2000s. \n\n\
                    The band members, known for their experimental sound and provocative lyrics, quickly gained a \n\n\
                    cult following and became one of the most influential bands of the era. Their music blended elements of rock, folk, \n\n\
                    and avant-garde, creating a sound that was both challenging and groundbreaking. The band's frontman, Lou Reed, became a legend \n\n\
                    in his own right, known for his poetic lyrics and his willingness to push the boundaries of what was considered acceptable in popular music. \n\n\
                    The Velvet Undergrounders' biggest hits include Sweet Jane, Heroine, and Rock and Roll.";
var sm_description5 = description5.split(" ").slice(0, 20).join(" ") + "...";

var description6 = "Lila Rose is a singer-songwriter known for her soulful voice and heartfelt lyrics. Her music blends elements of R&B, \n\n\
                    soul, and pop, creating a sound that is both timeless and modern. Lila first started singing in her church choir as a child, \n\n\
                    and was later discovered by a record label executive who was impressed by her talent. She gained a following in the early 2010s \n\n\
                    with her debut album, Heartstrings, which featured the hit single My Love. Since then, Lila has released several more albums, including \n\n\
                    Soulful Serenade and Love and Loss, which have cemented her status as one of the most powerful and authentic voices in contemporary music.";
var sm_description6 = description6.split(" ").slice(0, 20).join(" ") + "...";

var description7 = "Marcus Grey is a singer-songwriter known for his soulful voice and heartfelt lyrics. His music blends elements of folk, country, and rock, \n\n\
                    creating a sound that is both timeless and modern. Marcus grew up in the American Midwest, where he was exposed to the rich musical \n\n\
                    traditions of the region. He started playing guitar as a teenager, and later began writing his own songs. \n\n\
                    Marcus gained a following in the early 2010s with his debut album, Heartland, which featured the hit single Country Road. \n\n\
                     Since then, he has released several more albums, including Back Home and American Dream, which have cemented his status as one  \n\n\
                     of the most authentic and powerful voices in contemporary Americana music.";
var sm_description7 = description7.split(" ").slice(0, 20).join(" ") + "...";

var artistIds = [1,2,3,4,5,6,7];
var names = ["The Northen Lights","Julian Knight", "Maxine Stone", "The Neon Knights", "The Velvet Undergrounders",  "Lila Rose", "Marcus Grey"];
var imgs = ["../img/northen.jpg", "../img/julian.jpg", "../img/maxine.jpg", "../img/neon_knights.jpeg",  "../img/velvet.jpg", "../img/lila.jpg", "../img/marcus.jpg" ] ;
var descriptions = [description1,description2,description3,description4,description5,description6,description7];
var sm_descriptions = [sm_description1,sm_description2,sm_description3,sm_description4,sm_description5,sm_description6,sm_description7];

var songs1 = ["Autumn Leaves","Travelling Riverside Blues","The Northern Light"];
var songs2 = ["Dancing in the Dark","Midnight Memories","Nigth Sky"];
var songs3 = ["Heartbreak Blues","Soul on Fire","Echoes in the Wind"];
var songs4 = ["Midnight Drive","Electric Dreams","Neon Nights"];
var songs5 = ["Sweet Jane","Rock and Roll","Pale Blue Eyes"];
var songs6 = ["My Love","Soulful Serenade","Love and Loss"];
var songs7 = ["Back Home","American Dream","Country Road"];

var songs = [songs1,songs2,songs3,songs4,songs5,songs6,songs7];
var songIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

//Initialize Artist Table
/*
for (let i=0; i<names.length;i++){
    let stmt = sql.prepare("INSERT INTO artist VALUES (?,?,?,?,?)");
    stmt.run(artistIds[i],names[i],imgs[i],descriptions[i],sm_descriptions[i]);
}
*/
/*
//Initialize Song Table
let stmt2 = sql.prepare("insert into song values (?,?,?)");
for(let i=0;i<songs1.length;i++){
    stmt2.run(1,songIds[i], songs1[i]);
}

*/
/*
let stmt3 = sql.prepare("insert into admin values (?,?,?)");
let hashedPassword = bcrypt.hashSync("rio123", 10);
stmt3.run(null,"admin",hashedPassword);
*/
               

