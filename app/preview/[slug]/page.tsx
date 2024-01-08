import { SanityClient, urlFor } from "@/lib/sanity";
import { NewUmma } from "@/public";
import Head from "next/head";
import Image from "next/image";
import PortableText from "react-portable-text";

interface blogInterface {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}

export const revalidate = 30;
<Head>
  <title>Blog View</title>
</Head>

const blogView = async ({ params }: { params: { slug: string } }) => {
  async function getData(slug: string) {
    const query = `
        *[_type == 'blog' && slug.current == '${slug}'] {
            "currentSlug": slug.current,
              title,
              content,
              titleImage
          } [0]
        `;
    const data: blogInterface = await SanityClient.fetch(query);
    return data;
  }

  const data: blogInterface = await getData(params.slug);
  return (
    <div className=" lg:px-24 pt-20 flex flex-col space-y-10 items-center justify-center">
      <div className=" mt-5">
        <Image
        src={NewUmma}
        quality={100}
        priority
        alt="blog-logo"
        draggable={false}
        width={100}
        height={50}
        />
      </div>
      <span className=" text-neutral-900 dark:text-blue-500 font-bold text-sm">
        Umma Tech Hub - Umma University
      </span>
      <h1 className=" text-3xl font-extrabold tracking-wide text-center">{data.title}</h1>
      <div className=" mx-2 md:mx-0 w-full h-[400px] md:w-[70%] md:h-[500px] rounded-lg">
        <Image
          src={urlFor(data.titleImage).url()}
          width={800}
          height={800}
          quality={100}
          priority
          alt={data.title}
          className=" w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className=" mt-16 px-3 prose prose-green dark:prose-invert md:prose-xl">
        <PortableText
          content={data.content}
          serializers={{
            h1: (props: any) => <h1 style={{ color: "red" }} {...props} />,
            li: ({ children }: any) => (
              <li className="special-list-item">{children}</li>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default blogView;
