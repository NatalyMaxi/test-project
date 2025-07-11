interface Props {
  params: Promise<{ id: string }>;
}

export default async function Product({ params }: Props) {
  const { id } = await params;
  return (
    <div>
      <h1>Продукт {id}</h1>
    </div>
  );
}
