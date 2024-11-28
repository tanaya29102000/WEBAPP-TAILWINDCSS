import { Link } from 'react-router-dom';

const UserCard = ({ user }) => (
  <div className="p-4 border rounded shadow">
    <h2 className="text-xl font-bold">{user.name}</h2>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <p>{user.company.name}</p>
    <Link to={`/users/${user.id}`} className="text-blue-500">View Details</Link>
  </div>
);

export default UserCard;
