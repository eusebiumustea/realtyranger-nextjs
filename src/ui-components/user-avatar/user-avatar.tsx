import { memo } from "react";
interface UserAvatarProps {
  username: string;
  image?: string;
  onClick: () => void;
  className?: string;
}
export const UserAvatar = memo(
  ({ username, image, onClick, className }: UserAvatarProps) => {
    return (
      <div
        onClick={onClick}
        className={`flex max-w-44 select-none cursor-pointer flex-row items-center gap-x-2 ${className}`}
      >
        <img
          className="w-9 h-9 rounded-full object-cover"
          src={
            image ||
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          }
          loading="lazy"
        />
        <h1 className={`text-base font-inter`}>{username}</h1>
      </div>
    );
  }
);
