import mongoose from "mongoose";
import BedtimeStory from "./models/BedtimeStory.js"; // Adjust path as needed

// MongoDB connection
mongoose
  .connect("mongodb+srv://Karu13AWSec2:Karu13AWSec2@cluster0.h0fpy5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(async () => {
    console.log("✅ Connected to MongoDB for seeding bedtime stories!");

    // Clear existing bedtime stories
    await BedtimeStory.deleteMany({});
    console.log("🗑️  Cleared existing bedtime stories");

    const bedtimeStoriesData = [
      {
        storyId: "calming-noise-2021",
        storyName: {
          en: "Think Outside The Box",
          hi: "शांत आवाज़"
        },
        aboutStory: {
          en: "Peaceful sounds to help you drift off to sleep peacefully",
          hi: "शांतिपूर्ण आवाज़ें जो आपको शांति से सुलाने में मदद करती हैं"
        },
        storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP01.png",
        audioLink: {
          en: "https://d16ho1g3lqitul.cloudfront.net/book1bedtime_New01.mp3 ",
          hi: "https://d16ho1g3lqitul.cloudfront.net/calming-noise-hi.mp3"
        },
        duration: "11:20",
        year: 2025,
        category: {
          en: "Bedtime Stories",
          hi: "सोने की कहानियाँ"
        },
        isActive: true
      },
      {
        storyId: "binaural-beats-study-2020",
        storyName: {
          en: "When I Grow Up",
          hi: "अध्ययन के लिए बाइनॉरल बीट्स मन संगीत"
        },
        aboutStory: {
          en: "Special music designed to enhance focus and relaxation during study time",
          hi: "अध्ययन के समय फोकस और विश्राम बढ़ाने के लिए डिज़ाइन किया गया विशेष संगीत"
        },
        storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP02.png",
        audioLink: {
          en: "https://d16ho1g3lqitul.cloudfront.net/binaural-beats-en.mp3",
          hi: "https://d16ho1g3lqitul.cloudfront.net/binaural-beats-hi.mp3"
        },
        duration: "15:30",
        year: 2025,
        category: {
          en: "Bedtime Stories",
          hi: "सोने की कहानियाँ"
        },
        isActive: true
      },
    //   {
    //     storyId: "calm-kids-bedtime-2020",
    //     storyName: {
    //       en: "Be The Change You Wish To See",
    //       hi: "शांत बच्चों की सोने की कहानियाँ"
    //     },
    //     aboutStory: {
    //       en: "Gentle bedtime stories to help children fall asleep peacefully with wonderful characters",
    //       hi: "बच्चों को शांति से सुलाने के लिए कोमल सोने की कहानियाँ जिनमें अद्भुत किरदार हैं"
    //     },
    //     storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP03.png",
    //     audioLink: {
    //       en: "https://d16ho1g3lqitul.cloudfront.net/calm-kids-en.mp3",
    //       hi: "https://d16ho1g3lqitul.cloudfront.net/calm-kids-hi.mp3"
    //     },
    //     duration: "12:45",
    //     year: 2020,
    //     category: {
    //       en: "Bedtime Stories",
    //       hi: "सोने की कहानियाँ"
    //     },
    //     isActive: true
    //   },
    //   {
    //     storyId: "celtic-relaxation-2020",
    //     storyName: {
    //       en: "I Wonder What Makes People Fight",
    //       hi: "सेल्टिक विश्राम"
    //     },
    //     aboutStory: {
    //       en: "Soothing Celtic melodies for deep relaxation and peaceful sleep",
    //       hi: "गहरे विश्राम और शांतिपूर्ण नींद के लिए सुखदायक सेल्टिक धुन"
    //     },
    //     storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP04.png",
    //     audioLink: {
    //       en: "https://d16ho1g3lqitul.cloudfront.net/celtic-relaxation-en.mp3",
    //       hi: "https://d16ho1g3lqitul.cloudfront.net/celtic-relaxation-hi.mp3"
    //     },
    //     duration: "8:20",
    //     year: 2020,
    //     category: {
    //       en: "Bedtime Stories",
    //       hi: "सोने की कहानियाँ"
    //     },
    //     isActive: true
    //   },
    //   {
    //     storyId: "mindful-self-care-2020",
    //     storyName: {
    //       en: "Where Is God?",
    //       hi: "सावधान स्व-देखभाल"
    //     },
    //     aboutStory: {
    //       en: "Guided meditation for self-care and inner peace before sleep",
    //       hi: "नींद से पहले स्व-देखभाल और आंतरिक शांति के लिए निर्देशित ध्यान"
    //     },
    //     storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP05.png",
    //     audioLink: {
    //       en: "https://d16ho1g3lqitul.cloudfront.net/mindful-self-care-en.mp3",
    //       hi: "https://d16ho1g3lqitul.cloudfront.net/mindful-self-care-hi.mp3"
    //     },
    //     duration: "10:15",
    //     year: 2020,
    //     category: {
    //       en: "Bedtime Stories",
    //       hi: "सोने की कहानियाँ"
    //     },
    //     isActive: true
    //   },
    //   {
    //     storyId: "forest-sounds-nature-2021",
    //     storyName: {
    //       en: "The Dilemma Of Choice",
    //       hi: "जंगल की आवाज़ें और प्रकृति"
    //     },
    //     aboutStory: {
    //       en: "Natural forest sounds with birds chirping and gentle wind to calm your mind",
    //       hi: "पक्षियों के चहचहाने और हल्की हवा के साथ प्राकृतिक जंगल की आवाज़ें जो मन को शांत करती हैं"
    //     },
    //     storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP06.png",
    //     audioLink: {
    //       en: "https://d16ho1g3lqitul.cloudfront.net/forest-sounds-en.mp3",
    //       hi: "https://d16ho1g3lqitul.cloudfront.net/forest-sounds-hi.mp3"
    //     },
    //     duration: "18:30",
    //     year: 2021,
    //     category: {
    //       en: "Bedtime Stories",
    //       hi: "सोने की कहानियाँ"
    //     },
    //     isActive: true
    //   },
    //   {
    //     storyId: "gentle-rain-meditation-2021",
    //     storyName: {
    //       en: "The Secret To Success",
    //       hi: "कोमल बारिश का ध्यान"
    //     },
    //     aboutStory: {
    //       en: "Soft rain sounds combined with peaceful meditation to help you relax and sleep",
    //       hi: "मुलायम बारिश की आवाज़ें जो शांतिपूर्ण ध्यान के साथ मिलकर आपको आराम और नींद में मदद करती हैं"
    //     },
    //     storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP07.png",
    //     audioLink: {
    //       en: "https://d16ho1g3lqitul.cloudfront.net/gentle-rain-en.mp3",
    //       hi: "https://d16ho1g3lqitul.cloudfront.net/gentle-rain-hi.mp3"
    //     },
    //     duration: "22:15",
    //     year: 2021,
    //     category: {
    //       en: "Bedtime Stories",
    //       hi: "सोने की कहानियाँ"
    //     },
    //     isActive: true
    //   },
    //   {
    //     storyId: "ocean-waves-sleep-2020",
    //     storyName: {
    //       en: "Am I Cool Enough?",
    //       hi: "नींद के लिए समुद्री लहरें"
    //     },
    //     aboutStory: {
    //       en: "Rhythmic ocean waves that create a soothing environment for deep, restful sleep",
    //       hi: "लयबद्ध समुद्री लहरें जो गहरी, आरामदायक नींद के लिए एक शांत वातावरण बनाती हैं"
    //     },
    //     storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP08.png",
    //     audioLink: {
    //       en: "https://d16ho1g3lqitul.cloudfront.net/ocean-waves-en.mp3",
    //       hi: "https://d16ho1g3lqitul.cloudfront.net/ocean-waves-hi.mp3"
    //     },
    //     duration: "25:00",
    //     year: 2020,
    //     category: {
    //       en: "Bedtime Stories",
    //       hi: "सोने की कहानियाँ"
    //     },
    //     isActive: true
    //   },
    //   {
    //     storyId: "magical-fairytale-dreams-2021",
    //     storyName: {
    //       en: "The Joy Of Winning",
    //       hi: "जादुई परी कथा के सपने"
    //     },
    //     aboutStory: {
    //       en: "Enchanting fairytale stories with magical characters to inspire beautiful dreams",
    //       hi: "मनमोहक परी कथाएं जिनमें जादुई किरदार हैं जो खूबसूरत सपनों को प्रेरित करती हैं"
    //     },
    //     storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP09.png",
    //     audioLink: {
    //       en: "https://d16ho1g3lqitul.cloudfront.net/magical-fairytale-en.mp3",
    //       hi: "https://d16ho1g3lqitul.cloudfront.net/magical-fairytale-hi.mp3"
    //     },
    //     duration: "16:45",
    //     year: 2021,
    //     category: {
    //       en: "Bedtime Stories",
    //       hi: "सोने की कहानियाँ"
    //     },
    //     isActive: true
    //   },
    //   {
    //     storyId: "peaceful-lullabies-2020",
    //     storyName: {
    //       en: "The Friend In Need Is A Friend Indeed",
    //       hi: "शांतिपूर्ण लोरियाँ"
    //     },
    //     aboutStory: {
    //       en: "Soft, melodic lullabies that gently guide you into a peaceful slumber",
    //       hi: "मुलायम, मधुर लोरियाँ जो धीरे-धीरे आपको शांतिपूर्ण नींद में ले जाती हैं"
    //     },
    //     storyThumbnail: "https://d16ho1g3lqitul.cloudfront.net/EP10.png",
    //     audioLink: {
    //       en: "https://d16ho1g3lqitul.cloudfront.net/peaceful-lullabies-en.mp3",
    //       hi: "https://d16ho1g3lqitul.cloudfront.net/peaceful-lullabies-hi.mp3"
    //     },
    //     duration: "14:20",
    //     year: 2020,
    //     category: {
    //       en: "Bedtime Stories",
    //       hi: "सोने की कहानियाँ"
    //     },
    //     isActive: true
    //   }
    ];

    // Insert the bedtime stories data
    const insertedStories = await BedtimeStory.insertMany(bedtimeStoriesData);
    console.log(`✅ Successfully seeded ${insertedStories.length} bedtime stories!`);

    // Log the inserted stories
    console.log("\n📚 Inserted Bedtime Stories:");
    insertedStories.forEach((story, index) => {
      console.log(`${index + 1}. ${story.storyName.en} (${story.duration}) - ${story.year}`);
    });

    console.log("\n🎉 Bedtime stories seeding completed successfully!");
    
    // Close the connection
    mongoose.connection.close();
    process.exit(0);
  })
  .catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  });