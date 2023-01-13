import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function index() {
  const router = useRouter();
  const hits = router.query.indexId;
  return (
    <div className="finish">
      <h1>Você acertou {hits}/5</h1>
      <Image
        src={"/images/parabens.png"}
        width="700"
        height="700"
        className="finalImage"
      />
      <Link href={"/"}>
        <button className="button">Voltar ao inicio</button>
      </Link>
    </div>
  );
}

export default index;
