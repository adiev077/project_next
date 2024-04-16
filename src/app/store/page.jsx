import Header from "@/components/header/Header";
import PromoBlock from "@/app/store/PromoBlock/PromoBlock";
import MacSwipper from "@/app/store/MacSwipper/MacSwipper";

export default function Home() {
  return (
    <div>
      <Header/>
      <PromoBlock/>
      <MacSwipper/>
    </div>
  );
}
