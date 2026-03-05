const statusColor = {
  completed: "bg-[#00B69B]",
  processing: "bg-[#6226EF]",
  rejected: "bg-[#EF3826]",
  "on hold": "bg-[#FFA756]",
  "in transit": "bg-[#BA29FF]",
};

const OrderItem = ({ order }) => {
  return (
    <tr className="bg-alt hover:bg-table-hover transition-colors">
      <td className="px-6 py-4">{order.id}</td>
      <td className="px-6 py-4 font-medium text-text">{order.name}</td>
      <td className="px-6 py-4">{order.address}</td>
      <td className="px-6 py-4">{order.date}</td>
      <td className="px-6 py-4 capitalize">{order.type}</td>
      <td className="px-6 py-4 capitalize">
        <span
          className={`px-4 py-2 rounded-lg text-white ${statusColor[order.status]}`}
        >
          {order.status}
        </span>
      </td>
    </tr>
  );
};

export default OrderItem;
