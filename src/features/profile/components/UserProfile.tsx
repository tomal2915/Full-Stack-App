import { Avatar } from "../../../components/Avatar";
import { Badge } from "../../../components/Badge";

interface UserProfileProps {
  name: string;
  role: string;
  isAdmin: boolean;
  imgURL: string;
}

export const UserProfile = ({
  name,
  role,
  isAdmin,
  imgURL,
}: UserProfileProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200 max-w-sm">
      <Avatar imgURL={imgURL} altText={`${name}'s avatar`} size="lg" />
      <div className="flex flex-col">
        <span className="text-xl font-extrabold text-gray-900">{name}</span>
        <Badge role={role} isAdmin={isAdmin} />
      </div>
    </div>
  );
};
