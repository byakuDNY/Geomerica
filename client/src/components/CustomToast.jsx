import { toast } from "react-hot-toast";

const CustomToast = ({ message, id }) => (
  <div className="flex items-center justify-between bg-white p-2 rounded">
    <div>{message}</div>
    <button
      className="ml-4 bg-red-500 text-white hover:text-gray-200 p-1 rounded"
      onClick={() => toast.remove(id)}
    >
      Close
    </button>
  </div>
);

export default CustomToast;
