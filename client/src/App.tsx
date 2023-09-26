import React from 'react';
import {TaskListServiceClient} from "./proto/Task_listServiceClientPb";
import {CreateTaskRequest, ListTasksRequest} from "./proto/task_list_pb";

export const client = new TaskListServiceClient(
    "http://localhost:80",
);

function App() {
    const task = new CreateTaskRequest();
    task.setTitle("Тестоваое название")
    task.setDescription("Тестовое описание")
    const onClick = () => {
        // client.createTask(task, {}, (err, response) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(response)
        //     }
        // })
        client.listTasks(new ListTasksRequest(), {}, (err, response) => {
            console.log(err)
            console.log(response)
        })
    }
    return (
        <>
            <button
                onClick={onClick}
            >
                click
            </button>
        </>
    );
}

export default App;
