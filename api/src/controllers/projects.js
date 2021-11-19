const Project = require('../db/models/Project')


const controllerProject = {
    create: async (req, res) => {
        try{
            const {project_name,img,id_teacher,date_max_deliver,description,outcome,resources,context,pedagogical_modalities,performance_criteria,evaluation_modality,deliver,tags,cohorte} = req.body

            if(!project_name || !img || !id_teacher || !description || !context || !pedagogical_modalities || !performance_criteria || !evaluation_modality || !deliver || !cohorte )
                return res.status(400).json({msg: "Please fill in all fields."})
            
                const project = new Project({
                    project_name,
                    img,
                    id_teacher,
                    date_max_deliver,
                    description,
                    cohorte,
                    outcome,
                    resources,
                    context,
                    pedagogical_modalities,
                    performance_criteria,
                    evaluation_modality,
                    deliver,
                    tags
                    
                  })
                
                  const savedProject = await project.save()
                
                 res.json({msg: "Register success! project created "})
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getProjects: async (req, res) => {
        try {
            const projects = await Project.find({})

            res.json(projects)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getOneProject: async (req, res) => {
        try {
            const {id}=req.body
            const project = await Project.findById(id)
            
            res.json(project)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
    

module.exports = controllerProject