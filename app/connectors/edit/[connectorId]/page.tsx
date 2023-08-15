type EditConnectorPage = {
  params: {
    connectorId: string;
  };
};

export default function EditConnector({
  params: { connectorId },
}: EditConnectorPage) {
  return (
    <main>
      <h1>Edit connector: {connectorId}</h1>
    </main>
  );
}
