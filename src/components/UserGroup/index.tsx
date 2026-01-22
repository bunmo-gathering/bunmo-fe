"use client";
import { useState } from "react";
import Avatar from "../Avatar";
import { UserGroupProps, UserInfo } from "./props.type";

const UserGroup = ({ entryUsers }: UserGroupProps) => {
  const [pickedUsers, setPickedUsers] = useState<UserInfo[]>([]);

  if (entryUsers.length > 3) {
  }

  entryUsers.map((user) => {
    return (
      <div className="relative w-full">
        <Avatar size="xs" imageUrl={user.avatarUrl} status="none" />;
      </div>
    );
  });
};

export default UserGroup;
