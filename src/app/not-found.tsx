import Link from "next/link";
import Image from "next/image";

export default async function NotFound() {
  return (
    <div>
      <div>
        <Image
          src={"/not-found.svg"}
          alt="Not found"
          width={300}
          height={300}
        />
        <div>
          <h3>Algo não está certo...</h3>
          <p>
            A página que você está tentando abrir não existe. Talvez você tenha
            digitado o endereço incorretamente ou a página foi movida para outra
            URL. Se você acha que isso é um erro, entre em contato com o
            suporte.
          </p>
          <Link href={"/"}>
            <button>Voltar para a página inicial</button>
          </Link>
        </div>
        <Image
          src={"/not-found.svg"}
          alt="Not found"
          width={404}
          height={404}
        />
      </div>
    </div>
  );
}
