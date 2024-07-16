'use client';

import { use, useOptimistic } from 'react';
import { useFormState } from 'react-dom';
import { createToDo } from './action';

export default function Form(props: { todos: string[] }) {
  const { todos } = props;
  const [state, sendFormAction] = useFormState(createToDo, {
    message: 'initial message',
  });

  const [optimistiToDos, addOptimisticTodo] = useOptimistic(
    todos.map((i) => ({ text: i })),
    (state, newTodo) => [
      ...state,
      {
        text: newTodo as unknown as string,
        sending: true,
      },
    ]
  );
}
