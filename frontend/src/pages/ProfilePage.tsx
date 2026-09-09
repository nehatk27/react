import useDocumentTitle from "../hooks/useDocumentTitle";

function ProfilePage() {
  useDocumentTitle("Profile");

  return (
    <main>
      <h2>Profile</h2>

      <p>Name: Neha</p>
      <p>Email: example@email.com</p>
    </main>
  );
}

export default ProfilePage;
