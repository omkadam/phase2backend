import mongoose from "mongoose";

// Define the schemas exactly as in your model
const teachersquestionSchema = new mongoose.Schema({
  type: { type: String, default: "mcq" },
  allowCustomAnswer: { type: Boolean, default: false },
  anyOptionCorrect: { type: Boolean, default: false },
  image: { type: String },
  question: {
    en: { type: String },
    hi: { type: String },
  },
  questionAudio: {
    en: { type: String },
    hi: { type: String },
  },
  options: {
    en: [
      {
        text: String,
        image: String,
        audio: String,
      },
    ],
    hi: [
      {
        text: String,
        image: String,
        audio: String,
      },
    ],
  },
  correct: {
    en: { type: String },
    hi: { type: String },
  },
  pages: {
    en: [
      {
        image: { type: String },
        audio: { type: String },
        hardWords: [{ type: String }],
        speakText: { type: String },
      },
    ],
    hi: [
      {
        image: { type: String },
        audio: { type: String },
        hardWords: [{ type: String }],
      },
    ],
  },
  readAloudText: {
    en: { type: String },
    hi: { type: String },
  },
});

const teacherslessonSchema = new mongoose.Schema({
  lessonId: String,
  questions: [teachersquestionSchema],
});

const teachersunitSchema = new mongoose.Schema({
  title: {
    en: { type: String },
    hi: { type: String },
  },
  subtitle: {
    en: { type: String },
    hi: { type: String },
  },
  image: { type: String, required: true },
  particularUnitImage: { type: String, required: true },
  particularUnitImageTest: {
    en: { type: String },
    hi: { type: String }
  },
  particularUnitDesc: {
    en: { type: String },
    hi: { type: String }
  },
  riveAnimations: {
    en: [{ type: String }],
    hi: [{ type: String }]
  },
  themeColor: { type: String },
  borderBottomColor: { type: String },
  steps: { type: Number, default: 0 },
  lessons: [teacherslessonSchema],
});

const teachersseriesSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: {
    en: { type: String },
    hi: { type: String },
  },
  subtitle: {
    en: { type: String },
    hi: { type: String },
  },
  image: { type: String },
  units: [teachersunitSchema],
});

// Create model for teachersseries collection
const TeachersSeries = mongoose.model("teachersseries", teachersseriesSchema);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://Karu13AWSec2:Karu13AWSec2@cluster0.h0fpy5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    console.log("✅ Connected to MongoDB for seeding teachersseries collection!");

    // Clear existing data in teachersseries collection
    await TeachersSeries.deleteMany({});
    console.log("🗑️ Cleared existing teachersseries data");

    // Bedtime Stories data for teachersseries collection
    const bedtimeStoriesData = {
      slug: "bedtime-stories-collection",
      title: {
        en: "Bedtime Stories Collection",
        hi: "सोने की कहानियों का संग्रह",
      },
      subtitle: {
        en: "Peaceful stories for sweet dreams",
        hi: "मीठे सपनों के लिए शांतिपूर्ण कहानियां",
      },
      image: "https://d16ho1g3lqitul.cloudfront.net/bedtime-stories-cover.svg",
      units: [
        {
          title: {
            en: "Sweet Dreams Stories",
            hi: "मीठे सपनों की कहानियां",
          },
          subtitle: {
            en: "Collection 1 - Peaceful Tales",
            hi: "संग्रह 1 - शांतिपूर्ण कहानियां",
          },
          image: "https://d16ho1g3lqitul.cloudfront.net/bedtime-unit-cover.svg",
          particularUnitImage: "https://d16ho1g3lqitul.cloudfront.net/bedtime-unit-detail.jpg",
          particularUnitImageTest: {
            en: "https://d16ho1g3lqitul.cloudfront.net/bedtime-unit-detail-en.jpg",
            hi: "https://d16ho1g3lqitul.cloudfront.net/bedtime-unit-detail-hi.jpg",
          },
          particularUnitDesc: {
            en: "A collection of gentle bedtime stories designed to help children relax and drift into peaceful sleep. These stories promote imagination, calmness, and sweet dreams.",
            hi: "बच्चों को आराम करने और शांतिपूर्ण नींद में जाने में मदद करने के लिए डिज़ाइन की गई कोमल सोने की कहानियों का संग्रह। ये कहानियां कल्पना, शांति और मीठे सपनों को बढ़ावा देती हैं।",
          },
          riveAnimations: {
            en: ["/bedtime_moon.riv", "/bedtime_stars.riv"],
            hi: ["/bedtime_moon.riv", "/bedtime_stars.riv"],
          },
          themeColor: "#4A90E2",
          borderBottomColor: "#2E5984",
          steps: 5,
          lessons: [
            // Story 1: The Sleepy Forest
            // {
            //   lessonId: "story-1",
            //   questions: [
            //     {
            //       type: "book",
            //       pages: {
            //         en: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/page1updated.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-1.mp3",
            //             hardWords: [],
            //             speakText: "Once upon a time, in a magical forest where the trees whispered lullabies, there lived a little bunny named Luna.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/page2.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-2.mp3",
            //             hardWords: ["twinkled"],
            //             speakText: "Every night, Luna would hop through the forest as the stars twinkled above like tiny lanterns lighting her way.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/page3.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-3.mp3",
            //             hardWords: [],
            //             speakText: "The wise old owl would hoot softly, 'Time for bed, little Luna. The moon is waiting to watch over your dreams.'",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/page4.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-4.mp3",
            //             hardWords: [],
            //             speakText: "Luna curled up in her cozy burrow, surrounded by the gentle sounds of the night, and drifted off to dreamland.",
            //           },
            //         ],
            //         hi: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-1-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-1-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-2-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-2-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-3-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-3-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-4-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-forest-4-hi.mp3",
            //             hardWords: [],
            //           },
            //         ],
            //       },
            //     },
            //   ],
            // },
            // Story 2: The Dream Cloud
            // {
            //   lessonId: "story-2",
            //   questions: [
            //     {
            //       type: "book",
            //       pages: {
            //         en: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-1.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-1.mp3",
            //             hardWords: [],
            //             speakText: "High up in the sky lived a fluffy white cloud named Nimbus who had a very special job.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-2.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-2.mp3",
            //             hardWords: ["sprinkled"],
            //             speakText: "Every night, Nimbus would float over sleeping children and sprinkle them with magical dream dust.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-3.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-3.mp3",
            //             hardWords: [],
            //             speakText: "The dream dust would shimmer and glow, creating beautiful dreams of adventures, friendship, and wonder.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-4.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-4.mp3",
            //             hardWords: [],
            //             speakText: "As the sun began to rise, Nimbus would smile knowing all the children had the sweetest dreams.",
            //           },
            //         ],
            //         hi: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-1-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-1-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-2-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-2-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-3-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-3-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-4-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/dream-cloud-4-hi.mp3",
            //             hardWords: [],
            //           },
            //         ],
            //       },
            //     },
            //   ],
            // },
            // Story 3: The Gentle River
            // {
            //   lessonId: "story-3",
            //   questions: [
            //     {
            //       type: "book",
            //       pages: {
            //         en: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-1.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-1.mp3",
            //             hardWords: [],
            //             speakText: "By the edge of a peaceful village flowed a gentle river that sang the most beautiful lullabies.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-2.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-2.mp3",
            //             hardWords: ["melodious"],
            //             speakText: "The river's melodious voice would carry across the village, helping everyone feel calm and sleepy.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-3.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-3.mp3",
            //             hardWords: [],
            //             speakText: "Little fish would dance in the moonlight, creating ripples that sparkled like liquid silver.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-4.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-4.mp3",
            //             hardWords: [],
            //             speakText: "And so the village slept peacefully every night, wrapped in the river's gentle song.",
            //           },
            //         ],
            //         hi: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-1-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-1-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-2-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-2-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-3-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-3-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-4-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/gentle-river-4-hi.mp3",
            //             hardWords: [],
            //           },
            //         ],
            //       },
            //     },
            //   ],
            // },
            // Story 4: The Sleepy Garden
            // {
            //   lessonId: "story-4",
            //   questions: [
            //     {
            //       type: "book",
            //       pages: {
            //         en: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-1.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-1.mp3",
            //             hardWords: [],
            //             speakText: "In a secret garden hidden behind a wall of roses, magical flowers bloomed only at night.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-2.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-2.mp3",
            //             hardWords: ["fragrance"],
            //             speakText: "These special flowers released a sweet fragrance that helped everyone in the nearby town sleep deeply.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-3.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-3.mp3",
            //             hardWords: [],
            //             speakText: "A family of friendly fireflies would dance among the flowers, creating a gentle light show.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-4.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-4.mp3",
            //             hardWords: [],
            //             speakText: "When morning came, the flowers would close their petals and rest, ready for another night of sweet dreams.",
            //           },
            //         ],
            //         hi: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-1-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-1-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-2-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-2-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-3-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-3-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-4-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-garden-4-hi.mp3",
            //             hardWords: [],
            //           },
            //         ],
            //       },
            //     },
            //   ],
            // },
            // Story 5: The Sleepy Mountain
            // {
            //   lessonId: "story-5",
            //   questions: [
            //     {
            //       type: "book",
            //       pages: {
            //         en: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-1.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-1.mp3",
            //             hardWords: [],
            //             speakText: "At the top of the world stood a gentle mountain that loved to watch over sleeping children.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-2.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-2.mp3",
            //             hardWords: ["blanket"],
            //             speakText: "Each night, the mountain would pull a soft blanket of clouds over its peak to keep everyone cozy.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-3.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-3.mp3",
            //             hardWords: [],
            //             speakText: "The wind would whistle gentle melodies through the mountain's caves, like nature's own lullaby.",
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-4.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-4.mp3",
            //             hardWords: [],
            //             speakText: "And so the mountain stood guard through the night, ensuring sweet dreams for all below.",
            //           },
            //         ],
            //         hi: [
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-1-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-1-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-2-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-2-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-3-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-3-hi.mp3",
            //             hardWords: [],
            //           },
            //           {
            //             image: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-4-hi.jpg",
            //             audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-mountain-4-hi.mp3",
            //             hardWords: [],
            //           },
            //         ],
            //       },
            //     },
            //   ],
            // },
            // Calming Activity 1
            {
              lessonId: "activity-1",
              questions: [
                {
                  type: "mcq",
                  anyOptionCorrect: true,
                  question: {
                    en: "Which story made you feel most peaceful?",
                    hi: "कौन सी कहानी ने आपको सबसे ज्यादा शांति महसूस कराई?",
                  },
                  questionAudio: {
                    en: "https://d16ho1g3lqitul.cloudfront.net/peaceful-question.mp3",
                    hi: "https://d16ho1g3lqitul.cloudfront.net/peaceful-question-hi.mp3",
                  },
                  options: {
                    en: [
                      { text: "The Sleepy Forest", audio: "https://d16ho1g3lqitul.cloudfront.net/option1.mp3" },
                      { text: "The Dream Cloud", audio: "https://d16ho1g3lqitul.cloudfront.net/option2.mp3" },
                      { text: "The Gentle River", audio: "https://d16ho1g3lqitul.cloudfront.net/option3.mp3" },
                      { text: "The Sleepy Garden", audio: "https://d16ho1g3lqitul.cloudfront.net/option4.mp3" },
                    ],
                    hi: [
                      { text: "सोने वाला जंगल", audio: "https://d16ho1g3lqitul.cloudfront.net/option1-hi.mp3" },
                      { text: "सपनों का बादल", audio: "https://d16ho1g3lqitul.cloudfront.net/option2-hi.mp3" },
                      { text: "कोमल नदी", audio: "https://d16ho1g3lqitul.cloudfront.net/option3-hi.mp3" },
                      { text: "सुस्त बगीचा", audio: "https://d16ho1g3lqitul.cloudfront.net/option4-hi.mp3" },
                    ],
                  },
                },
              ],
            },
            // Calming Activity 2
            {
              lessonId: "activity-2",
              questions: [
                {
                  type: "mcq",
                  anyOptionCorrect: true,
                  question: {
                    en: "What sounds help you feel sleepy?",
                    hi: "कौन सी आवाज़ें आपको नींद महसूस कराती हैं?",
                  },
                  questionAudio: {
                    en: "https://d16ho1g3lqitul.cloudfront.net/sleepy-sounds-question.mp3",
                    hi: "https://d16ho1g3lqitul.cloudfront.net/sleepy-sounds-question-hi.mp3",
                  },
                  options: {
                    en: [
                      { text: "Gentle rain", audio: "https://d16ho1g3lqitul.cloudfront.net/rain-option.mp3" },
                      { text: "Soft music", audio: "https://d16ho1g3lqitul.cloudfront.net/music-option.mp3" },
                      { text: "Ocean waves", audio: "https://d16ho1g3lqitul.cloudfront.net/waves-option.mp3" },
                      { text: "Bird songs", audio: "https://d16ho1g3lqitul.cloudfront.net/birds-option.mp3" },
                    ],
                    hi: [
                      { text: "हल्की बारिश", audio: "https://d16ho1g3lqitul.cloudfront.net/rain-option-hi.mp3" },
                      { text: "कोमल संगीत", audio: "https://d16ho1g3lqitul.cloudfront.net/music-option-hi.mp3" },
                      { text: "समुद्री लहरें", audio: "https://d16ho1g3lqitul.cloudfront.net/waves-option-hi.mp3" },
                      { text: "पक्षियों के गीत", audio: "https://d16ho1g3lqitul.cloudfront.net/birds-option-hi.mp3" },
                    ],
                  },
                },
              ],
            },
            // Breathing Exercise
            {
              lessonId: "breathing-exercise",
              questions: [
                {
                  type: "mcq",
                  anyOptionCorrect: true,
                  question: {
                    en: "Let's do a breathing exercise. Breathe in slowly... and breathe out. How do you feel?",
                    hi: "आइए सांस की एक एक्सरसाइज करते हैं। धीरे-धीरे सांस लें... और छोड़ें। आपको कैसा लगता है?",
                  },
                  questionAudio: {
                    en: "https://d16ho1g3lqitul.cloudfront.net/breathing-exercise.mp3",
                    hi: "https://d16ho1g3lqitul.cloudfront.net/breathing-exercise-hi.mp3",
                  },
                  options: {
                    en: [
                      { text: "Calm and relaxed", audio: "https://d16ho1g3lqitul.cloudfront.net/calm-option.mp3" },
                      { text: "Peaceful", audio: "https://d16ho1g3lqitul.cloudfront.net/peaceful-option.mp3" },
                      { text: "Ready for sleep", audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-option.mp3" },
                      { text: "Happy", audio: "https://d16ho1g3lqitul.cloudfront.net/happy-option.mp3" },
                    ],
                    hi: [
                      { text: "शांत और आरामदायक", audio: "https://d16ho1g3lqitul.cloudfront.net/calm-option-hi.mp3" },
                      { text: "शांतिपूर्ण", audio: "https://d16ho1g3lqitul.cloudfront.net/peaceful-option-hi.mp3" },
                      { text: "सोने के लिए तैयार", audio: "https://d16ho1g3lqitul.cloudfront.net/sleepy-option-hi.mp3" },
                      { text: "खुश", audio: "https://d16ho1g3lqitul.cloudfront.net/happy-option-hi.mp3" },
                    ],
                  },
                },
              ],
            },
            // Gratitude Moment
            {
              lessonId: "gratitude-moment",
              questions: [
                {
                  type: "mcq",
                  anyOptionCorrect: true,
                  question: {
                    en: "Before we sleep, what are you grateful for today?",
                    hi: "सोने से पहले, आज आप किस बात के लिए आभारी हैं?",
                  },
                  questionAudio: {
                    en: "https://d16ho1g3lqitul.cloudfront.net/gratitude-question.mp3",
                    hi: "https://d16ho1g3lqitul.cloudfront.net/gratitude-question-hi.mp3",
                  },
                  options: {
                    en: [
                      { text: "My family", audio: "https://d16ho1g3lqitul.cloudfront.net/family-option.mp3" },
                      { text: "My friends", audio: "https://d16ho1g3lqitul.cloudfront.net/friends-option.mp3" },
                      { text: "Beautiful stories", audio: "https://d16ho1g3lqitul.cloudfront.net/stories-option.mp3" },
                      { text: "A good day", audio: "https://d16ho1g3lqitul.cloudfront.net/day-option.mp3" },
                    ],
                    hi: [
                      { text: "मेरा परिवार", audio: "https://d16ho1g3lqitul.cloudfront.net/family-option-hi.mp3" },
                      { text: "मेरे दोस्त", audio: "https://d16ho1g3lqitul.cloudfront.net/friends-option-hi.mp3" },
                      { text: "सुंदर कहानियां", audio: "https://d16ho1g3lqitul.cloudfront.net/stories-option-hi.mp3" },
                      { text: "एक अच्छा दिन", audio: "https://d16ho1g3lqitul.cloudfront.net/day-option-hi.mp3" },
                    ],
                  },
                },
              ],
            },
            // Final Relaxation
            {
              lessonId: "final-relaxation",
              questions: [
                {
                  type: "mcq",
                  anyOptionCorrect: true,
                  question: {
                    en: "Now close your eyes and imagine your favorite peaceful place. Sweet dreams!",
                    hi: "अब अपनी आंखें बंद करें और अपनी पसंदीदा शांतिपूर्ण जगह की कल्पना करें। मीठे सपने!",
                  },
                  questionAudio: {
                    en: "https://d16ho1g3lqitul.cloudfront.net/final-relaxation.mp3",
                    hi: "https://d16ho1g3lqitul.cloudfront.net/final-relaxation-hi.mp3",
                  },
                  options: {
                    en: [
                      { text: "A magical forest", audio: "https://d16ho1g3lqitul.cloudfront.net/forest-place.mp3" },
                      { text: "A quiet beach", audio: "https://d16ho1g3lqitul.cloudfront.net/beach-place.mp3" },
                      { text: "A cozy bedroom", audio: "https://d16ho1g3lqitul.cloudfront.net/bedroom-place.mp3" },
                      { text: "A starry sky", audio: "https://d16ho1g3lqitul.cloudfront.net/sky-place.mp3" },
                    ],
                    hi: [
                      { text: "एक जादुई जंगल", audio: "https://d16ho1g3lqitul.cloudfront.net/forest-place-hi.mp3" },
                      { text: "एक शांत समुद्र तट", audio: "https://d16ho1g3lqitul.cloudfront.net/beach-place-hi.mp3" },
                      { text: "एक आरामदायक कमरा", audio: "https://d16ho1g3lqitul.cloudfront.net/bedroom-place-hi.mp3" },
                      { text: "तारों भरा आसमान", audio: "https://d16ho1g3lqitul.cloudfront.net/sky-place-hi.mp3" },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    };

    // Insert data into teachersseries collection
    const newSeries = new TeachersSeries(bedtimeStoriesData);
    await newSeries.save();

    console.log("✅ Successfully seeded data into teachersseries collection!");
    console.log(`📚 Created series: ${newSeries.title.en}`);
    console.log(`🆔 Series slug: ${newSeries.slug}`);
    console.log(`📖 Total units: ${newSeries.units.length}`);
    console.log(`📝 Total lessons in first unit: ${newSeries.units[0].lessons.length}`);

    // Display detailed structure
    console.log("\n📋 teachersseries Collection Structure:");
    console.log(`Collection: teachersseries`);
    console.log(`Document ID: ${newSeries._id}`);
    
    newSeries.units.forEach((unit, unitIndex) => {
      console.log(`\n📚 Unit ${unitIndex + 1}: ${unit.title.en}`);
      console.log(`   - Theme Color: ${unit.themeColor}`);
      console.log(`   - Border Color: ${unit.borderBottomColor}`);
      console.log(`   - Steps: ${unit.steps}`);
      console.log(`   - Lessons: ${unit.lessons.length}`);
      
      unit.lessons.forEach((lesson, lessonIndex) => {
        const question = lesson.questions[0];
        if (question.type === "book") {
          console.log(`   📖 Lesson ${lessonIndex + 1} (${lesson.lessonId}): Story with ${question.pages.en.length} pages`);
        } else {
          console.log(`   🎯 Lesson ${lessonIndex + 1} (${lesson.lessonId}): ${question.type.toUpperCase()} - ${question.question.en.substring(0, 50)}...`);
        }
      });
    });

    // Verify data was inserted
    const count = await TeachersSeries.countDocuments();
    console.log(`\n📊 Total documents in teachersseries collection: ${count}`);

    // Show sample query results
    const series = await TeachersSeries.findOne({ slug: "bedtime-stories-collection" });
    if (series) {
      console.log(`\n✅ Verification: Found series with slug '${series.slug}'`);
      console.log(`   Title (EN): ${series.title.en}`);
      console.log(`   Title (HI): ${series.title.hi}`);
    }

    mongoose.disconnect();
    console.log("\n🔐 Database connection closed. Seeding complete!");
    console.log("🎉 Your teachersseries collection is ready for bedtime stories!");

  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
    mongoose.disconnect();
    process.exit(1);
  });