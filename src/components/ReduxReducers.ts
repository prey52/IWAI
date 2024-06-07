import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './ReduxActions.ts';

export interface Todo {
  id: number;
  title: string;
  completed?: boolean;
}

interface State {
  daily: Todo[];
  tasks: Todo[];
}

const loadStateFromLocalStorage = (): State | undefined => {
  try {
    const serializedState = localStorage.getItem('todosState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return undefined;
  }
};

const saveStateToLocalStorage = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todosState', serializedState);
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
};

const initialState: State = loadStateFromLocalStorage() || {
  daily: [],
  tasks: []
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      const newStateAdd = {
        ...state,
        [action.payload.type]: [...state[action.payload.type], action.payload.todo]
      };
      saveStateToLocalStorage(newStateAdd);
      return newStateAdd;

    case REMOVE_TODO:
      const newStateRemove = {
        ...state,
        [action.payload.type]: state[action.payload.type].filter((todo: Todo) =>
          todo.id !== action.payload.id)
      };
      saveStateToLocalStorage(newStateRemove);
      return newStateRemove;

    case TOGGLE_TODO:
      const newStateToggle = {
        ...state,
        daily: state.daily.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
      saveStateToLocalStorage(newStateToggle);
      return newStateToggle;

    default:
      return state;
  }
};

const resetDailyTasks = () => {
  const currentTime = new Date();
  if (currentTime.getHours() === 0 && currentTime.getMinutes() === 0) {
    const updatedState = {
      ...initialState,
      daily: initialState.daily.map(todo => ({ ...todo, completed: false }))
    };
    saveStateToLocalStorage(updatedState);
  }
};


setInterval(resetDailyTasks, 60000);

export default todoReducer;
