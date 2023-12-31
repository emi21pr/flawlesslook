import React from "react";
import Navbar2 from "../components/Navbar2";
import HeroSkincare from "../components/SkinCare/HeroSkincare";
import ProductsSkincare from "../components/SkinCare/ProductsSkincare";
import CollectionsSkin from "../components/SkinCare/CollectionsSkin";

function CollectionSkincare() {
  return (
    <div className="py-6 lg:px-[50px] px-4 gap-5 flex flex-col">
      <Navbar2 />
      <HeroSkincare />
      <ProductsSkincare/>
      <CollectionsSkin/>
    </div>
  );
}

export default CollectionSkincare;
