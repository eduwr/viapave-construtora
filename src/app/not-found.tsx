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
          <h3>Something is not right...</h3>
          <p>
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </p>
          <Link href={"/"}>
            <button>Get back to home page</button>
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
