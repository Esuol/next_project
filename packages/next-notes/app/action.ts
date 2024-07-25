'use server';

import { redirect } from 'next/navigation';
import { addNote, updateNote, delNote } from '@/lib/redis';
import { revalidatePath } from 'next/cache';

export async function saveNote(formData: FormData) {
  const noteId = formData.get('noteId');

  const data = JSON.stringify({
    title: formData.get('title'),
    content: formData.get('body'),
    updateTime: new Date(),
  });

  if (noteId) {
    console.log('Updating note', noteId, data);
    updateNote(noteId as string, data);
    revalidatePath('/', 'layout');
    redirect(`/note/${noteId}`);
  } else {
    const res = await addNote(data);
    // Revalidate the home page to update the sidebar
    revalidatePath('/', 'layout');
    redirect(`/note/${res}`);
  }
}

export async function deleteNote(noteId: string) {
  delNote(noteId);
  revalidatePath('/', 'layout');
  redirect('/');
}
