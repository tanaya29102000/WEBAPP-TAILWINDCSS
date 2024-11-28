import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../features/users/usersSlice';

const UserDetailPage = () => {
  const { id } = useParams();
  const users = useSelector(selectAllUsers);
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) return <p>User not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address.street}, {user.address.city}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserDetailPage;
