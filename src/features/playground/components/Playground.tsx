import { UserProfile } from "../../profile/components/UserProfile";

export const Playground = () => {
  return (
    <div className="p-8 flex gap-4">
      <UserProfile
        name="John Doe"
        role="Developer"
        isAdmin={false}
        imgURL="https://avatars.githubusercontent.com/u/57248708?v=4"
      />

      <UserProfile
        name="John Doe"
        role="Developer"
        isAdmin={true}
        imgURL="https://avatars.githubusercontent.com/u/57248708?v=4"
      />
    </div>
  );
};
