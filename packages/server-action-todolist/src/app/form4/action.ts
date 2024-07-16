'use server';

import { revalidatePath } from 'next/cache';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

let data = ['阅读', '写作', '冥想'];

export async function findToDos() {
  return data;
}

export async function createToDo(prevState: any, formData: FormData) {
  await sleep(2500);
  const todo = formData.get('todo');
  data.push(todo as unknown as string);
  revalidatePath('/form4');
  return {
    message: `add ${todo} success!`,
  };
}
