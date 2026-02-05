"use client";
import { useEffect, useState } from "react";
import Avatar from "../Avatar";
import { UserGroupProps, UserInfo } from "./props.type";

const UserGroup = ({ entryUsers }: UserGroupProps) => {
  const [pickedUsers, setPickedUsers] = useState<UserInfo[]>([]);

  useEffect(() => {
    if (entryUsers.length <= 3) {
      setPickedUsers(entryUsers);
      return;
    }

    setPickedUsers([...entryUsers].sort(() => Math.random() - 0.5).slice(0, 3));
  }, [entryUsers]);

  return (
    <div className="flex items-center">
      {pickedUsers.map((user, index) => {
        return (
          <div
            key={user.userId}
            className="flex -mr-2"
            style={{
              zIndex: `${index - 10}`,
            }}
          >
            <Avatar size="xs" imageUrl={user.avatarUrl} status="none" />
          </div>
        );
      })}
      {entryUsers.length > 3 && (
        <div
          className={`${entryUsers.length > 12 ? "w-8 h-6" : "size-6"} px-1 py-0.75 rounded-xl bg-surface border-outline text-primary border flex justify-center items-center z-10 text-caption-semibold!`}
        >
          <p>+{entryUsers.length - 3}</p>
        </div>
      )}
    </div>
  );
};

export default UserGroup;
