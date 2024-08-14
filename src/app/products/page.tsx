import styles from "./Products.module.css";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <title>Products</title>
      <div className="flex flex-col bg-gray-600 px-2 py-2">
        <Image src="/next.svg" alt="next" width={200} height={50} />
      </div>
    </>
  );
}
