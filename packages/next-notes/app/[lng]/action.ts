'use server';

import { redirect } from 'next/navigation';
import { addNote, updateNote, delNote } from '@/lib/redis';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const schema = z.object({
  title: z.string(),
  content: z.string().min(1, '请填写内容').max(100, '字数最多 100'),
});

export async function saveNote(prevState: any, formData: FormData) {
  // 获取 noteId
  const noteId = formData.get('noteId');

  const data = {
    title: formData.get('title'),
    content: formData.get('body'),
    updateTime: new Date(),
  };

  // 校验数据
  const validated = schema.safeParse(data)
  if (!validated.success) {
    return {
      errors: validated.error.issues,
    }
  }

  // 为了让效果更明显
  await sleep(2000);

  if (noteId) {
    await updateNote(noteId as string, JSON.stringify(data))
    revalidatePath('/', 'layout')
  } else {
    await addNote(JSON.stringify(data))
    revalidatePath('/', 'layout');
  }
  return { message: `Add Success!` };
}

export async function deleteNote(prevState: any, formData: FormData) {
  const noteId = formData.get('noteId');
  delNote(noteId! as string);
  revalidatePath('/', 'layout');
  redirect('/');
}
