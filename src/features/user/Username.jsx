import { useSelectUser } from './userSlice';

function Username() {
  const { username } = useSelectUser();

  if (!username) return null;
  return <p className="hidden text-sm font-semibold md:block">{username}</p>;
}

export default Username;
