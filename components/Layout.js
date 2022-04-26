import Head from "next/head"
import Footer from "./Footer"
import styled from "@/styles/Layout.module.css"

export function Layout({ children }){
  return (
      <>
        <main className="layout">
        <Head> <title> Next Framework</title> </Head>
        {children}
        </main>
        <Footer/>
      </>
  );
}
