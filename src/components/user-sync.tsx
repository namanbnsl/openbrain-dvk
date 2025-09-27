"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";

export function UserSync() {
  const { user: clerkUser, isLoaded } = useUser();
  const createOrUpdateUser = useMutation(api.users.createOrUpdateUser);

  useEffect(() => {
    if (isLoaded && clerkUser) {
      createOrUpdateUser({
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress || "",
        firstName: clerkUser.firstName || undefined,
        lastName: clerkUser.lastName || undefined,
        fullName: clerkUser.fullName || undefined,
        imageUrl: clerkUser.imageUrl || undefined,
      });
    }
  }, [isLoaded, clerkUser, createOrUpdateUser]);

  return null; // This component doesn't render anything
}
