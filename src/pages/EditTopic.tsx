const EditTopic = () => {
  return (
    <form className="mt-8">
      <div className="flex flex-col gap-4">
        {/* topic title input */}
        <input className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic title" />

        {/* topic description input */}
        <input className="py-2 px-4 border" type="text" name="" id="" placeholder="Topic description" />

        {/* topic action button */}
        <div className="bg-red-200 w-fit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
};

export default EditTopic;
