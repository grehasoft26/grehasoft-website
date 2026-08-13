import Footer from "./Footer";
import { getMenuData } from "@/lib/backend-api";


export default async function FooterWrapper() {
  const menuData = await getMenuData();

  return (
    <Footer
      initialData={menuData.footerAcf}
      initialMenu={menuData.footerMenu || []}
    />
  );
}