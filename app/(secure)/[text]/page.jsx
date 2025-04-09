"use client"
import { useSearchParams } from "next/navigation";

export default function SecurePage() {
  const searchParams = useSearchParams();
  const isAuth = searchParams.get("auth");
  const isCreate = searchParams.get("create");
  return (
    <div className="p-6">
      {isAuth && <p>Please enter your password to decrypt the note.</p>}
      {isCreate && (
        <p>This note is new. Please create a password to secure it.</p>
      )}
    </div>
  );
}
