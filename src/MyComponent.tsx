type Props = {
  title: string;
};

function MyComponent({ title }: Props) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>This is styled using CSS</p>
    </div>
  );
}

export default MyComponent;