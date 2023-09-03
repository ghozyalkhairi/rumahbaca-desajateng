import { NextPage } from "next";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";
import Profile from "@/components/shared/Profile";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rumah Baca | Desa Jawa Tengah</title>
        <meta
          name="description"
          content="Rumah Baca Masyarakat Desa Jawa Tengah"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Profile />
      </MainLayout>
    </>
  );
};

export default Contact;
