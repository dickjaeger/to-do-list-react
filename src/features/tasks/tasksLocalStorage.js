export const setTasksInLocalStorage = tasks => 
    localStorage.setItem("tasks", JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => 
    JSON.parse(localStorage.getItem("tasks")) || [];