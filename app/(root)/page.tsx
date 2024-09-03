import { Button } from "@/components/ui/button"
import Header from "@/components/ui/header";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from 'react';
import { currentUser } from "@clerk/nextjs/server";
import AddDocumentbtn from "@/components/ui/addDocumentbtn";

const Home = async () => {
  const clerkUser = await currentUser();
  const documents = [];
  return (
    <main className="home-container">
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          Notifications
          <SignedIn>
            <UserButton></UserButton>
          </SignedIn>
        </div>
      </Header>
      {documents.length > 0 ? (
        <div>

        </div>
      ) : (
        <div className="document-list-empty">
          <Image 
            src="/assets/icons/doc.svg"
            alt="Document"  
            width={40}
            height={40}
            className="mx-auto"
          />

          <AddDocumentbtn 
            userId={clerkUser?.id}
            email={clerkUser?.emailAddresses[0].emailAddress}
          />
        </div>
      )}
    </main>
  )
}


export default Home;