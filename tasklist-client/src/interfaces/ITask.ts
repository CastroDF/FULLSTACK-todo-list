export default interface ITask {
    title: string;
    isDone: boolean;
    id: string;
    getTasks: () => void;
}
