import mongoose from "mongoose";
import Series from "./models/Series.js";
import Broadcast from "./models/Broadcast.js";

mongoose
  .connect("mongodb://localhost:27017/your-db-name")
  .then(async () => {
    console.log("✅ Connected to MongoDB for seeding!");

    await Series.deleteMany({});
    await Broadcast.deleteMany({});

    const seriesData = [
      {
        slug: "pause-with-5-breaths",
        title: {
          en: "Pause with 5 Breaths",
          hi: "5 सांसों के साथ विराम",
        },
        subtitle: {
          en: "Think Outside the Box",
          hi: "रचनात्मक सोच विकसित करें",
        },
        image: "https://d16ho1g3lqitul.cloudfront.net/series-cover.svg",
        units: [
          // unit 1
          {
            title: {
              en: "Series 1 - Book 1",
              hi: "सीरीज 1 - पुस्तक 1",
            },
            subtitle: {
              en: "Think Outside The Box",
              hi: "हटके सोचो",
            },
            image: "https://d16ho1g3lqitul.cloudfront.net/whyv2.svg",
            steps: 8,
            lessons: [
              // lesson 1
              {
                lessonId: "lesson-1",
                questions: [
                  {
                    type: "book",
                    pages: {
                      en: [
                        "https://d16ho1g3lqitul.cloudfront.net/page1.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page2.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page3.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page4.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page5.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page6.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page7.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page8.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page9.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page10.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page11.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page12.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page13.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page14.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page15.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page16.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page17.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page18.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page19.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page20.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page21.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page22.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page23.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page24.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page25.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page26.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page27.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page28.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page25.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page29.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page30.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page31.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page32.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page33.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page34.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page35.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page36.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page37.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page38.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page39.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page40.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page41.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page42.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page43.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page44.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page45.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page46.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page47.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page48.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page49.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page50.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page51.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page52.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page53.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page54.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page55.png",
                        "https://d16ho1g3lqitul.cloudfront.net/page56.png",

                      ],
                      hi: [
                        "https://d16ho1g3lqitul.cloudfront.net/page1-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page2-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page3-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page4-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page5-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page6-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page7-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page8-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page9-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page10-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page11-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page12-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page13-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page14-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page15-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page16-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page17-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page18-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page19-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page20-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page21-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page22-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page23-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page24-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page25-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page26-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page27-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page28-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page29-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page30-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page31-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page32-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page33-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page34-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page35-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page36-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page37-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page38-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page39-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page40-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page41-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page42-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page43-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page44-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page45-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page46-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page47-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page48-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page49-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page50-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page51-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page52-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page53-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page54-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page55-hi.jpg",
                        "https://d16ho1g3lqitul.cloudfront.net/page56-hi.jpg",

                      ],
                    },
                  },
                  {
                    type: "mcq",
                    question: {
                      en: "Sky color?",
                      hi: "आसमान का रंग क्या है?",
                    },
                    options: {
                      en: [
                        { text: "Blue", image: "https://example.com/blue.jpg", audio: "https://example.com/blue.mp3" },
                        { text: "Green" },
                      ],
                      hi: [
                        { text: "नीला" },
                        { text: "हरा" },
                      ],
                    },
                    correct: { en: "Blue", hi: "नीला" },
                  },
                ],
              },
              // lesson 2
              {
                lessonId: "lesson-2",
                questions: [
                  // {
                  //   type: "match-the-pair",
                  //   question: { en: "Sun ☀️", hi: "सूरज ☀️" },
                  //   options: {
                  //     en: [
                  //       { text: "Hot", image: "https://example.com/sun-hot.jpg" },
                  //       { text: "Cold" },
                  //     ],
                  //     hi: [
                  //       { text: "गर्म" },
                  //       { text: "ठंडा" },
                  //     ],
                  //   },
                  //   correct: { en: "Hot", hi: "गर्म" },
                  // },
                  {
                    type: "mcq",
                    question: {
                      en: "Anju was engrossed in reading her book. What is the meaning of engrossed?",
                      hi: "अंजू अपनी किताब पढ़ने में तल्लीन थी। Engrossed का मतलब क्या होता है?",
                    },
                    options: {
                      en: [
                        { text: "Lost in thought.", image: "https://example.com/blue.jpg", audio: "https://d16ho1g3lqitul.cloudfront.net/q-1-1en.mp3" },
                        { text: "Focussed or lost in an activity!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-1-2en.mp3" },
                        { text: "Completed something.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-1-3en.mp3" },
                        { text: "Not liking something.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-1-4en.mp3" },
                      ],
                      hi: [
                        { text: "ख्यालों में खोया हुआ।", image: "https://example.com/blue.jpg", audio: "https://d16ho1g3lqitul.cloudfront.net/q-1-1.mp3" },
                        { text: "किसी गतिविधि में तल्लीन या खोया हुआ!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-1-2.mp3" },
                        { text: "कुछ पूरा कर लिया।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-1-3.mp3" },
                        { text: "कुछ पसंद नहीं आ रहा।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-1-4.mp3" },
                      ],
                    },
                    correct: { en: "Focussed or lost in an activity!", hi: "किसी गतिविधि में तल्लीन या खोया हुआ!" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What does it mean to have the jitters?", hi: "Jitters का मतलब क्या होता है?" },
                    options: {
                      en: [
                        { text: "To have snacks to eat.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-2-1en.mp3" },
                        { text: "Having insects near you.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-2-2en.mp3" },
                        { text: "To be scared.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-2-3en.mp3" },
                        { text: "Shaking hard.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-2-4en.mp3" },
                      ],
                      hi: [
                        { text: "खाने के लिए स्नैक्स।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-2-1.mp3" },
                        { text: "अपने पास कीड़ों का होना।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-2-2.mp3" },
                        { text: "डर जाना।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-2-3.mp3" },
                        { text: "तेजी से कांपना।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-2-4.mp3" },
                      ],
                    },
                    correct: { en: "To be scared.", hi: "डर जाना।" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Sochu and Raju ran ______________ all around the house.", hi: "सोचू और राजू घर के चारों ओर ____________ दौड़ रहे थे।" },
                    options: {
                      en: [
                        { text: "helter-skelter", audio: "https://d16ho1g3lqitul.cloudfront.net/q-3-1en.mp3"},
                        { text: "helter-jelter", audio: "https://d16ho1g3lqitul.cloudfront.net/q-3-2en.mp3"},
                        { text: "up and down", audio: "https://d16ho1g3lqitul.cloudfront.net/q-3-3en.mp3"},
                        { text: "here and there", audio: "https://d16ho1g3lqitul.cloudfront.net/q-3-4en.mp3"},
                      ],
                      hi: [
                        { text: "हेल्टर-स्केल्टर", audio: "https://d16ho1g3lqitul.cloudfront.net/q-3-1.mp3"  },
                        { text: "हेल्टर-जेल्टर", audio: "https://d16ho1g3lqitul.cloudfront.net/q-3-2.mp3" },
                        { text: "ऊपर और नीचे", audio: "https://d16ho1g3lqitul.cloudfront.net/q-3-3.mp3" },
                        { text: "यहाँ-वहाँ", audio: "https://d16ho1g3lqitul.cloudfront.net/q-3-4.mp3" },
                      ],
                    },
                    correct: { en: "helter-skelter", hi: "हेल्टर-स्केल्टर" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Nikola Tesla was a great ________ of the 19th century.", hi: "निकोल टेस्ला 19वीं सदी के एक महान ________ थे।" },
                    options: {
                      en: [
                        { text: "artist", audio: "https://d16ho1g3lqitul.cloudfront.net/q-4-1en.mp3" },
                        { text: "philosopher", audio: "https://d16ho1g3lqitul.cloudfront.net/q-4-2en.mp3" },
                        { text: "thinker", audio: "https://d16ho1g3lqitul.cloudfront.net/q-4-3en.mp3" },
                        { text: "inventor", audio: "https://d16ho1g3lqitul.cloudfront.net/q-4-4en.mp3" },
                      ],
                      hi: [
                        { text: "कलाकार", audio: "https://d16ho1g3lqitul.cloudfront.net/q-4-1.mp3" },
                        { text: "दार्शनिक", audio: "https://d16ho1g3lqitul.cloudfront.net/q-4-2.mp3" },
                        { text: "विचारक", audio: "https://d16ho1g3lqitul.cloudfront.net/q-4-3.mp3" },
                        { text: "आविष्कारक", audio: "https://d16ho1g3lqitul.cloudfront.net/q-4-4.mp3" },
                      ],
                    },
                    correct: { en: "inventor", hi: "आविष्कारक" },
                  },
                  {
                    type: "mcq",
                    question: { en: "While the kids were scared of how strict their class teacher will be, a _____ old man came dancing into the classroom.", hi: "जब बच्चे इस बात से डरे हुए थे कि उनका कक्षा शिक्षक कितना सख्त होगा, तभी एक _____ बूढ़ा आदमी नाचते हुए कक्षा में आ गया।" },
                    options: {
                      en: [
                        { text: "jolly", audio: "https://d16ho1g3lqitul.cloudfront.net/q-5-1en.mp3" },
                        { text: "golly", audio: "https://d16ho1g3lqitul.cloudfront.net/q-5-2en.mp3" },
                        { text: "molly", audio: "https://d16ho1g3lqitul.cloudfront.net/q-5-3en.mp3" },
                        { text: "holly", audio: "https://d16ho1g3lqitul.cloudfront.net/q-5-4en.mp3" },
                      ],
                      hi: [
                        { text: "मस्तीखोर", audio: "https://d16ho1g3lqitul.cloudfront.net/q-5-1.mp3" },
                        { text: "गॉली", audio: "https://d16ho1g3lqitul.cloudfront.net/q-5-2.mp3" },
                        { text: "मॉली", audio: "https://d16ho1g3lqitul.cloudfront.net/q-5-3.mp3" },
                        { text: "हॉली", audio: "https://d16ho1g3lqitul.cloudfront.net/q-5-4.mp3" },
                      ],
                    },
                    correct: { en: "jolly", hi: "मस्तीखोर" },
                  },
                ],
              },
              // lesson 3
              {
                lessonId: "lesson-3",
                questions: [
                  {
                    type: "mcq",
                    question: { en: "Friendship is often the most important ____ we share with someone!", hi: "दोस्ती अक्सर किसी के साथ साझा किया गया सबसे महत्वपूर्ण ____ होती है!" },
                    options: {
                      en: [
                        { text: "ice cream", audio: "https://d16ho1g3lqitul.cloudfront.net/q-6-1en.mp3" },
                        { text: "band", audio: "https://d16ho1g3lqitul.cloudfront.net/q-6-2en.mp3" },
                        { text: "bond", audio: "https://d16ho1g3lqitul.cloudfront.net/q-6-3en.mp3" },
                        { text: "gift", audio: "https://d16ho1g3lqitul.cloudfront.net/q-6-4en.mp3" },
                      ],
                      hi: [
                        { text: "आइस क्रीम", audio: "https://d16ho1g3lqitul.cloudfront.net/q-6-1.mp3" },
                        { text: "बैंड", audio: "https://d16ho1g3lqitul.cloudfront.net/q-6-2.mp3" },
                        { text: "बंधन", audio: "https://d16ho1g3lqitul.cloudfront.net/q-6-3.mp3" },
                        { text: "उपहार", audio: "https://d16ho1g3lqitul.cloudfront.net/q-6-4.mp3" },
                      ],
                    },
                    correct: { en: "bond", hi: "बंधन" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Anju warned everyone that fear is __________.", hi: "अंजू ने सभी को चेतावनी दी कि डर __________ है।" },
                    options: {
                      en: [
                        { text: "dengerous" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-7-1en.mp3"},
                        { text: "boring", audio: "https://d16ho1g3lqitul.cloudfront.net/q-7-2en.mp3" },
                        { text: "lovely", audio: "https://d16ho1g3lqitul.cloudfront.net/q-7-3en.mp3" },
                        { text: "contagious", audio: "https://d16ho1g3lqitul.cloudfront.net/q-7-4en.mp3" },
                      ],
                      hi: [
                        { text: "खतरनाक", audio: "https://d16ho1g3lqitul.cloudfront.net/q-7-1.mp3" },
                        { text: "उबाऊ", audio: "https://d16ho1g3lqitul.cloudfront.net/q-7-2.mp3"},
                        { text: "प्यारा" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-7-3.mp3"},
                        { text: "संक्रामक" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-7-4.mp3"},
                      ],
                    },
                    correct: { en: "contagious", hi: "संक्रामक" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Mr Williams believes that being ______ is not the way.", hi: "श्री विलियम्स का मानना है कि ______ होना सही तरीका नहीं है।" },
                    options: {
                      en: [
                        { text: "loud", audio: "https://d16ho1g3lqitul.cloudfront.net/q-8-1en.mp3" },
                        { text: "strict", audio: "https://d16ho1g3lqitul.cloudfront.net/q-8-2en.mp3" },
                        { text: "lazy", audio: "https://d16ho1g3lqitul.cloudfront.net/q-8-3en.mp3" },
                        { text: "sad", audio: "https://d16ho1g3lqitul.cloudfront.net/q-8-4en.mp3" },
                      ],
                      hi: [
                        { text: "जोर से", audio: "https://d16ho1g3lqitul.cloudfront.net/q-8-1.mp3" },
                        { text: "कठोर", audio: "https://d16ho1g3lqitul.cloudfront.net/q-8-2.mp3" },
                        { text: "आलसी", audio: "https://d16ho1g3lqitul.cloudfront.net/q-8-3.mp3" },
                        { text: "दुखी" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-8-4.mp3"},
                      ],
                    },
                    correct: { en: "strict", hi: "कठोर" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Raju was baffled by Mr Kumar’s answer. What does it mean to be baffled?", hi: "राजू श्री कुमार के उत्तर से हैरान था। Baffled का मतलब क्या होता है?" },
                    options: {
                      en: [
                        { text: "confused", audio: "https://d16ho1g3lqitul.cloudfront.net/q-9-1en.mp3" },
                        { text: "troubled", audio: "https://d16ho1g3lqitul.cloudfront.net/q-9-2en.mp3" },
                        { text: "amused", audio: "https://d16ho1g3lqitul.cloudfront.net/q-9-3en.mp3" },
                        { text: "excited", audio: "https://d16ho1g3lqitul.cloudfront.net/q-9-4en.mp3" },
                      ],
                      hi: [
                        { text: "उलझन में", audio: "https://d16ho1g3lqitul.cloudfront.net/q-9-1.mp3" },
                        { text: "परेशान", audio: "https://d16ho1g3lqitul.cloudfront.net/q-9-2.mp3" },
                        { text: "मनोरंजक", audio: "https://d16ho1g3lqitul.cloudfront.net/q-9-3.mp3" },
                        { text: "उत्तेजित", audio: "https://d16ho1g3lqitul.cloudfront.net/q-9-4.mp3" },
                      ],
                    },
                    correct: { en: "confused", hi: "उलझन में" },
                  },
                  {
                    type: "mcq",
                    question: { en: "The maiden flight by the Wright Brothers was only 12 seconds long. What does maiden mean?", hi: "राइट ब्रदर्स की पहली उड़ान केवल 12 सेकंड लंबी थी। Maiden का मतलब क्या होता है?" },
                    options: {
                      en: [
                        { text: "to make" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-10-1en.mp3"},
                        { text: "the biggest", audio: "https://d16ho1g3lqitul.cloudfront.net/q-10-2en.mp3" },
                        { text: "none of the above", audio: "https://d16ho1g3lqitul.cloudfront.net/q-10-3en.mp3" },
                        { text: "the first attempt", audio: "https://d16ho1g3lqitul.cloudfront.net/q-10-4en.mp3" },
                      ],
                      hi: [
                        { text: "बनाना", audio: "https://d16ho1g3lqitul.cloudfront.net/q-10-1.mp3" },
                        { text: "सबसे बड़ा", audio: "https://d16ho1g3lqitul.cloudfront.net/q-10-2.mp3" },
                        { text: "उपरोक्त में से कोई नहीं", audio: "https://d16ho1g3lqitul.cloudfront.net/q-10-3.mp3" },
                        { text: "पहली कोशिश", audio: "https://d16ho1g3lqitul.cloudfront.net/q-10-4.mp3" },
                      ],
                    },
                    correct: { en: "the first attempt", hi: "पहली कोशिश" },
                  },
                ],
              },
              // lesson 4
              {
                lessonId: "lesson-4",
                questions: [
                  {
                    type: "mcq",
                    question: { en: "Do you remember your first day of school? What did it feel like?", hi: "क्या आपको अपने स्कूल के पहले दिन की याद है? वह कैसा लगा था?" },
                    options: {
                      en: [
                        { text: "Yay! I’ll meet new people…", audio: "https://d16ho1g3lqitul.cloudfront.net/q-11-1en.mp3" },
                        { text: "blah", audio: "https://d16ho1g3lqitul.cloudfront.net/q-11-2en.mp3" },
                        { text: "Oh no! New people…", audio: "https://d16ho1g3lqitul.cloudfront.net/q-11-3en.mp3" },
                        { text: "Umm… I wish I could sleep more…", audio: "https://d16ho1g3lqitul.cloudfront.net/q-11-4en.mp3" },
                      ],
                      hi: [
                        { text: "वाह! मैं नए लोगों से मिलूंगा..." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-11-1.mp3"},
                        { text: "ब्लाह", audio: "https://d16ho1g3lqitul.cloudfront.net/q-11-2.mp3"},
                        { text: "ओह नहीं! नए लोग...", audio: "https://d16ho1g3lqitul.cloudfront.net/q-11-3.mp3" },
                        { text: "उम्म... काश मैं और सो पाता...", audio: "https://d16ho1g3lqitul.cloudfront.net/q-11-4.mp3" },
                      ],
                    },
                    correct: { en: "Yay! I’ll meet new people…",en: "blah", hi: "वाह! मैं नए लोगों से मिलूंगा...",hi: "ब्लाह" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What feelings would you associate with the first day of school?", hi: "स्कूल के पहले दिन से आप किन भावनाओं को जोड़ते हैं?" },
                    options: {
                      en: [
                        { text: "sad" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-12-1en.mp3"},
                        { text: "happy", audio: "https://d16ho1g3lqitul.cloudfront.net/q-12-2en.mp3" },
                        { text: "fearful", audio: "https://d16ho1g3lqitul.cloudfront.net/q-12-3en.mp3" },
                        { text: "angry", audio: "https://d16ho1g3lqitul.cloudfront.net/q-12-4en.mp3" },
                      ],
                      hi: [
                        { text: "दुखी" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-12-1.mp3"},
                        { text: "खुश", audio: "https://d16ho1g3lqitul.cloudfront.net/q-12-2.mp3" },
                        { text: "डरावना" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-12-3.mp3"},
                        { text: "गुस्सैल" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-12-4.mp3"},
                      ],
                    },
                    correct: { en: "sad", hi: "दुखी" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Have you ever been late to school?", hi: "क्या आप कभी स्कूल में देर से पहुंचे हैं?" },
                    options: {
                      en: [
                        { text: "no", audio: "https://d16ho1g3lqitul.cloudfront.net/q-13-1en.mp3" },
                        { text: "yes", audio: "https://d16ho1g3lqitul.cloudfront.net/q-13-2en.mp3" },
                        { text: "maybe", audio: "https://d16ho1g3lqitul.cloudfront.net/q-13-3en.mp3" },
                        { text: "I don't remember", audio: "https://d16ho1g3lqitul.cloudfront.net/q-13-4en.mp3" },
                      ],
                      hi: [
                        { text: "नहीं", audio: "https://d16ho1g3lqitul.cloudfront.net/q-13-1.mp3" },
                        { text: "हाँ", audio: "https://d16ho1g3lqitul.cloudfront.net/q-13-2.mp3" },
                        { text: "शायद" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-13-3.mp3"},
                        { text: "मुझे याद नहीं", audio: "https://d16ho1g3lqitul.cloudfront.net/q-13-4.mp3" },
                      ],
                    },
                    correct: { en: "no", hi: "नहीं" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What happens when you are late to school?", hi: "जब आप स्कूल में देर से पहुंचते हैं तो क्या होता है?" },
                    options: {
                      en: [
                        { text: "Nothing. I join the class and continue." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-14-1en.mp3"},
                        { text: "I get shouted at.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-14-2en.mp3" },
                        { text: "Other kids laugh at me.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-14-3en.mp3" },
                        { text: "Umm… Something else…", audio: "https://d16ho1g3lqitul.cloudfront.net/q-14-4en.mp3" },
                      ],
                      hi: [
                        { text: "कुछ नहीं। मैं कक्षा में शामिल होता हूँ और जारी रखता हूँ।" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-14-1.mp3"},
                        { text: "मुझे डांट पड़ती है।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-14-2.mp3" },
                        { text: "दूसरे बच्चे मुझ पर हंसते हैं।" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-14-3.mp3"},
                        { text: "उम्म... कुछ और..." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-14-4.mp3"},
                      ],
                    },
                    correct: { en: "Nothing. I join the class and continue.", hi: "कुछ नहीं। मैं कक्षा में शामिल होता हूँ और जारी रखता हूँ।" },
                  },
                  {
                    type: "mcq",
                    question: { en: "How do you feel when you are late to school?", hi: "जब आप स्कूल में देर से पहुंचते हैं तो कैसा महसूस करते हैं?" },
                    options: {
                      en: [
                        { text: "angry", audio: "https://d16ho1g3lqitul.cloudfront.net/q-15-1en.mp3" },
                        { text: "fearful", audio: "https://d16ho1g3lqitul.cloudfront.net/q-15-2en.mp3" },
                        { text: "happy", audio: "https://d16ho1g3lqitul.cloudfront.net/q-15-3en.mp3" },
                        { text: "sad", audio: "https://d16ho1g3lqitul.cloudfront.net/q-15-4en.mp3" },
                      ],
                      hi: [
                        { text: "गुस्सा" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-15-1.mp3"},
                        { text: "डर", audio: "https://d16ho1g3lqitul.cloudfront.net/q-15-2.mp3" },
                        { text: "खुश" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-15-3.mp3"},
                        { text: "दुखी", audio: "https://d16ho1g3lqitul.cloudfront.net/q-15-4.mp3" },
                      ],
                    },
                    correct: { en: "angry", hi: "गुस्सा" },
                  },
                  
                ],
              },
              //lesson 5
              {
                lessonId: "lesson-5",
                questions: [
                  {
                    type: "mcq",
                    question: { en: "Why do you go to school?", hi: "आप स्कूल क्यों जाते हैं?" },
                    options: {
                      en: [
                        { text: "to read!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-16-1en.mp3" },
                        { text: "To play", audio: "https://d16ho1g3lqitul.cloudfront.net/q-16-2en.mp3" },
                        { text: "To get out of the house.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-16-3en.mp3" },
                        { text: "To get an education that will help me realize my full potential.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-16-4en.mp3" },
                      ],
                      hi: [
                        { text: "पढ़ाई!" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-16-1.mp3"},
                        { text: "खेलना", audio: "https://d16ho1g3lqitul.cloudfront.net/q-16-2.mp3" },
                        { text: "घर से बाहर निकलना।" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-16-3.mp3"},
                        { text: "ऐसी शिक्षा प्राप्त करना जो मेरी पूरी क्षमता को साकार करे।" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-16-4.mp3"},
                      ],
                    },
                    correct: { en: "to read!", hi: "पढ़ाई" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What do you look forward to on the first day of school?", hi: "स्कूल के पहले दिन आप किस बात की प्रतीक्षा करते हैं?" },
                    options: {
                      en: [
                        { text: "Making new friends" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-1en.mp3"},
                        { text: "Meeting old friends", audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-2en.mp3" },
                        { text: "Learning" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-3en.mp3"},
                        { text: "teachers" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-4en.mp3"},
                        { text: "playing" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-5en.mp3"},
                        { text: "none of the above" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-6en.mp3"},
                      ],
                      hi: [
                        { text: "नए दोस्त बनाना" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-1.mp3"},
                        { text: "पुराने दोस्तों से मिलना", audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-2.mp3"},
                        { text: "सीखना" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-3.mp3"},
                        { text: "शिक्षक" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-4.mp3"},
                        { text: "खेलना" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-5.mp3"},
                        { text: "उपरोक्त में से कोई नहीं" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-17-6.mp3"},
                      ],
                    },
                    correct: { en: "Making new friends", hi: "नए दोस्त बनाना" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What feelings would you associate with the first day of school?", hi: "स्कूल के पहले दिन से आप किन भावनाओं को जोड़ते हैं?" },
                    options: {
                      en: [
                        { text: "Excited" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-1en.mp3"},
                        { text: "Disgusted", audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-2en.mp3" },
                        { text: "Angry" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-3en.mp3"},
                        { text: "Happy" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-4en.mp3"},
                        { text: "Fearful" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-5en.mp3"},
                        { text: "Sad" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-6en.mp3"},


                      ],
                      hi: [
                        { text: "उत्साहित" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-1.mp3"},
                        { text: "घृणास्पद", audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-2.mp3"},
                        { text: "गुस्सा" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-3.mp3"},
                        { text: "खुश" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-4.mp3"},
                        { text: "डरावना" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-5.mp3"},
                        { text: "दुखी" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-18-6.mp3"},
                      ],
                    },
                    correct: { en: "Excited", hi: "उत्साहित" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Are you afraid of anything at school?", hi: "क्या आपको स्कूल में किसी चीज से डर लगता है?" },
                    options: {
                      en: [
                        { text: "I don’t know" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-19-1en.mp3"},
                        { text: "Not at all!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-19-2en.mp3" },
                        { text: "Yes" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-19-3en.mp3"},
                        { text: "Maybe" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-19-4en.mp3"},
                      ],
                      hi: [
                        { text: "मुझे नहीं पता" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-19-1.mp3"},
                        { text: "बिल्कुल नहीं!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-19-2.mp3" },
                        { text: "हाँ" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-19-3.mp3"},
                        { text: "शायद", audio: "https://d16ho1g3lqitul.cloudfront.net/q-19-4.mp3" },
                      ],
                    },
                    correct: { en: "I don’t know", hi: "मुझे नहीं पता" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Who do you talk to about any of your fears?", hi: "अपने किसी डर के बारे में आप किससे बात करते हैं?" },
                    options: {
                      en: [
                        { text: "Parent / Grand Parent" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-1en.mp3"},
                        { text: "No one!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-2en.mp3" },
                        { text: "Others" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-3en.mp3"},
                        { text: "Friends" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-4en.mp3"},
                        { text: "Uncles/Aunts" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-5en.mp3"},
                        { text: "Teachers" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-6en.mp3"},

                      ],
                      hi: [
                        { text: "माता-पिता / दादा-दादी" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-1.mp3"},
                        { text: "कोई नहीं!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-2.mp3"},
                        { text: "अन्य" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-3.mp3"},
                        { text: "दोस्त" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-4.mp3"},
                        { text: "चाचा/चाची" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-5.mp3"},
                        { text: "शिक्षक" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-20-6.mp3"},
                      ],
                    },
                    correct: { en: "Parent / Grand Parent", hi: "माता-पिता / दादा-दादी" },
                  },
                  
                ],
              },
              // lesson 6
              {
                lessonId: "lesson-6",
                questions: [
                  {
                    type: "mcq",
                    question: { en: "What questions would you like to ask your friends at school?", hi: "आप अपने स्कूल के दोस्तों से कौन से सवाल पूछना चाहेंगे?" },
                    options: {
                      en: [
                        { text: "Did you do anything exciting outside of school?" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-21-1en.mp3"},
                        { text: "Have you read any cool books or seen any good movies lately?", audio: "https://d16ho1g3lqitul.cloudfront.net/q-21-2en.mp3" },
                        { text: "What's your favourite thing about being in school?" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-21-3en.mp3"},
                        { text: "What's your favourite game to play?" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-21-4en.mp3"},
                      ],
                      hi: [
                        { text: "क्या आपने स्कूल के बाहर कुछ रोमांचक किया?" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-21-1.mp3"},
                        { text: "क्या आपने हाल ही में कोई मजेदार किताब पढ़ी या कोई अच्छी फिल्म देखी?", audio: "https://d16ho1g3lqitul.cloudfront.net/q-21-2.mp3"},
                        { text: "स्कूल में रहने के बारे में आपकी पसंदीदा चीज क्या है?" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-21-3.mp3"},
                        { text: "खेलने का आपका पसंदीदा खेल क्या है?" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-21-4.mp3"},
                      ],
                    },
                    correct: { en: "Did you do anything exciting outside of school?", hi: "क्या आपने स्कूल के बाहर कुछ रोमांचक किया?" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What do you want to know about your teacher? What questions will you ask them?", hi: "आप अपने शिक्षक के बारे में क्या जानना चाहते हैं? आप उनसे कौन से सवाल पूछेंगे?" },
                    options: {
                      en: [
                        { text: "Do you have any favourite books or stories?" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-22-1en.mp3"},
                        { text: "What will we learn this year?", audio: "https://d16ho1g3lqitul.cloudfront.net/q-22-2en.mp3"},
                        { text: "How can I do well in your class?", audio: "https://d16ho1g3lqitul.cloudfront.net/q-22-3en.mp3" },
                        { text: "What's your favourite subject to teach?", audio: "https://d16ho1g3lqitul.cloudfront.net/q-22-4en.mp3" },
                        
                      ],
                      hi: [
                        { text: "क्या आपकी कोई पसंदीदा किताबें या कहानियाँ हैं?" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-22-1.mp3"},
                        { text: "इस साल हम क्या सीखेंगे?", audio: "https://d16ho1g3lqitul.cloudfront.net/q-22-2.mp3"},
                        { text: "मैं आपकी कक्षा में अच्छा कैसे कर सकता हूँ?", audio: "https://d16ho1g3lqitul.cloudfront.net/q-22-3.mp3" },
                        { text: "आपका पसंदीदा पढ़ाने का विषय कौन सा है?" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-22-4.mp3"},
                      ],
                    },
                    correct: { en: "Do you have any favourite books or stories?", hi: "क्या आपकी कोई पसंदीदा किताबें या कहानियाँ हैं?" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What do you like about your favorite teacher?", hi: "आपको अपने पसंदीदा शिक्षक में क्या पसंद है?" },
                    options: {
                      en: [
                        { text: "Kindness and Patience" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-23-1en.mp3"},
                        { text: "Encouragement and Support", audio: "https://d16ho1g3lqitul.cloudfront.net/q-23-2en.mp3" },
                        { text: "Engaging Teaching Style", audio: "https://d16ho1g3lqitul.cloudfront.net/q-23-3en.mp3" },
                        { text: "Sense of Humor", audio: "https://d16ho1g3lqitul.cloudfront.net/q-23-4en.mp3" },
                       


                      ],
                      hi: [
                        { text: "दया और धैर्य" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-23-1.mp3"},
                        { text: "प्रोत्साहन और समर्थन", audio: "https://d16ho1g3lqitul.cloudfront.net/q-23-2.mp3"},
                        { text: "रोमांचक शिक्षण शैली" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-23-3.mp3"},
                        { text: "हास्य की भावना" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-23-4.mp3"},
                      ],
                    },
                    correct: { en: "Kindness and Patience", hi: "दया और धैर्य" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Do you feel a sense of freedom in your classroom?", hi: "क्या आपको अपनी कक्षा में स्वतंत्रता का अहसास होता है?" },
                    options: {
                      en: [
                        { text: "I don’t know" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-24-1en.mp3"},
                        { text: "Yes", audio: "https://d16ho1g3lqitul.cloudfront.net/q-24-2en.mp3" },
                        { text: "Sometimes", audio: "https://d16ho1g3lqitul.cloudfront.net/q-24-3en.mp3" },
                        { text: "No", audio: "https://d16ho1g3lqitul.cloudfront.net/q-23-4en.mp3" },
                      ],
                      hi: [
                        { text: "मुझे नहीं पता" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-24-1.mp3"},
                        { text: "हाँ", audio: "https://d16ho1g3lqitul.cloudfront.net/q-24-2.mp3"},
                        { text: "कभी-कभी" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-24-3.mp3"},
                        { text: "नहीं" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-24-4.mp3"},
                      ],
                    },
                    correct: { en: "I don’t know", hi: "मुझे नहीं पता" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What would make you feel free in your classroom?", hi: "क्या चीज आपको कक्षा में स्वतंत्र महसूस कराएगी?" },
                    options: {
                      en: [
                        { text: "I wish there were more kids in my class" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-25-1en.mp3"},
                        { text: "I wish there were fewer kids in my class.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-25-3en.mp3" },
                        { text: "I wish my teachers were less strict" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-25-3en.mp3"},
                        { text: "I wish we didn’t have marks or exams." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-25-4en.mp3"},
                        

                      ],
                      hi: [
                        { text: "काश मेरी कक्षा में अधिक बच्चे होते" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-25-1.mp3"},
                        { text: "काश मेरी कक्षा में कम बच्चे होते।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-25-2.mp3" },
                        { text: "काश मेरे शिक्षक कम सख्त होते" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-25-3.mp3"},
                        { text: "काश हमारे पास अंक या परीक्षा न होती।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-25-4.mp3" },
                      ],
                    },
                    correct: { en: "I wish there were more kids in my class", hi: "काश मेरी कक्षा में अधिक बच्चे होते" },
                  },
                  
                ],
              },
              // lesson 7
              {
                lessonId: "lesson-7",
                questions: [
                  {
                    type: "mcq",
                    question: { en: "What do you think you’re good at in school?", hi: "आपको स्कूल में किस चीज में अच्छा लगता है?" },
                    options: {
                      en: [
                        { text: "Reading" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-26-1en.mp3"},
                        { text: "Art and Creativity", audio: "https://d16ho1g3lqitul.cloudfront.net/q-26-2en.mp3" },
                        { text: "Science" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-26-3en.mp3"},
                        { text: "Maths" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-26-4en.mp3"},
                      ],
                      hi: [
                        { text: "पढ़ाई" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-26-1.mp3"},
                        { text: "कला और रचनात्मकता", audio: "https://d16ho1g3lqitul.cloudfront.net/q-26-2.mp3" },
                        { text: "विज्ञान" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-26-3.mp3"},
                        { text: "गणित" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-26-4.mp3"},
                      ],
                    },
                    correct: { en: "Reading", hi: "पढ़ाई" },
                  },
                  {
                    type: "mcq",
                    question: { en: "How many friends have you made in school?", hi: "आपने स्कूल में कितने दोस्त बनाए हैं?" },
                    options: {
                      en: [
                        { text: "None" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-27-1en.mp3"},
                        { text: "Many", audio: "https://d16ho1g3lqitul.cloudfront.net/q-27-2en.mp3" },
                        { text: "Few good friends", audio: "https://d16ho1g3lqitul.cloudfront.net/q-27-3en.mp3" },
                        { text: "I feel like I’m alone", audio: "https://d16ho1g3lqitul.cloudfront.net/q-27-4en.mp3" },
                        
                      ],
                      hi: [
                        { text: "कोई नहीं" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-27-1.mp3"},
                        { text: "कई", audio: "https://d16ho1g3lqitul.cloudfront.net/q-27-2.mp3"},
                        { text: "कुछ अच्छे दोस्त" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-27-3.mp3"},
                        { text: "मुझे लगता है कि मैं अकेला हूँ" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-27-4.mp3"},
                      ],
                    },
                    correct: { en: "None", hi: "कोई नहीं" },
                  },
                  {
                    type: "mcq",
                    question: { en: "When do you know you have made a friend?", hi: "आपको कब पता चलता है कि आपने एक दोस्त बना लिया है?" },
                    options: {
                      en: [
                        { text: "None of the above" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-1en.mp3"},
                        { text: "When we like the same things!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-2en.mp3" },
                        { text: "When we fight a lot…" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-3en.mp3"},
                        { text: "When we spend time together" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-4en.mp3"},
                        { text: "When we are good to each other." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-5en.mp3"},
                        { text: "When we defend and stand up for each other." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-6en.mp3"},


                      ],
                      hi: [
                        { text: "उपरोक्त में से कोई नहीं" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-1.mp3"},
                        { text: "जब हम एक जैसी चीजें पसंद करते हैं!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-2.mp3" },
                        { text: "जब हम बहुत लड़ते हैं…" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-3.mp3"},
                        { text: "जब हम एक साथ समय बिताते हैं" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-4.mp3"},
                        { text: "जब हम एक-दूसरे के प्रति अच्छे होते हैं।" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-5.mp3"},
                        { text: "जब हम एक-दूसरे का बचाव और समर्थन करते हैं।" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-28-6.mp3"},
                      ],
                    },
                    correct: { en: "None of the above", hi: "उपरोक्त में से कोई नहीं" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Do you make new friends easily?", hi: "क्या आप आसानी से नए दोस्त बना लेते हैं?" },
                    options: {
                      en: [
                        
                        { text: "Yes", audio: "https://d16ho1g3lqitul.cloudfront.net/q-29-1en.mp3" },
                     
                        { text: "No" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-29-2en.mp3"},
                      ],
                      hi: [
                        { text: "हाँ", audio: "https://d16ho1g3lqitul.cloudfront.net/q-29-1.mp3" },
                        { text: "नहीं" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-29-2.mp3"},
                      ],
                    },
                    correct: { en: "Yes", hi: "हाँ" },
                  },
                  {
                    type: "mcq",
                    question: { en: "How do you feel about making new friends?", hi: "नए दोस्त बनाने के बारे में आप कैसा महसूस करते हैं?" },
                    options: {
                      en: [
                        { text: "Happy" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-1en.mp3"},
                        { text: "Excited", audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-2en.mp3" },
                        { text: "Angry" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-3en.mp3"},
                        { text: "Fearful" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-4en.mp3"},
                        { text: "Sad" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-5en.mp3"},
                        { text: "Disgusted" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-6en.mp3"},
                        

                      ],
                      hi: [
                        { text: "खुश" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-1.mp3"},
                        { text: "उत्साहित", audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-2.mp3"},
                        { text: "गुस्सा", audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-3.mp3" },
                        { text: "डर" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-4.mp3"},
                        { text: "दुखी" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-5.mp3"},
                        { text: "घृणास्पद" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-30-6.mp3"},
                      ],
                    },
                    correct: { en: "Happy", hi: "खुश" },
                  },

                  {
                    type: "mcq",
                    question: { en: "How can you go about making new friends?", hi: "आप नए दोस्त कैसे बना सकते हैं?" },
                    options: {
                      en: [
                        { text: "Invite them to play any sports or games" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-1en.mp3"},
                        { text: "Ask them questions about their favorite things.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-2en.mp3" },
                        { text: "Ask them what they do for fun!" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-3en.mp3"},
                        { text: "Introduce yourself and ask them their name." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-4en.mp3"},
                        { text: "Ask if they have read any cool books lately." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-5en.mp3"},
                        
                        

                      ],
                      hi: [
                        { text: "उन्हें खेल या किसी खेल में शामिल होने के लिए आमंत्रित करें" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-1.mp3"},
                        { text: "उनसे उनके पसंदीदा चीजों के बारे में पूछें।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-2.mp3"},
                        { text: "उनसे पूछें कि वे मजे के लिए क्या करते हैं!" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-3.mp3"},
                        { text: "अपना परिचय दें और उनका नाम पूछें।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-4.mp3" },
                        { text: "उनसे पूछें कि क्या उन्होंने हाल ही में कोई मजेदार किताब पढ़ी है।" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-31-5.mp3"},
                      ],
                    },
                    correct: { en: "Invite them to play any sports or games", hi: "उन्हें खेल या किसी खेल में शामिल होने के लिए आमंत्रित करें" },
                  },
                  
                ],
              },
              // lesson 8
              {
                lessonId: "lesson-8",
                questions: [
                  {
                    type: "mcq",
                    question: { en: "Do you notice boxes in your life?", hi: "क्या आप अपने जीवन में बक्सों को देखते हैं?" },
                    options: {
                      en: [
                        { text: "None", audio: "https://d16ho1g3lqitul.cloudfront.net/q-32-1en.mp3" },
                        { text: "Yes many!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-32-2en.mp3" },
                        { text: "Everything is a box!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-32-3en.mp3" },
                        { text: "A few maybe", audio: "https://d16ho1g3lqitul.cloudfront.net/q-32-4en.mp3" },
                      ],
                      hi: [
                        { text: "कोई नहीं" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-32-1.mp3"},
                        { text: "हाँ, कई!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-32-2.mp3"},
                        { text: "सब कुछ एक डिब्बा है!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-32-3.mp3" },
                        { text: "शायद कुछ" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-32-4.mp3"},
                      ],
                    },
                    correct: { en: "None", hi: "कोई नहीं" },
                  },
                  {
                    type: "mcq",
                    question: { en: "Have you been out in nature in the last three months?", hi: "क्या आप पिछले तीन महीनों में प्रकृति में बाहर गए हैं?" },
                    options: {
                      en: [
                        { text: "Yes" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-33-1en.mp3"},
                        { text: "No", audio: "https://d16ho1g3lqitul.cloudfront.net/q-33-2en.mp3" },
                        
                        
                      ],
                      hi: [
                        { text: "हाँ" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-33-1.mp3"},
                        { text: "नहीं", audio: "https://d16ho1g3lqitul.cloudfront.net/q-33-2.mp3"},
                      ],
                    },
                    correct: { en: "Yes", hi: "हाँ" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What does it feel like when are out in nature?", hi: "प्रकृति में बाहर होने पर कैसा महसूस होता है?" },
                    options: {
                      en: [
                        { text: "Happy" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-1en.mp3"},
                        { text: "Angry", audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-2en.mp3" },
                        { text: "Sad" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-3en.mp3"},
                        { text: "Fearful" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-4en.mp3"},
                        { text: "Disgusted" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-5en.mp3"},
                        { text: "Excited" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-6en.mp3"},


                      ],
                      hi: [
                        { text: "खुश" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-1.mp3"},
                        { text: "गुस्सा", audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-2.mp3"},
                        { text: "दुखी" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-3.mp3"},
                        { text: "डर" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-4.mp3"},
                        { text: "घृणास्पद" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-5.mp3"},
                        { text: "उत्साहित" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-34-6.mp3"},
                      ],
                    },
                    correct: { en: "Happy", hi: "खुश" },
                  },
                  {
                    type: "mcq",
                    question: { en: "How could you ask an adult to take you out into nature?", hi: "आप एक वयस्क से प्रकृति में बाहर ले जाने के लिए कैसे कह सकते हैं?" },
                    options: {
                      en: [
                        
                        { text: "Just ask nicely.", audio: "https://d16ho1g3lqitul.cloudfront.net/q-35-1en.mp3" },
                        { text: "Suggest activities like hiking or a picnic", audio: "https://d16ho1g3lqitul.cloudfront.net/q-35-2en.mp3" },
                        { text: "Express interest about wanting to go into nature." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-35-3en.mp3"},
                        { text: "Demand it!" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-35-4en.mp3"},
                      ],
                      hi: [
                        { text: "बस विनम्रता से पूछें।", audio: "https://d16ho1g3lqitul.cloudfront.net/q-35-1.mp3" },
                        { text: "हाइकिंग या पिकनिक जैसी गतिविधियों का सुझाव दें" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-35-2.mp3"},
                        { text: "प्रकृति में जाने की इच्छा प्रकट करें।" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-35-3.mp3"},
                      ],
                    },
                    correct: { en: "Just ask nicely.", hi: "बस विनम्रता से पूछें।" },
                  },
                  {
                    type: "mcq",
                    question: { en: "What are some things you can do to feel alive and energized when you’re not in nature?", hi: "जब आप प्रकृति में नहीं होते हैं, तो जीवंत और ऊर्जावान महसूस करने के लिए आप क्या कर सकते हैं?" },
                    options: {
                      en: [
                        { text: "Play Games" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-1en.mp3"},
                        { text: "Make Art and Be Creative", audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-2en.mp3" },
                        { text: "Read Books" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-3en.mp3"},
                        { text: "Learn Something New" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-4en.mp3"},
                        { text: "Connect with Friends" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-5en.mp3"},
                        { text: "None of the above" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-6en.mp3"},
                        

                      ],
                      hi: [
                        { text: "खेल खेलें" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-1.mp3"},
                        { text: "कला बनाएं और रचनात्मक बनें", audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-2.mp3"},
                        { text: "किताबें पढ़ें" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-3.mp3"},
                        { text: "कुछ नया सीखें" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-4.mp3"},
                        { text: "दोस्तों के साथ जुड़ें" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-5.mp3"},
                        { text: "उपरोक्त में से कोई नहीं" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-36-6.mp3"},
                      ],
                    },
                    correct: { en: "Play Games", hi: "खेल खेलें" },
                  },

                  {
                    type: "mcq",
                    question: { en: "What feelings are associated with Sochu stories?", hi: "सोचू की कहानियों से कौन सी भावनाएँ जुड़ी होती हैं?" },
                    options: {
                      en: [
                        { text: "I didn’t like it." , audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-1en.mp3"},
                        { text: "Umm, they’re nice…", audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-2en.mp3"},
                        { text: "None of the above!" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-3en.mp3"},
                        { text: "Ah! I love, love, love Sochu stories!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-4en.mp3" },
                        { text: "I really like Sochu stories. They are different!" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-5en.mp3"},
                        
                        

                      ],
                      hi: [
                        { text: "मुझे यह पसंद नहीं आया।" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-1.mp3"},
                        { text: "उम्म, वे अच्छे हैं…", audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-2.mp3"},
                        { text: "उपरोक्त में से कोई नहीं!" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-3.mp3"},
                        { text: "आह! मुझे सोचू कहानियाँ बहुत पसंद हैं!" , audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-4.mp3"},
                        { text: "मुझे सोचू कहानियाँ बहुत अच्छी लगती हैं। वे अलग हैं!", audio: "https://d16ho1g3lqitul.cloudfront.net/q-37-5.mp3" },
                      ],
                    },
                    correct: { en: "I didn’t like it.", hi: "मुझे यह पसंद नहीं आया।" },
                  },
                  
                ],
              },
            ],
          },
          // unit 2
          // {
          //   title: {
          //     en: "Unit 2: Awareness and Breath",
          //     hi: "यूनिट 2: जागरूकता और सांस",
          //   },
          //   subtitle: {
          //     en: "Learn to observe yourself",
          //     hi: "अपने आप को देखना सीखें",
          //   },
          //   image: "https://d16ho1g3lqitul.cloudfront.net/unit2.svg",
          //   steps: 3,
          //   lessons: [
          //     {
          //       lessonId: "lesson-1",
          //       questions: [
          //         {
          //           type: "mcq",
          //           question: { en: "What is 10 + 5?", hi: "10 + 5 कितना होता है?" },
          //           options: {
          //             en: [
          //               { text: "14" },
          //               { text: "15" },
          //               { text: "16", image: "https://example.com/16.jpg" },
          //             ],
          //             hi: [
          //               { text: "14" },
          //               { text: "15" },
          //               { text: "16" },
          //             ],
          //           },
          //           correct: { en: "15", hi: "15" },
          //         },
          //         {
          //           type: "mcq",
          //           question: { en: "Leaf color?", hi: "पत्ते का रंग क्या है?" },
          //           options: {
          //             en: [
          //               { text: "Red" },
          //               { text: "Green", audio: "https://example.com/green.mp3" },
          //             ],
          //             hi: [
          //               { text: "लाल" },
          //               { text: "हरा" },
          //             ],
          //           },
          //           correct: { en: "Green", hi: "हरा" },
          //         },
          //       ],
          //     },
          //     {
          //       lessonId: "lesson-2",
          //       questions: [
          //         {
          //           type: "match-the-pair",
          //           question: { en: "Moon 🌙", hi: "चाँद 🌙" },
          //           options: {
          //             en: [
          //               { text: "Night", image: "https://example.com/night.jpg" },
          //               { text: "Day" },
          //             ],
          //             hi: [
          //               { text: "रात" },
          //               { text: "दिन" },
          //             ],
          //           },
          //           correct: { en: "Night", hi: "रात" },
          //         },
          //         {
          //           type: "mcq",
          //           question: { en: "What is 7 + 2?", hi: "7 + 2 कितना होता है?" },
          //           options: {
          //             en: [
          //               { text: "8" },
          //               { text: "9" },
          //               { text: "10" },
          //             ],
          //             hi: [
          //               { text: "8" },
          //               { text: "9" },
          //               { text: "10" },
          //             ],
          //           },
          //           correct: { en: "9", hi: "9" },
          //         },
          //       ],
          //     },
          //     {
          //       lessonId: "lesson-3",
          //       questions: [
          //         {
          //           type: "book",
          //           pages: {
          //             en: [
          //               "https://d16ho1g3lqitul.cloudfront.net/page3.jpg",
          //               "https://d16ho1g3lqitul.cloudfront.net/page4.jpg",
          //             ],
          //             hi: [
          //               "https://d16ho1g3lqitul.cloudfront.net/page3-hi.jpg",
          //               "https://d16ho1g3lqitul.cloudfront.net/page4-hi.jpg",
          //             ],
          //           },
          //         },
          //         {
          //           type: "read-aloud",
          //           question: {
          //             en: "Mindful breathing calms the mind and body.",
          //             hi: "सचेत सांस लेना मन और शरीर को शांत करता है।",
          //           },
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
      },
    ];

    await Series.insertMany(seriesData);
    console.log("✅ Series seeded");

    const broadcastData = [
      {
        name: "Sochu - Pune",
        slug: "sochu-pune",
        description: "Pune users ke liye special updates and inspiration",
        posts: [
          {
            title: "🌄 Good Morning Pune!",
            content: "Aaj ka mantra: Breathe deeply and stay calm 🙏",
            images: [
              "http://localhost:3001/uploads/pune-morning1.jpg",
              "http://localhost:3001/uploads/pune-morning2.jpg",
            ],
          },
          {
            title: "🧘 Soothing Sound",
            content: "Try our 3-minute breathing session today!",
            images: [
              "http://localhost:3001/uploads/soothing-sound1.jpg",
              "http://localhost:3001/uploads/soothing-sound2.jpg",
            ],
          },
        ],
      },
      {
        name: "Sochu - Mumbai",
        slug: "sochu-mumbai",
        description: "Mumbai users ke liye special updates and inspiration",
        posts: [
          {
            title: "🌅 Good Morning Mumbai!",
            content: "Stay positive and spread joy 😇",
            images: [
              "http://localhost:3001/uploads/mumbai-morning1.jpg",
              "http://localhost:3001/uploads/mumbai-morning2.jpg",
            ],
          },
          {
            title: "🌊 Beach Meditation",
            content: "Relax your mind by the serene waves of Mumbai.",
            images: [
              "http://localhost:3001/uploads/beach-meditation1.jpg",
              "http://localhost:3001/uploads/beach-meditation2.jpg",
            ],
          },
        ],
      },
    ];

    await Broadcast.insertMany(broadcastData);
    console.log("✅ Broadcast seeded");
    mongoose.disconnect();
  });
