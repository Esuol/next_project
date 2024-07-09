import './globals.css';

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const { children, modal } = props;
  return (
    <html>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
