'use server';

import { revalidatePath } from 'next/cache';

const data = ['阅读', '写作', '冥想'];

export async function findToDos() {
  return data;
}

export async function createToDo(formData: FormData) {
  const todo = formData.get('todo');
  data.push(todo as unknown as string);
  revalidatePath('/form2');
  return data;
}
