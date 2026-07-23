interface BadgeProps {
  role: string;
  isAdmin?: boolean;
}

export function Badge({ role, isAdmin = false }: BadgeProps) {
  const badgeClass = isAdmin
    ? "bg-red-500 text-white"
    : "bg-gray-200 text-gray-800";

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs tracking-wider font-semibold ${badgeClass}`}
    >
      {role}
    </span>
  );
}
