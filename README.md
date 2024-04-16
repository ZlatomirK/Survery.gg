# Survery.gg

custom survey creation site with vite

/surverys/:customId: = builds a page with a survey out of a json file (contained in the DB) containing an object which contains the custom survey title and questions

in the database:
have one collection containing all the custom surveys and their data in the form of
{
\_id:..., ObjectId('...')
questions:[...],
surveyName:...,
owner:"userId" ObjectId('...')
}

then for each custom survey create a unique collection with its name which will collect the data from the use of the custom survey
{
question1:"answer",
question2:"answer",
...
}

TODO: setup server with firebase
