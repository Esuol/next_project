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

  async function formAction(formData: FormData) {
    addOptimisticTodo(formData.get('todo'));
    await sendFormAction(formData);
  }

  console.log(optimistiToDos);

  return (
    <>
      <form action={formAction}>
        <input type="text" name="todo" />
        <button type="submit"> Add </button>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
      <ul>
        {/* @ts-ignore */}
        {optimistiToDos.map(({ text, sending }, i) => (
          <li key={i}>
            {text}
            {!!sending && <small> (Sending...)</small>}
          </li>
        ))}
      </ul>
    </>
  );
}
