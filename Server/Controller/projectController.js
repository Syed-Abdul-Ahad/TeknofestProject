const Projects = require('./../Model/projectModel')
const asyncErrorHandler = require('./../utils/asyncErrorHandler')



exports.getAllProjects= asyncErrorHandler( async (request,response)=>{



    // QueryString (filter) logic
    const excludeFields = ['sort','page','limit','fields']

    const queryObj = {...request.query}

    excludeFields.forEach((el)=>{
        delete queryObj[el]
    })

    let query =  Projects.find(queryObj)
    // logic end



    // SORTING LOGIC
    if(request.query.sort){
        const sortBy = request.query.sort.split(',').join(' ')
        query = query.sort(sortBy)
    }

    //SORTING LOGIC END



    // PAGINATION LOGIC

    const page = request.query.page*1 || 1;
    const limit = request.query.limit*1 || 10;

    const skip = (page-1)*limit
    query = query.skip(skip).limit(limit)

    if(request.query.page){
        const count = await Projects.countDocuments();
        if(skip>= count){
            throw new Error("This page is not found")
        }
    }
    // end of pagination




    const projects = await query;

    response.status(200).json({
        status:"success",
        length: projects.length,
        Data:{
            projects
        }
    })

})



exports.AddProject = asyncErrorHandler( async (request,response,next)=>{

        const project = await Projects.create(request.body)

        response.status(201).json({
            status:"success",
            Data:{
                project
            }
        })
    
})

exports.getProject= asyncErrorHandler( async(request,response)=>{

        const project = await Projects.findById(request.params.id)
        response.status(200).json({
            status:"success",
            Data:{
                project
            }
        })

})



