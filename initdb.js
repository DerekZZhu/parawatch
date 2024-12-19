const sql = require('better-sqlite3');
const db = sql('watches.db');

const dummyWatches = [
  {
    title: 'Bigfoot Sightings in WA',
    slug: 'bigfoot-sightings-in-wa',
    image: '/images/bigfoot.jpg',
    summary:
      'Saw something like a bigfoot near olympia natonal park',
    post: `
        I swear I’m not making this up. I was hiking near Mount Rainier last weekend, and right around sunset, I saw something HUGE moving between the trees. It had to be at least 8 feet tall, covered in dark brown fur. It stopped, looked at me (or at least I think it did—its eyes were glowing faintly), and then bolted uphill like nothing I’ve ever seen. The weirdest part? There were no footprints when I went to check the area. Anyone else see something like this? Or is Bigfoot getting better at hiding?
    `,
    user: 'A4087756233',
    user_email: 'johndoe@example.com',
  },
  {
    title: 'datacenter',
    slug: 'datacenter',
    image: '/images/datacenter.jpg',
    summary:
      'global elite building skynet',
    post: `
        Have you heard about the massive datacenter that just "popped up" outside Omaha (pic related) no announcements, no company name—just a weird gray building surrounded by security fences and cameras. Someone I know said they saw unmarked trucks delivering... what? Nobody knows. Could it be housing a sentient AI? Think about it: all these AI advancements lately, but no one talks about where these breakthroughs are being developed. Is this how Skynet starts, or am I going too deep?
    `,
    user: 'A0000000011',
    user_email: 'max@QOL.com',
  },
  {
    title: 'screamer',
    slug: 'screamer',
    image: '/images/screamer.webp',
    summary:
      'Random space screaming',
    post: `
        Okay, so I work nights and sometimes take shortcuts through the old Greenview Mall (yeah, I know it’s trespassing). Last week, around 2 a.m., I heard this horrible screaming echoing through the place. I checked everywhere—completely empty, no signs of anyone. It wasn’t just one scream either; it sounded like a chorus of voices, all overlapping. Legit not even sure if im going insane or not anymore...
    `,
    user: 'A2012024439',
    user_email: 'emilychen009@gmail.com',
  },
  {
    title: 'backrooms',
    slug: 'backrooms',
    image: '/images/theatre.jpg',
    summary:
      "No-clip rumors at the Crimson Theatre",
    post: `
        You guys ever hear the stories about the Crimson Theatre downtown? The one they closed in the 80s? There’s this rumor that if you stand in the center of the stage under the moonlight, you "no-clip" out of reality, like in a video game. So, last night, I went to check it out with some friends. Nothing happened at first, but when we left, one of us—Dan—was missing. We went back, but the stage was... gone? Just an empty pit where it used to be. If anyone knows what this means, please share. This is seriously freaking me out.
    `,
    user: 'A998762340',
    user_email: 'lauraskhot334@yahoo.com',
  },
  {
    title: 'Authentic Pizza',
    slug: 'authentic-pizza',
    image: '/images/pizza.jpg',
    summary:
      'Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.',
    post: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

      3. Bake the pizza:
         Bake in a preheated oven at 220°C for about 15-20 minutes.

      4. Serve:
         Slice hot and enjoy with a sprinkle of basil leaves.
    `,
    user: 'A55566609871',
    user_email: 'mariorossi@example.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS watches (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       post TEXT NOT NULL,
       user TEXT NOT NULL,
       user_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO watches VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @post,
         @user,
         @user_email
      )
   `);

  for (const watch of dummyWatches) {
    stmt.run(watch);
  }
}

initData();