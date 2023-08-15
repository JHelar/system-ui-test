type EditMirrorProps = {
  params: {
    mirrorId: string;
  };
};

export default function EditMirror({ params: { mirrorId } }: EditMirrorProps) {
  return (
    <main>
      <h1>Edit mirror: {mirrorId}</h1>
    </main>
  );
}
