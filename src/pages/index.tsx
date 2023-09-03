import { NextPage } from "next";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/shared/Hero";
import Tujuan from "@/components/shared/Tujuan";
import Lokasi from "@/components/shared/Lokasi";
import Program from "@/components/shared/Program";

const Home: NextPage = () => {
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
        <Hero />
        <Tujuan />
        <Program />
        <Lokasi />
      </MainLayout>
    </>
  );
};

export default Home;
