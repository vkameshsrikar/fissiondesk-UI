'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function goToLogin() {
    router.push('/login');
  }
  return (
    <>
      <h1>Fission Desk</h1>
      <button type="button" onClick={() => goToLogin()}>CLICK HERE TO LOGIN</button>
    </>    
  );
}
