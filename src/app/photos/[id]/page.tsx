export default function Modal({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="modal-backdrop">
      <div>{id}</div>
    </div>
  );
}
