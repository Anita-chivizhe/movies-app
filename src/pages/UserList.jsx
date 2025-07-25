import { User } from "../components/User";

// Smart (Data) & Presentation Component - Pattern
// Task: Use map & Make it DRY
export function UserList() {
  const users = [
    {
      name: "Arjun",
      pic: "https://i.pinimg.com/736x/67/b4/96/67b49639339ccdadf672c78cc77a58b9.jpg",
    },
    {
      name: "Chleo",
      pic: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
    },
    {
      name: "Jeevan",
      pic: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      pic: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="user-list-container">
      {users.map((user, index) => (
        <User key={index} {...user} />
      ))}
    </div>
  );
}
