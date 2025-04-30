import mongoose from "mongoose";
import Series from "./models/Series.js";
import Broadcast from "./models/Broadcast.js"; // 👈 Import Broadcast model

mongoose.connect("mongodb://localhost:27017/your-db-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("✅ Connected to MongoDB for seeding!");

  // Clean old data
  await Series.deleteMany({});
  await Broadcast.deleteMany({});

  // ---------------- SERIES DATA ---------------- //
  const seriesData = [
    {
      slug: "pause-with-5-breaths",
      title: {
        en: "Pause with 5 Breaths",
        hi: "5 साँसों के साथ विराम"
      },
      subtitle: {
        en: "Think Outside the Box",
        hi: "रचनात्मक सोच विकसित करें"
      },
      image: "https://d16ho1g3lqitul.cloudfront.net/series-cover.svg",
      units: [
        {
          title: {
            en: "Unit 1: Introduction to Calmness",
            hi: "यूनिट 1: शांति की शुरुआत"
          },
          subtitle: {
            en: "Start your journey",
            hi: "अपनी यात्रा शुरू करें"
          },
          image: "https://d16ho1g3lqitul.cloudfront.net/unit1.svg",
          steps: 3,
          lessons: [
            {
              lessonId: "lesson-1",
              questions: [
                {
                  type: "mcq",
                  question: { en: "What is 2 + 2?", hi: "2 + 2 कितना होता है?" },
                  options: { en: ["3", "4", "5"], hi: ["3", "4", "5"] },
                  correct: { en: "4", hi: "4" }
                },
                {
                  type: "mcq",
                  question: { en: "Sky color?", hi: "आसमान का रंग क्या है?" },
                  options: { en: ["Blue", "Green"], hi: ["नीला", "हरा"] },
                  correct: { en: "Blue", hi: "नीला" }
                }
              ]
            },
            {
              lessonId: "lesson-2",
              questions: [
                {
                  type: "match-the-pair",
                  question: { en: "Sun ☀️", hi: "सूरज ☀️" },
                  options: { en: ["Hot", "Cold"], hi: ["गर्म", "ठंडा"] },
                  correct: { en: "Hot", hi: "गर्म" }
                },
                {
                  type: "mcq",
                  question: { en: "What is 3 + 2?", hi: "3 + 2 कितना होता है?" },
                  options: { en: ["3", "5", "6"], hi: ["3", "5", "6"] },
                  correct: { en: "5", hi: "5" }
                }
              ]
            },
            {
              lessonId: "lesson-3",
              questions: [
                {
                  type: "book",
                  pages: {
                    en: [
                      "https://d16ho1g3lqitul.cloudfront.net/page1.jpg",
                      "https://d16ho1g3lqitul.cloudfront.net/page2.jpg"
                    ],
                    hi: [
                      "https://d16ho1g3lqitul.cloudfront.net/page1-hi.jpg",
                      "https://d16ho1g3lqitul.cloudfront.net/page2-hi.jpg"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          title: {
            en: "Unit 2: Awareness and Breath",
            hi: "यूनिट 2: जागरूकता और साँस"
          },
          subtitle: {
            en: "Learn to observe yourself",
            hi: "अपने आप को देखना सीखें"
          },
          image: "https://d16ho1g3lqitul.cloudfront.net/unit2.svg",
          steps: 3,
          lessons: [
            {
              lessonId: "lesson-1",
              questions: [
                {
                  type: "mcq",
                  question: { en: "What is 10 + 5?", hi: "10 + 5 कितना होता है?" },
                  options: { en: ["14", "15", "16"], hi: ["14", "15", "16"] },
                  correct: { en: "15", hi: "15" }
                },
                {
                  type: "mcq",
                  question: { en: "Leaf color?", hi: "पत्ते का रंग क्या है?" },
                  options: { en: ["Red", "Green"], hi: ["लाल", "हरा"] },
                  correct: { en: "Green", hi: "हरा" }
                }
              ]
            },
            {
              lessonId: "lesson-2",
              questions: [
                {
                  type: "match-the-pair",
                  question: { en: "Moon 🌙", hi: "चाँद 🌙" },
                  options: { en: ["Night", "Day"], hi: ["रात", "दिन"] },
                  correct: { en: "Night", hi: "रात" }
                },
                {
                  type: "mcq",
                  question: { en: "What is 7 + 2?", hi: "7 + 2 कितना होता है?" },
                  options: { en: ["8", "9", "10"], hi: ["8", "9", "10"] },
                  correct: { en: "9", hi: "9" }
                }
              ]
            },
            {
              lessonId: "lesson-3",
              questions: [
                {
                  type: "book",
                  pages: {
                    en: [
                      "https://d16ho1g3lqitul.cloudfront.net/page3.jpg",
                      "https://d16ho1g3lqitul.cloudfront.net/page4.jpg"
                    ],
                    hi: [
                      "https://d16ho1g3lqitul.cloudfront.net/page3-hi.jpg",
                      "https://d16ho1g3lqitul.cloudfront.net/page4-hi.jpg"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  await Series.insertMany(seriesData);
  console.log("✅ Series seeded");

  // ---------------- BROADCAST DATA ---------------- //
  const broadcastData = [
    {
      name: "Sochu - Pune",
      slug: "sochu-pune",
      description: "Pune users ke liye special updates and inspiration",
      posts: [
        {
          title: "🌄 Good Morning Pune!",
          content: "Aaj ka mantra: Breathe deeply and stay calm 🙏"
        },
        {
          title: "🧘 Soothing Sound",
          content: "Try our 3-minute breathing session today!"
        }
      ]
    },
    {
      name: "Sochu - Nagpur",
      slug: "sochu-nagpur",
      description: "Nagpur ke dosto ke liye daily inspiration",
      posts: [
        {
          title: "🔥 Rise & Shine Nagpur!",
          content: "Aaj ka thought: You are stronger than you think 💪"
        }
      ]
    },
    {
      name: "Sochu - Hindi Motivation",
      slug: "sochu-hindi-motivation",
      description: "Roz ek motivational thought Hindi mein 🧠",
      posts: [
        {
          title: "🌟 प्रेरणा",
          content: "जो अपने ऊपर विश्वास रखता है, वह कुछ भी कर सकता है।"
        }
      ]
    },
    {
      name: "Sochu - Mindfulness",
      slug: "sochu-mindfulness",
      description: "Har din ek mindful practice ya tip milega",
      posts: [
        {
          title: "💡 Mindfulness Tip",
          content: "Try 1 minute silence with eyes closed right now 🧘"
        }
      ]
    }
  ];

  await Broadcast.insertMany(broadcastData);
  console.log("✅ Broadcast channels with posts seeded!");

  mongoose.disconnect();
});
