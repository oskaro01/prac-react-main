export const fullCode = `
async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Could not load users.");
  }

  return response.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
`;
