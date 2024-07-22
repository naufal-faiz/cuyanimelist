import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link href="/users/dashboard" className="p-3">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-myColor-dark p-3 text-myColor-accent rounded hover:bg-myColor-primary hover:text-myColor-dark transition-all"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
