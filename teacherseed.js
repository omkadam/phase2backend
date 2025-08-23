import mongoose from "mongoose";
import TeacherSeries from "./models/TeacherSeries.js";

// MongoDB connection string - update this to match your database
mongoose
  .connect(
    "mongodb+srv://Karu13AWSec2:Karu13AWSec2@cluster0.h0fpy5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    console.log("✅ Connected to MongoDB for teacher series seeding!");

    // Clear existing teacher series data
    await TeacherSeries.deleteMany({});
    console.log("🗑️ Cleared existing teacher series data");

    // Teacher series data to seed
    const teacherSeriesData = [
      {
        title: {
          en: "Teacher Edition: Critical Thinking",
          hi: "शिक्षक संस्करण: आलोचनात्मक सोच",
        },
        description: {
          en: "Educational content designed specifically for teachers to enhance critical thinking skills",
          hi: "शिक्षकों के लिए विशेष रूप से डिज़ाइन की गई शैक्षणिक सामग्री",
        },
        image: "https://d16ho1g3lqitul.cloudfront.net/teacher-series-cover.svg",
        createdBy: "teacher-admin", // Default teacher ID
        isPublished: true,
        category: "Education",
        tags: ["critical-thinking", "teacher-resources", "pedagogy"],
        
        units: [
          {
            title: {
              en: "Teaching Critical Thinking",
              hi: "आलोचनात्मक सोच पढ़ाना",
            },
            subtitle: {
              en: "Teacher Training - Module 1",
              hi: "शिक्षक प्रशिक्षण - मॉड्यूल 1",
            },
            image: "https://d16ho1g3lqitul.cloudfront.net/teacher-unit1.svg",
            particularUnitImage: "https://d16ho1g3lqitul.cloudfront.net/teacher-mockup-1.jpg",
            particularUnitImageTest: {
              en: "https://d16ho1g3lqitul.cloudfront.net/teacher-mockup-1.jpg",
              hi: "https://d16ho1g3lqitul.cloudfront.net/teacher-mockup-1-hi.jpg",
            },
            particularUnitDesc: {
              en: "This module focuses on developing critical thinking skills in students through interactive teaching methods and thought-provoking questions.",
              hi: "यह मॉड्यूल इंटरैक्टिव शिक्षण विधियों और विचारशील प्रश्नों के माध्यम से छात्रों में आलोचनात्मक सोच कौशल विकसित करने पर केंद्रित है।",
            },
            riveAnimations: {
              en: ["/teacher_animation1.riv", "/teacher_thinking.riv"],
              hi: ["/teacher_animation1.riv", "/teacher_thinking.riv"],
            },
            themeColor: "#4F46E5",
            borderBottomColor: "#3730A3",
            steps: 15,
            createdBy: "teacher-admin",
            isPublished: true,
            
            lessons: [
              {
                lessonId: "teacher-lesson-1",
                createdBy: "teacher-admin",
                isPublished: true,
                description: {
                  en: "Introduction to Critical Thinking in Education",
                  hi: "शिक्षा में आलोचनात्मक सोच का परिचय",
                },
                
                questions: [
                  {
                    type: "mcq",
                    allowCustomAnswer: false,
                    image: "https://d16ho1g3lqitul.cloudfront.net/teacher-q1.svg",
                    question: {
                      en: "What is the primary goal of teaching critical thinking?",
                      hi: "आलोचनात्मक सोच सिखाने का मुख्य लक्ष्य क्या है?",
                    },
                    questionAudio: {
                      en: "https://d16ho1g3lqitul.cloudfront.net/teacher-q1-en.mp3",
                      hi: "https://d16ho1g3lqitul.cloudfront.net/teacher-q1-hi.mp3",
                    },
                    options: {
                      en: [
                        {
                          text: "To memorize facts",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o1-1.mp3",
                        },
                        {
                          text: "To develop analytical skills",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o1-2.mp3",
                        },
                        {
                          text: "To follow instructions",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o1-3.mp3",
                        },
                        {
                          text: "To pass tests",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o1-4.mp3",
                        },
                      ],
                      hi: [
                        {
                          text: "तथ्यों को याद करना",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o1-1-hi.mp3",
                        },
                        {
                          text: "विश्लेषणात्मक कौशल विकसित करना",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o1-2-hi.mp3",
                        },
                        {
                          text: "निर्देशों का पालन करना",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o1-3-hi.mp3",
                        },
                        {
                          text: "परीक्षा पास करना",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o1-4-hi.mp3",
                        },
                      ],
                    },
                    correct: {
                      en: "To develop analytical skills",
                      hi: "विश्लेषणात्मक कौशल विकसित करना",
                    },
                    createdBy: "teacher-admin",
                    difficulty: "medium",
                    tags: ["critical-thinking", "teaching-methods"],
                  },
                  
                  {
                    type: "mcq",
                    allowCustomAnswer: true,
                    anyOptionCorrect: true,
                    question: {
                      en: "How do you encourage students to think outside the box?",
                      hi: "आप छात्रों को बॉक्स के बाहर सोचने के लिए कैसे प्रेरित करते हैं?",
                    },
                    questionAudio: {
                      en: "https://d16ho1g3lqitul.cloudfront.net/teacher-q2-en.mp3",
                      hi: "https://d16ho1g3lqitul.cloudfront.net/teacher-q2-hi.mp3",
                    },
                    options: {
                      en: [
                        {
                          text: "Ask open-ended questions",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o2-1.mp3",
                        },
                        {
                          text: "Use real-world examples",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o2-2.mp3",
                        },
                        {
                          text: "Encourage different perspectives",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o2-3.mp3",
                        },
                        {
                          text: "Create safe discussion spaces",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o2-4.mp3",
                        },
                      ],
                      hi: [
                        {
                          text: "खुले प्रश्न पूछें",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o2-1-hi.mp3",
                        },
                        {
                          text: "वास्तविक जीवन के उदाहरण का उपयोग करें",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o2-2-hi.mp3",
                        },
                        {
                          text: "अलग-अलग दृष्टिकोणों को प्रोत्साहित करें",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o2-3-hi.mp3",
                        },
                        {
                          text: "सुरक्षित चर्चा का माहौल बनाएं",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-o2-4-hi.mp3",
                        },
                      ],
                    },
                    correct: {
                      en: "Ask open-ended questions",
                      hi: "खुले प्रश्न पूछें",
                    },
                    createdBy: "teacher-admin",
                    difficulty: "medium",
                    tags: ["teaching-strategies", "student-engagement"],
                  },
                ],
              },
              
              {
                lessonId: "teacher-lesson-2",
                createdBy: "teacher-admin",
                isPublished: true,
                description: {
                  en: "Practical Teaching Strategies",
                  hi: "व्यावहारिक शिक्षण रणनीतियाँ",
                },
                
                questions: [
                  {
                    type: "book",
                    pages: {
                      en: [
                        {
                          image: "https://d16ho1g3lqitul.cloudfront.net/teacher-book1.jpg",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-audio1.mp3",
                          hardWords: ["pedagogy", "methodology"],
                          speakText: "Effective teaching requires understanding your students' learning styles and adapting your methods accordingly.",
                        },
                        {
                          image: "https://d16ho1g3lqitul.cloudfront.net/teacher-book2.jpg",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-audio2.mp3",
                          hardWords: ["engagement", "interaction"],
                          speakText: "Creating an interactive classroom environment helps students become active participants in their learning journey.",
                        },
                      ],
                      hi: [
                        {
                          image: "https://d16ho1g3lqitul.cloudfront.net/teacher-book1-hi.jpg",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-audio1-hi.mp3",
                          hardWords: ["शिक्षाशास्त्र", "पद्धति"],
                        },
                        {
                          image: "https://d16ho1g3lqitul.cloudfront.net/teacher-book2-hi.jpg",
                          audio: "https://d16ho1g3lqitul.cloudfront.net/teacher-audio2-hi.mp3",
                          hardWords: ["सहभागिता", "बातचीत"],
                        },
                      ],
                    },
                    createdBy: "teacher-admin",
                    difficulty: "easy",
                  },
                ],
              },
              
              {
                lessonId: "teacher-lesson-3",
                createdBy: "teacher-admin",
                isPublished: true,
                description: {
                  en: "Assessment and Evaluation Methods",
                  hi: "मूल्यांकन और मूल्यांकन के तरीके",
                },
                
                questions: [
                  {
                    type: "mcq",
                    allowCustomAnswer: true,
                    anyOptionCorrect: true,
                    question: {
                      en: "What assessment method best evaluates critical thinking?",
                      hi: "कौन सा मूल्यांकन तरीका आलोचनात्मक सोच का सबसे अच्छा मूल्यांकन करता है?",
                    },
                    options: {
                      en: [
                        { text: "Essay questions" },
                        { text: "Project-based assignments" },
                        { text: "Case study analysis" },
                        { text: "Peer discussions" },
                      ],
                      hi: [
                        { text: "निबंध प्रश्न" },
                        { text: "प्रोजेक्ट-आधारित असाइनमेंट" },
                        { text: "केस स्टडी विश्लेषण" },
                        { text: "सहकर्मी चर्चा" },
                      ],
                    },
                    correct: {
                      en: "Essay questions",
                      hi: "निबंध प्रश्न",
                    },
                    createdBy: "teacher-admin",
                    difficulty: "hard",
                    tags: ["assessment", "evaluation"],
                  },
                ],
              },
            ],
          },
        ],
        
        settings: {
          allowStudentSubmissions: true,
          showCorrectAnswers: true,
          timeLimit: 45, // 45 minutes
          maxAttempts: 3,
        },
      },
      
      // Second Teacher Series
      {
        title: {
          en: "Teacher Edition: Emotional Intelligence",
          hi: "शिक्षक संस्करण: भावनात्मक बुद्धिमत्ता",
        },
        description: {
          en: "Developing emotional intelligence in the classroom environment",
          hi: "कक्षा के माहौल में भावनात्मक बुद्धिमत्ता का विकास",
        },
        image: "https://d16ho1g3lqitul.cloudfront.net/teacher-series2-cover.svg",
        createdBy: "teacher-admin",
        isPublished: true,
        category: "Psychology",
        tags: ["emotional-intelligence", "classroom-management", "student-welfare"],
        
        units: [
          {
            title: {
              en: "Understanding Student Emotions",
              hi: "छात्र भावनाओं को समझना",
            },
            subtitle: {
              en: "Teacher Training - Module 2",
              hi: "शिक्षक प्रशिक्षण - मॉड्यूल 2",
            },
            image: "https://d16ho1g3lqitul.cloudfront.net/teacher-unit2.svg",
            particularUnitImage: "https://d16ho1g3lqitul.cloudfront.net/teacher-mockup-2.jpg",
            particularUnitImageTest: {
              en: "https://d16ho1g3lqitul.cloudfront.net/teacher-mockup-2.jpg",
              hi: "https://d16ho1g3lqitul.cloudfront.net/teacher-mockup-2-hi.jpg",
            },
            particularUnitDesc: {
              en: "Learn to recognize and respond to student emotions effectively, creating a supportive learning environment.",
              hi: "छात्र भावनाओं को पहचानना और उनका प्रभावी जवाब देना सीखें, एक सहायक शिक्षण वातावरण बनाएं।",
            },
            themeColor: "#EC4899",
            borderBottomColor: "#BE185D",
            steps: 12,
            createdBy: "teacher-admin",
            isPublished: true,
            
            lessons: [
              {
                lessonId: "emotional-lesson-1",
                createdBy: "teacher-admin",
                isPublished: true,
                description: {
                  en: "Recognizing Emotional Cues",
                  hi: "भावनात्मक संकेतों को पहचानना",
                },
                
                questions: [
                  {
                    type: "mcq",
                    question: {
                      en: "How can you tell if a student is feeling anxious?",
                      hi: "आप कैसे बता सकते हैं कि कोई छात्र चिंतित महसूस कर रहा है?",
                    },
                    options: {
                      en: [
                        { text: "They avoid eye contact" },
                        { text: "They fidget frequently" },
                        { text: "They speak very quietly" },
                        { text: "All of the above" },
                      ],
                      hi: [
                        { text: "वे आंखों से संपर्क से बचते हैं" },
                        { text: "वे बार-बार बेचैनी दिखाते हैं" },
                        { text: "वे बहुत धीमे बोलते हैं" },
                        { text: "उपरोक्त सभी" },
                      ],
                    },
                    correct: {
                      en: "All of the above",
                      hi: "उपरोक्त सभी",
                    },
                    createdBy: "teacher-admin",
                    difficulty: "easy",
                    tags: ["emotional-recognition", "student-behavior"],
                  },
                ],
              },
            ],
          },
        ],
        
        settings: {
          allowStudentSubmissions: false,
          showCorrectAnswers: true,
          timeLimit: 30,
          maxAttempts: 5,
        },
      },
    ];

    // Insert the teacher series data
    const insertedSeries = await TeacherSeries.insertMany(teacherSeriesData);
    
    console.log(`✅ Successfully seeded ${insertedSeries.length} teacher series!`);
    console.log("📊 Teacher Series Created:");
    insertedSeries.forEach((series, index) => {
      console.log(`   ${index + 1}. ${series.title.en}`);
      console.log(`      - Units: ${series.units.length}`);
      console.log(`      - Total Lessons: ${series.units.reduce((acc, unit) => acc + unit.lessons.length, 0)}`);
      console.log(`      - Total Questions: ${series.units.reduce((acc, unit) => 
        acc + unit.lessons.reduce((lessonAcc, lesson) => lessonAcc + lesson.questions.length, 0), 0)}`);
      console.log(`      - Published: ${series.isPublished ? 'Yes' : 'No'}`);
      console.log("");
    });

    console.log("🎉 Teacher series database seeding completed successfully!");
    
    // Close the connection
    mongoose.connection.close();
    console.log("🔌 Database connection closed.");
    
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  });