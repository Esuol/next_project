'use server';

import { revalidatePath } from 'next/cache';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let data = ['阅读', '写作', '冥想'];

export async function findToDos() {
  return data;
}

export async function createToDo(
  prevState: Record<'message', any>,
  formData: FormData
) {
  await sleep(500);
  const todo = formData.get('todo');
  data.push(todo as unknown as string);
  revalidatePath('/form3');
  return {
    message: `${prevState.message} add${todo}success!`,
  };
}
