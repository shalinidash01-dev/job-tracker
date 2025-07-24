export default function JobCard({ company, role, status, date }) {
  const statusColor = {
    Interview: 'bg-yellow-100 text-yellow-800',
    Rejected: 'bg-red-100 text-red-800',
    Offer: 'bg-green-100 text-green-800',
    Applied: 'bg-blue-100 text-blue-800',
  }[status] || 'bg-gray-100 text-gray-800';

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{company}</h3>
        <span className={`text-sm px-3 py-1 rounded-full font-medium ${statusColor}`}>
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{role}</p>
      <p className="text-xs text-gray-400 mt-2">Applied on: {date}</p>
    </div>
  );
}
