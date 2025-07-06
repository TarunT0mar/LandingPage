import  Header from "@/app/UICOMP/Header";
import Anouncement from "@/app/UICOMP/Anouncement"
import Hero from "@/app/UICOMP/Hero"
import Advertisement from "@/app/UICOMP/Advertisement"
import DetailSection from "@/app/UICOMP/DetailSection"
import ExplainSection from "@/app/UICOMP/ExplainSection"
import TeamIntro from "@/app/UICOMP/TeamIntro"
import Review from "@/app/UICOMP/Review"
import FAQ from "@/app/UICOMP/FAQ"

export default function Home() {
  return (
    <>
    <Anouncement/>
   <Header/>
   <Hero />
  <Advertisement/>
  <DetailSection/>
  <ExplainSection/>
  <TeamIntro/>
  <Review/>
  <FAQ/>
   </>
  );
}
