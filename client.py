import grpc

from proto import task_list_pb2, task_list_pb2_grpc


def create_task(stub, title, description):
    request = task_list_pb2.CreateTaskRequest(title=title, description=description)
    response = stub.CreateTask(request)
    print(f"Создана задача: {response.id}, {response.title}, {response.description}")


def update_task(stub, task_id, title, description):
    request = task_list_pb2.UpdateTaskRequest(task_id=task_id, title=title, description=description)
    response = stub.UpdateTask(request)
    if response.id:
        print(f"Задача обновлена: {response.id}, {response.title}, {response.description}")
    else:
        print("Задача не найдена.")


def list_tasks(stub):
    request = task_list_pb2.ListTasksRequest()
    response = stub.ListTasks(request)
    print("Список задач:")
    for task in response.tasks:
        print(f"{task.id}, {task.title}, {task.description}")


def delete_task(stub, task_id):
    request = task_list_pb2.DeleteTaskRequest(task_id=task_id)
    response = stub.DeleteTask(request)
    if response.id:
        print(f"Задача удалена: {response.id}, {response.title}, {response.description}")
    else:
        print("Задача не найдена.")


def main():
    channel = grpc.insecure_channel('localhost:80')  # Укажите адрес и порт вашего сервера
    stub = task_list_pb2_grpc.TaskListServiceStub(channel)
    #
    # # Пример использования функций
    create_task(stub, "Задача 1", "Описание задачи 1")
    create_task(stub, "Задача 2", "Описание задачи 2")
    create_task(stub, "Задача 3", "Описание задачи 3")
    create_task(stub, "Задача 4", "Описание задачи 4")
    # list_tasks(stub)
    # update_task(stub, 1, "Новое название задачи 1", "Новое описание задачи 1")
    # delete_task(stub, 2)
    list_tasks(stub)


if __name__ == '__main__':
    main()
