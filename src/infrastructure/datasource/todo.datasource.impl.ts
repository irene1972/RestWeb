import { prisma } from "../../data/postgres";
import { CreateTodoDto, TodoDatasource, TodoEntity, UpdateTodoDto } from "../../domain";

export class TodoDatasourceImpl implements TodoDatasource{
    create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        
    }

    async getAll(): Promise<TodoEntity[]> {
        const todos=await prisma.todo.findMany();
        return todos.map(todo=>TodoEntity.fromObject(todo));
    }

    findById(id: number): Promise<TodoEntity> {
        
    }

    updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        
    }

    deleteById(id: number): Promise<TodoEntity> {
        
    }
}