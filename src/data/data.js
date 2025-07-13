// import comingsoon from '../assets/projects/coming_soon.png'
import sort from '../assets/projects/sort.gif'
import julia from '../assets/projects/julia_set.bmp'
import reminder from '../assets/projects/academic_reminder.png'

export const data = [
    {
        id: 1,
        name: "Sorting Visuarizer",
        image: sort,
        github: "https://github.com/juliaishibashi/sorting-visualization",
        description: "This is a sorting algorithm visualizer built with Python and Pygame. It allows users to interactively visualize how different sorting algorithms work, step by step, using colored blocks and animations.",

    },
    {
        id: 2,
        name: "Julia sets in Julia",
        image: julia,
        github: "https://github.com/juliaishibashi/julia-juliaset",
        description: "In math class, I learned about the Mandelbrot set and soon discovered the Julia set. Since my name is Julia, I built this Julia Set visualizer using the Julia programming language.",

    },
    // {
    //     id: 3,
    //     name: "Maze Game",
    //     image: comingsoon,
    //     github: "https://github.com/juliaishibashi/cpp-maze",
    //     description: "A personal website to showcase my work and skills. Built with React and Tailwind CSS.",

    // },
    {
        id: 4,
        name: "Academic Reminder",
        image: reminder,
        github: "https://github.com/juliaishibashi/academic-reminder",
        description: "I independently implemented an app that I had prototyped during a class project. It’s a deadline management app focused on academics, with a key feature that allows multiple reminders for a single task.",

    },
]