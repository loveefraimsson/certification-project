export default [
    {
        id: 1,
        title: "WorkOutDiary",
        content: "WorkoutDiary är en träningsdagbok där användaren kan lägga till övningar med information innehållande sets, reps och vikt. Användaren kan se sina övningar listade och även gå in och redigera eller ta bort en övning. Den är byggd i Visual Studio med C# och har sin databas i SQL. ",
        images: [
            ["workoutStartpageCode", "workoutStartpageResult"],
            ["workoutSingleCode", "workoutSingleResult"],
            ["workoutEditCode", "workoutEditResult"],
            ["workoutAddCode", "workoutAddResult"]
            
        ]
    },
    {
        id: 2,
        title: "Blogg med API",
        content: "Detta är ett projekt som är byggt med Swagger API och har sin databas i SQL. Detta är ett rent backend-projekt där en frontend kan läggas till vid senare tillfälle. I API:et kan man se skapade blogginlägg, söka och visa ett enskilt inlägg, samt skapa, redigera och radera inlägg.",
        images: [
            ["blogGetCode", "blogGetResult"],
            ["blogGetOneCode", "blogGetOneResult"],
            ["blogEditCode", "blogEditResult"],
            ["blogPostCode", "blogPostResult"],
            ["blogDeleteCode", "blogDeleteResult"]        
        ]
    },
    {
        id: 3,
        title: "Todo med API",
        content: "Detta projektet har en tillhörande backend-del som är byggd med Swagger API, men här har jag valt att visa frontenden. På startsidan kan man se sina todos och även vilken status de har, alltså om dom är gjorda eller inte. Här kan man även skapa en ny todo som då läggs till i listan. Klickar man in på en todo så kan man även redigera den eller ta bort den. Projektet är byggt med Vue.",
        images: [
            ["todoStartpageCode", "todoStartpageResult"],
            ["todoSingleCode", "todoSingleResult"]
        ]
    }
]