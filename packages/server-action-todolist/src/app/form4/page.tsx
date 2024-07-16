import { findToDos } from './action';
import Form from './form';

export default async function Page() {
  const todos = await findToDos();
  return <Form todos={todos} />;
}
