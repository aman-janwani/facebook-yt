import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Feed from '../components/Feed';
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db } from '../firebase';
import { useEffect } from "react";
import { v4 } from 'uuid';

export default function Home({ session, posts }) {
  useEffect(() => {
    if (session?.user) {
      db.collection("LogedInUsers")
      .doc(session?.user.name)
      .collection("how many time loged in")
      .doc(v4())
      .set(
        {
          email: session?.user.email,
          name: session?.user.name,
          photoURL: session?.user.image,
        },
        { merge: true }
      );
    }
  }, [session?.user]);

  if (!session) return <Login />
  return (
    <div className="h-screen bg-gray-100 overflow-x-hidden">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed posts={posts}/>
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  
  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }))
  return {
    props: {
      session,
      posts: docs,
    },
  };
};
