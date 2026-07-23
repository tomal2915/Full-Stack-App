interface AvatarProps {
  imgURL: string;
  altText: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ imgURL, altText, size = "md" }: AvatarProps) {
  const sizeClass = {
    // size === "sm" ? "avatar-sm" : size === "lg" ? "avatar-lg" : "avatar-md";
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <img
      src={imgURL}
      alt={altText}
      className={`${sizeClass[size]} rounded-full object-cover border-2 border-gray-200`}
    />
  );
}
