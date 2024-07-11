const SmallScreenFilter = () => {
  const displayModal = () => {
    const dialog = document.getElementById("modal_1") as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <div className="mt-2 pb-2 xl:hidden">
      <button
        onClick={displayModal}
        type="button"
        className="btn w-full btn-success font-medium text-xl tracking-widest text-white"
      >
        Filter
      </button>
      <dialog id="modal_1" className="modal">
        <div className="modal-box">
          <h3 className="">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SmallScreenFilter;
