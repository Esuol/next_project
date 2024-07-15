'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createToDo } from './actions';

const initialState = {
  message: 'initial message',
};

function SubmitButton() {
  // @ts-ignore
  const { pedding } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pedding}>
      {pedding ? 'Adding' : 'Add'}
    </button>
  );
}

export default function AddToDoForm() {
  const [state, formAction] = useFormState(createToDo, initialState);

  return (
    <form action={formAction}>
      <input type="text" name="todo" style={{ color: 'black' }} />
      <SubmitButton />
      <p aria-live="polite" style={{ color: 'white' }}>
        {state?.message}
      </p>
    </form>
  );
}
