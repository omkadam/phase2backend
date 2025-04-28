// seed.js
import mongoose from "mongoose";
import Series from "./models/Series.js";

mongoose.connect("mongodb://localhost:27017/your-db-name", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("✅ Connected to MongoDB for seeding!");

  // Clear existing series
  await Series.deleteMany({});

  const seriesData = [
    {
      slug: "pause-with-5-breaths",
      title: "Series 1 – Book 1",
      subtitle: "Think Outside The Box",
      image: "https://d16ho1g3lqitul.cloudfront.net/why.svg",
      steps: 3,
      lessons: [
        {
          lessonId: "lesson-1",
          questions: [
            {
              type: "book",
              pages: [
                "https://via.placeholder.com/300x400.png?text=Page+1",
                "https://via.placeholder.com/300x400.png?text=Page+2",
                "https://via.placeholder.com/300x400.png?text=Page+3"
              ]
            },
            {
              type: "mcq",
              question: "What color is the sky?",
              options: ["Blue", "Green", "Red"],
              correct: "Blue"
            }
          ]
        },
        {
          lessonId: "lesson-2",
          questions: [
            {
              type: "mcq",
              question: "What is 3 + 2?",
              options: ["3", "4", "5"],
              correct: "5"
            },
            {
              type: "mcq",
              question: "What color is the sky?",
              options: ["Blue", "Green", "Red"],
              correct: "Blue"
            }
          ]
        },
        {
          lessonId: "lesson-3",
          questions: [
            {
              type: "mcq",
              question: "What is 4 + 2?",
              options: ["3", "4", "6"],
              correct: "6"
            },
            {
              type: "mcq",
              question: "What color is your's?",
              options: ["Blue", "Green", "Red", "White"],
              correct: "Blue"
            }
          ]
        }
      ]
    },

    {
      slug: "awareness",
      title: "Series 1 – Book 2",
      subtitle: "Be Mindful",
      image: "https://d16ho1g3lqitul.cloudfront.net/why.svg",
      steps: 3,
      lessons: [
        {
          lessonId: "lesson-1",
          questions: [
            {
              type: "mcq",
              question: "What is 8 + 2?",
              options: ["3", "4", "10"],
              correct: "10"
            },
            {
              type: "mcq",
              question: "What color is the sky?",
              options: ["Blue", "Green", "Red"],
              correct: "Blue"
            }
          ]
        },
        {
          lessonId: "lesson-2",
          questions: [
            {
              type: "mcq",
              question: "What is 31 + 2?",
              options: ["3", "4", "33"],
              correct: "33"
            },
            {
              type: "mcq",
              question: "What color is the sky?",
              options: ["Blue", "Green", "Red"],
              correct: "Blue"
            }
          ]
        },
        {
          lessonId: "lesson-3",
          questions: [
            {
              type: "mcq",
              question: "What is 4 + 2?",
              options: ["3", "4", "6"],
              correct: "6"
            },
            {
              type: "mcq",
              question: "What color is your's?",
              options: ["Blue", "Green", "Red", "White"],
              correct: "Blue"
            }
          ]
        }
      ]
    },

    {
      slug: "sochu-series-1",
      title: "Sochu Series – Beginner Pack",
      subtitle: "Think. Feel. Grow.",
      image: "https://d16ho1g3lqitul.cloudfront.net/why.svg",
      steps: 3,
      lessons: [
        {
          lessonId: "lesson-1",
          questions: [
            {
              type: "mcq",
              question: "What is 5 + 5?",
              options: ["9", "10", "11"],
              correct: "10"
            },
            {
              type: "mcq",
              question: "What color is grass?",
              options: ["Blue", "Green", "Red"],
              correct: "Green"
            }
          ]
        },
        {
          lessonId: "lesson-2",
          questions: [
            {
              type: "match-the-pair",
              question: "Moon 🌙",
              options: ["Night", "Day"],
              correct: "Night"
            },
            {
              type: "match-the-pair",
              question: "Sun ☀️",
              options: ["Night", "Day"],
              correct: "Day"
            }
          ]
        },
        {
          lessonId: "lesson-3",
          questions: [
            {
              type: "book",
              pages: [
                "https://via.placeholder.com/300x400.png?text=Mindful+Page+1",
                "https://via.placeholder.com/300x400.png?text=Mindful+Page+2",
                "https://via.placeholder.com/300x400.png?text=Mindful+Page+3"
              ]
            }
          ]
        }
      ]
    }
  ];

  // Insert dummy data
  await Series.insertMany(seriesData);
  console.log("✅ Dummy series and lessons inserted successfully!");

  mongoose.disconnect();
});
