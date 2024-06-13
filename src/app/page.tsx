import { onGetBlogPosts } from "@/actions/landing";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/constants/landing-page";
import { getMonthName } from "@/lib/utils";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { features, title } from "process";

export default async function Home() {
  const posts:
    | {
        id: string;
        title: string;
        image: string;
        content: string;
        createdAt: Date;
      }[]
    | undefined = await onGetBlogPosts();

  return (
    <main>
      <NavBar />
      <section>
        <div className=" flex items-center justify-center flex-col mt-[80px] gap-4">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={500}
            height={100}
            className=" max-w-lg object-contain"
          ></Image>
          <span className=" text-orange bg-orange/10 px-4 py-2 rounded-full text-lg font-bold">
            An AI powered sales assistant chatbot.
          </span>
          <p className=" text-center max-w-[500px]">
            Your AI powered sales assistant! Embed Convomaster AI into any
            website with just a snippet of code.
          </p>
          <Button className=" bg-orange font-bold text-white px-4 ">
            Start for free
          </Button>
          <Image
            src={""}
            alt="model"
            width={400}
            height={100}
            className=" max-w-lg object-contain"
          />
        </div>
      </section>

      <section className=" flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className=" text-4xl text-center ">
          Choose whats fits you right.✅
        </h2>
        <p className=" text-muted-foreground text-center max-w-lg">
          Our straightforward pricing plans are tailoreed to meet your needs .
          If you are not ready to commit you can get started for free.
        </p>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => {
          return (
            <Card
              key={card.title}
              className={clsx(
                "w-[300px] flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-yellow-600  hover:bg-yellow-100",
                {
                  "border-2 border-primary": card.title === "Unlimited",
                }
              )}
            >
              <CardHeader>
                <CardTitle className="text-orange">{card.title}</CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.title)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">
                  <span>/month</span>
                </span>
              </CardContent>
              <CardFooter className="flex-col flex items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex gap-2">
                      <Check />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/dashboard?plan=${card.title}`}
                  className="bg-orange border-white border-2 p-2 w-full text-center font-bold rounded-md"
                >
                  Get started
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <section className=" flex justify-center items-center flex-col gap-4 mt-28">
        <h2 className=" text-4xl text-center ">
       NewsRoom
        </h2>
        <p className=" text-muted-foreground text-center max-w-lg">
         Explore our insights on AI , technology and optimising your business.
        </p>
      </section>
      <section className="md:grid-cols-3 grid-cols-1 grid gap-5 container mt-8">
        {posts &&
          posts.map((post) => (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-yellow-100">
                <div className="relative w-full aspect-video">
                  <Image
                    src={`${process.env.CLOUDWAYS_UPLOADS_URL}${post.image}`}
                    alt="post featured image"
                    fill
                  />
                </div>
                <div className="py-5 px-10 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(post.createdAt.getMonth())}{' '}
                    {post.createdAt.getDate()} {post.createdAt.getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {/* {parse(post.content.slice(4, 100))}... */}
                </div>
              </Card>
            </Link>
          ))}
      </section>
    </main>
  );
}
