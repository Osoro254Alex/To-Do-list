
import Item from "./add"

const task = new Item("alex", false, 1)

describe("Check the description", ()=>{
  test("test", ()=>{
    expect(task.description).toBe("alex")
  })
})


// import { loadWeb } from "../module/main.js";


// describe("Adding to the webpage", ()=>{
//   test("submit microverse project", ()=>{
//     document.body.innerHTML = `<ul class="list-cont">
//     </ul>`;

//     const toDoList = document.querySelector(".list-cont");
//     const taskDesc = "submit microverse project";

//     Create.task(toDoList, taskDesc);
//     const taskItem = toDoList.querySelector("li");

//     expect(taskItem).toHaveLength(1);
//   })
// })