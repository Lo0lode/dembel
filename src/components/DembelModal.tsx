export const DembelModal = () => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50">
      <div className="bg-black p-6  rounded-lg shadow-lg max-w-md w-full">
        <p className="text-lg font-medium mb-4 text-[#ffe5cc]">
          Введите число начала службы
        </p>
        <input
          className="w-full px-3 py-2 border border-[#ffe5cc] rounded-md focus:outline-none "
          placeholder="Введите число"
        />
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-4 py-2 bg text-[#ffe5cc] rounded-md  bg-[#a11312]">
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
};
