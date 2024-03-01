export type ITodo = {
  id: number;
  task: string;
  completed: boolean;
};

export enum Screens {
  Home = "Home",
  Edit = "Edit",
  Create = "Create",
}
