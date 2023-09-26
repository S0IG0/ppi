import grpc
from concurrent import futures

from proto import task_list_pb2, task_list_pb2_grpc

PORT = 50051


class TaskListServicer(task_list_pb2_grpc.TaskListServiceServicer):
    def __init__(self):
        self.tasks = []  # Пример хранения задач в памяти

    def CreateTask(self, request, context):
        # Реализация создания задачи
        task_id = len(self.tasks) + 1
        task = task_list_pb2.Task(id=task_id, title=request.title, description=request.description)
        self.tasks.append(task)
        return task

    def UpdateTask(self, request, context):
        # Реализация обновления задачи
        for task in self.tasks:
            if task.id == request.task_id:
                task.title = request.title
                task.description = request.description
                return task
        context.set_code(grpc.StatusCode.NOT_FOUND)
        context.set_details("Задача не найдена.")
        return task_list_pb2.Task()

    def ListTasks(self, request, context):
        # Реализация просмотра списка задач
        return task_list_pb2.TaskListResponse(tasks=self.tasks)

    def DeleteTask(self, request, context):
        # Реализация удаления задачи
        for task in self.tasks:
            if task.id == request.task_id:
                self.tasks.remove(task)
                return task
        context.set_code(grpc.StatusCode.NOT_FOUND)
        context.set_details("Задача не найдена.")
        return task_list_pb2.Task()


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    task_list_pb2_grpc.add_TaskListServiceServicer_to_server(TaskListServicer(), server)
    server.add_insecure_port(f'[::]:{PORT}')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    serve()
