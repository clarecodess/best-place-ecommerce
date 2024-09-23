"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoggedIn(true);
            setUserEmail(user.email); // Set the user's email
          } else {
            setIsLoggedIn(false);
            setUserEmail(null);
          }
    });

    return () => unsubscribe();
  }, []);

  const handleProfile = () => {
    
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <div className="cursor-pointer" onClick={handleProfile}>
        {isLoggedIn ? (
          <span className="mr-2">Hi, {userEmail}</span> // Display user's email
        ) : null}
        <Image 
          src="/profile.png" 
          alt="Profile" 
          width={22} 
          height={22} 
        />
      </div>
      
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/login">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogout}>Logout</div>
        </div>
      )}

      <Image src="/notification.png" alt="Notification" width={22} height={22} className="cursor-pointer" />

      <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
        <Image src="/cart.png" alt="Cart" width={22} height={22} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-accent rounded-full text-white text-small flex items-center justify-center">2</div>
      </div>

      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
