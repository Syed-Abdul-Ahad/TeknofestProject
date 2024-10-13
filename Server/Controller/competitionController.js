const Competition = require('./../Model/CompetitionModel')
const asyncErrorHandler = require('./../utils/asyncErrorHandler')




exports.getAllCompetitions= asyncErrorHandler( async (request,response)=>{



    // QueryString (filter) logic
    const excludeFields = ['sort','page','limit','fields']

    const queryObj = {...request.query}

    excludeFields.forEach((el)=>{
        delete queryObj[el]
    })

    let query =  Competition.find(queryObj)
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
        const count = await Competition.countDocuments();
        if(skip>= count){
            throw new Error("This page is not found")
        }
    }
    // end of pagination




    const competitions = await query;

    response.status(200).json({
        status:"success",
        length: competitions.length,
        Data:{
            competition: competitions
        }
    })

})



exports.AddCompetition = asyncErrorHandler( async (request,response,next)=>{

        const competitions = await Competition.create(request.body)

        response.status(201).json({
            status:"success",
            Data:{
                competitions:competitions
            }
        })
    
})

exports.getCompetition= asyncErrorHandler( async(request,response)=>{

        const competition = await Competition.findById(request.params.id)
        response.status(200).json({
            status:"success",
            length: competition.length,
            Data:{
                competition
            }
        })

})



