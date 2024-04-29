import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './ReduxActions.ts';

export interface Todo {
  id: number;
  title: string;
  completed?: boolean;
}

export interface State {
  daily: Todo[];
  tasks: Todo[];
}

const initialState: State = {
  daily: [
    { id: 1, title: 'Zrobić apkę TODO', completed: true },
    { id: 2, title: 'Przerobić apkę TODO', completed: true },
    { id: 3, title: 'Wysłać apkę TODO', completed: false }
  ],
  tasks: [
    { id: 5, title: 'nielubiany przeze mnie redux dodany'},
    { id: 6, title: 'ileż on mi krwi napsuł'},
  ]
};

const todoReducer = (state = initialState, action: any) => {
      switch (action.type) {
        case ADD_TODO:
          return {
            ...state,
            [action.payload.type]: [...state[action.payload.type], action.payload.todo]
          };

        case REMOVE_TODO:
          return {
            ...state, 
            [action.payload.type]: state[action.payload.type].filter((todo: Todo) =>
              todo.id !== action.payload.id)
          };

          case TOGGLE_TODO:
            return {
              ...state,
              daily: state.daily.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
              )
            };


        default:
          return state;
      }
};

export default todoReducer;
