"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function AdminRoute() {
  const pathName = usePathname();

  useEffect(() => {}, [pathName]);

  return null;
}

export default AdminRoute;
