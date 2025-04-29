// seed.js
import mongoose from "mongoose";
import Series from "./models/Series.js";

mongoose.connect("mongodb://localhost:27017/your-db-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("✅ Connected to MongoDB for seeding!");

  // Purana data clean karo
  await Series.deleteMany({});

  const seriesData = [
    {
      slug: "pause-with-5-breaths",
      title: "Pause with 5 Breaths",
      subtitle: "Think Outside the Box",
      image: "https://d16ho1g3lqitul.cloudfront.net/series-cover.svg",
      units: [
        {
          title: "Unit 1: Introduction to Calmness",
          subtitle: "Start your journey",
          image: "https://d16ho1g3lqitul.cloudfront.net/unit1.svg",
          steps: 3,
          lessons: [
            {
              lessonId: "lesson-1",
              questions: [
                { type: "mcq", question: "What is 2 + 2?", options: ["3", "4", "5"], correct: "4" },
                { type: "mcq", question: "Sky color?", options: ["Blue", "Green"], correct: "Blue" }
              ]
            },
            {
              lessonId: "lesson-2",
              questions: [
                { type: "match-the-pair", question: "Sun ☀️", options: ["Hot", "Cold"], correct: "Hot" },
                { type: "mcq", question: "What is 3 + 2?", options: ["3", "5", "6"], correct: "5" }
              ]
            },
            {
              lessonId: "lesson-3",
              questions: [
                { type: "book", pages: [
                  "https://d16ho1g3lqitul.cloudfront.net/page1.jpg",
                  "https://d16ho1g3lqitul.cloudfront.net/page2.jpg"
                ]}
              ]
            }
          ]
        },
        {
          title: "Unit 2: Awareness and Breath",
          subtitle: "Learn to observe yourself",
          image: "https://d16ho1g3lqitul.cloudfront.net/unit2.svg",
          steps: 3,
          lessons: [
            {
              lessonId: "lesson-1",
              questions: [
                { type: "mcq", question: "What is 10 + 5?", options: ["14", "15", "16"], correct: "15" },
                { type: "mcq", question: "Leaf color?", options: ["Red", "Green"], correct: "Green" }
              ]
            },
            {
              lessonId: "lesson-2",
              questions: [
                { type: "match-the-pair", question: "Moon 🌙", options: ["Night", "Day"], correct: "Night" },
                { type: "mcq", question: "What is 7 + 2?", options: ["8", "9", "10"], correct: "9" }
              ]
            },
            {
              lessonId: "lesson-3",
              questions: [
                { type: "book", pages: [
                  "https://d16ho1g3lqitul.cloudfront.net/page3.jpg",
                  "https://d16ho1g3lqitul.cloudfront.net/page4.jpg"
                ]}
              ]
            }
          ]
        }
      ]
    }
  ];

  await Series.insertMany(seriesData);
  console.log("✅ Dummy series and units inserted successfully!");
  mongoose.disconnect();
});
