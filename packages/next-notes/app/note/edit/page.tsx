import NoteEditor from '@/components/NoteEditor';

export default async function EditPage() {
  // @ts-ignore
  return <NoteEditor noteId={null} initialTitle="Untitled" initialBody="" />;
}
