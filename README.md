# to-do-TOP
to do list using local storage for The Odin Project

# Based off Asana

## Objects and Arrays

### Projects
+ portfolio is an object that contains
    + Properties
        + projectsArray
    + Methods
        + addProject
        + display


+ projectsArray is an array that contains all project objects

+ project is an object that contains
    + Propteries
        + details object
        + isMinimized
        + sectionsArray
            + section object
                + taskArray
                    + task Object
    + Methods
        + addSection
        + addTask
        + deleteProject
        + display

+ details is an object that contains
    + Properties
        + title
        + description
        + color
        + link
        + dateCreated
        + isMinimized
    + Methods 
        + editTitle
        + editDescription
        + editColor
        + editLink
        + editDetails
        + display

+ sectionsArray is an array that contains section objects
    + section is an object that contains
        + Properties
            + title
            + taskArray
        + Methods
            + editTitle
            + editIsMinimized
            + addTask
            + delete
            + display

+ taskArray is an array that contains task objects
    + task is an object that contains
        + Properties
            + belongsToSection
            + title
            + isComplete
        + Methods
            + editTitle
            + editBelongsToSection
            + editIsComplete
            + delete
            + display





    



