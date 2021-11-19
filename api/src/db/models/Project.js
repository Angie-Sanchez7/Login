const { Schema, model } = require('mongoose')

const projectSchema = new Schema({

  project_name:{
      type:String,
      require:true,
  },
  img:{
    type:String,
    require:true,
  }, 
  id_teacher: {
    type: String,
    require: true,    
},
  description: {
    type: String,
    require: true,
  },
  outcome: {
      outcome1:{
          type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
          default: 0

      },
      outcome2:{
        type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
        default: 0

    },
    outcome3:{
      type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
      default: 0

    },
    outcome4:{
      type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
      default: 0

    }, outcome5:{
      type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
      default: 0

    }, outcome6:{
      type: Number,  ////0=nada 1 = nivel1    2= nivel 2     3=nivel3   
      default: 0

    },
    
  },
  resources: {
    type: Array
  },
  
  context:{
    type: String,
    require: true,
  },
  pedagogical_modalities : {
    type: String,
    require: true,
  },
  performance_criteria : {
    type: String,
    require: true,
  },
  evaluation_modality : {
    type: String,
    require: true,
  },
  deliver:{
    type: String,
    require: true,
  },
  date_max_deliver:{
    type: Date,
  },

  tags: {
    type: Array
  },
  cohorte:{
    num:{
      type : Number,
    },
    name:{
      type : String,
    }

  },
  
},{    
  timestamps:true
});

projectSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Project = model('Project', projectSchema)

module.exports = Project