"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
  if (password === "greha123") {
    document.cookie = "site_access=granted; path=/; SameSite=Lax";
    window.location.replace("/");
  } else {
    alert("Wrong password");
  }
};

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Private Access</h2>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin}>Enter</button>
    </div>
  );
}