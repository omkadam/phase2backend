// models/Idea.js
import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true, 
    index: true 
  },
  text: { 
    type: String, 
    required: true,
    trim: true 
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  completedAt: { 
    type: Date, 
    default: null 
  }
});

// Create indexes for better performance
ideaSchema.index({ userId: 1, createdAt: -1 });
ideaSchema.index({ userId: 1, completed: 1 });

const Idea = mongoose.model('Idea', ideaSchema);

export default Idea;