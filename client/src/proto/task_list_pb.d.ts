import * as jspb from 'google-protobuf'



export class CreateTaskRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CreateTaskRequest;

  getDescription(): string;
  setDescription(value: string): CreateTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskRequest): CreateTaskRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskRequest;
  static deserializeBinaryFromReader(message: CreateTaskRequest, reader: jspb.BinaryReader): CreateTaskRequest;
}

export namespace CreateTaskRequest {
  export type AsObject = {
    title: string,
    description: string,
  }
}

export class UpdateTaskRequest extends jspb.Message {
  getTaskId(): number;
  setTaskId(value: number): UpdateTaskRequest;

  getTitle(): string;
  setTitle(value: string): UpdateTaskRequest;

  getDescription(): string;
  setDescription(value: string): UpdateTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskRequest): UpdateTaskRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskRequest;
  static deserializeBinaryFromReader(message: UpdateTaskRequest, reader: jspb.BinaryReader): UpdateTaskRequest;
}

export namespace UpdateTaskRequest {
  export type AsObject = {
    taskId: number,
    title: string,
    description: string,
  }
}

export class ListTasksRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTasksRequest): ListTasksRequest.AsObject;
  static serializeBinaryToWriter(message: ListTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTasksRequest;
  static deserializeBinaryFromReader(message: ListTasksRequest, reader: jspb.BinaryReader): ListTasksRequest;
}

export namespace ListTasksRequest {
  export type AsObject = {
  }
}

export class Task extends jspb.Message {
  getId(): number;
  setId(value: number): Task;

  getTitle(): string;
  setTitle(value: string): Task;

  getDescription(): string;
  setDescription(value: string): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    id: number,
    title: string,
    description: string,
  }
}

export class TaskListResponse extends jspb.Message {
  getTasksList(): Array<Task>;
  setTasksList(value: Array<Task>): TaskListResponse;
  clearTasksList(): TaskListResponse;
  addTasks(value?: Task, index?: number): Task;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TaskListResponse): TaskListResponse.AsObject;
  static serializeBinaryToWriter(message: TaskListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskListResponse;
  static deserializeBinaryFromReader(message: TaskListResponse, reader: jspb.BinaryReader): TaskListResponse;
}

export namespace TaskListResponse {
  export type AsObject = {
    tasksList: Array<Task.AsObject>,
  }
}

export class DeleteTaskRequest extends jspb.Message {
  getTaskId(): number;
  setTaskId(value: number): DeleteTaskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
  static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
  export type AsObject = {
    taskId: number,
  }
}

